import type { APIRoute } from "astro"
import { queryDb } from "@lib/db";

export const GET: APIRoute = async ({ request })=> {

    try {

        //? FIXME: Should this method be exposed in the public API? 

        const usernames = await queryDb("SELECT username FROM Users") // GET The usernames in the db

        return new Response(
            JSON.stringify( usernames.rows ),
            { status: 200, headers: { "Content-Type": "application/json"}}
        );

    } catch (error) {

        return new Response(
            JSON.stringify({ error: `Internal Server Error: ${error}`}),
            { status: 500, headers: { "Content-Type": "application/json" }}
        );

    };

};

export const POST: APIRoute = async ({ request }) => {

    try {

        const data = await request.json(); // First read the Data that the clients send, this line see if the data is on JSON.
        const { email, password, username } = data; // Secondth destructure what you need of the petition.

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
                { status: 409, headers: { "Content-Type": "application/json" }}
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