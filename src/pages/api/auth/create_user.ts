import type { APIRoute } from "astro"
import { queryDb } from "@lib/db";

export const POST: APIRoute = async ({ request }) => {

    try {

        const formData = await request.formData(); //  Takes the email and password from the request and destructures it
        const email = formData.get('email');
        const username = formData.get('username');
        const password = formData.get('password');

        // Validate the data received and if theres nothing then throw an error
        if (!email || !password || !username) {
            return new Response(
                JSON.stringify({ message: 'Incorrect usage of API, please fill up all the inputs!' }),
                { status: 400, headers: { "Content-Type": "application/json" }}
            );
        };

        // See's if the user already exist to avoid duplicate information (queryDb is a custom function, see more at @lib/db)
        const userExist = await queryDb('SELECT * FROM Users WHERE email = ?',
            [email]
        );

        // if no rows affected maybe it's because the e-mail is being used so it throws an error.
        if (userExist.rows.length > 0) {
            return new Response(
                JSON.stringify({ error: "Internal Server Error: Maybe the e-mail is already being used"}),
                { status: 409, headers: { "Content-Type": "applicationque s/json" }}
            );
        };

        // Insert the destructured data into the database
        const result = await queryDb('INSERT INTO Users (email, password_hash, username) VALUES (?,?,?)',
            [email, password, username]
        );

        // throw an success message
        return new Response(
            JSON.stringify({ message: 'User created successfully, userId: ', userId: result.lastInsertRowid?.toString()}),
            { status: 200, headers: { "Content-Type": "application/json" }}
        );

    } catch (error) {
        // throw new Error("Internal Server Error / Status code 500")
         return new Response(
            JSON.stringify({ error: `Internal Server Error: ${error}`}),
            { status: 500, headers: { "Content-Type": "application/json" }}
        );
    };

};