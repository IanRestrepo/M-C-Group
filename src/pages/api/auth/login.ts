import type { APIRoute } from "astro";
import { queryDb } from "@lib/db";

export const GET: APIRoute = async ()=> {
    const result = await queryDb("SELECT name FROM sqlite_master WHERE type='table'");

    return new Response(
        JSON.stringify(result.toJSON()),
        { status: 200, headers: { "Content-Type": "application/json" }}
    )
}


export const POST: APIRoute = async ({ request })=> {

    try {
        const formData = await request.formData(); //  Takes the email and password from the request and destructures it
        const email = formData.get('email');
        const password = formData.get('password');

        if (!email || !password) { //? FIX: Verifies if theres email and password and no undefined values
            return new Response(
                JSON.stringify({ errorMessage: "Incorrect usage of API, Please fill up all the inputs.", statusCode: "BAD REQUEST: 400" }),
                { status: 400, headers: { "Content-Type": "application/json"}}
            );
        };

        // Search for the user info with that e-mail
        const userResult = await queryDb(`SELECT id, password_hash FROM Users WHERE email = ?`, [email]);

        //If the query rows is equals to 0 then there's no user with that info
        if ( userResult.rows.length === 0) {
            return new Response(
                JSON.stringify({ errorMessage: "Admin not found!" }),
                { status: 404, headers: { "Content-Type": "application/json" }}
            );
        };

        // if theres user then the first and the unique row is the one you searching for
        const user = userResult.rows[0];
        // Compare the password with the password that is on db
        if (password != user.password_hash) {
            return new Response(
                JSON.stringify({ errorMessage: "Incorrect password!" }),
                { status: 401, headers: { "Content-Type": "application/json" }}
            );
        };

        const sessionTokenExist = await queryDb("SELECT session_token FROM Sessions WHERE user_id = ?", [user.id]);
        const newSessionToken = crypto.randomUUID();
        const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

        if (sessionTokenExist.rows.length > 0) {
            await queryDb("UPDATE Sessions SET session_token = ? WHERE user_id = ?", [newSessionToken, user.id]);
        } else {
            await queryDb("INSERT INTO Sessions (user_id, session_token, expires_at) VALUES (?,?,?)", [user.id, newSessionToken, expiresAt.toISOString()]);
        };

        return new Response(null, {
            status: 302,
            headers: {
                "Set-Cookie": `session_token=${newSessionToken}; Path=/; Max-Age=604800`,
                "Content-Type": "application/json",
                "Location": "/dashboard"
            },
        }); 

    } catch (error) {

        return new Response(
            JSON.stringify({ message: `Internal Server Error: ${error}`}),
            { status: 500, headers: { "Content-Type": "application/json" }}
        );

    }

};
