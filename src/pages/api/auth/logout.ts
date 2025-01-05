import { queryDb } from "@lib/db";
import type {  APIRoute } from "astro";

export const POST: APIRoute = async ({ request, cookies })=> {
    try {
        const { sessionToken } = await request.json();

        if (!sessionToken) {
            return new Response(
                JSON.stringify({ errorMessage: "Session Token is required!"}),
                { status: 400, headers: { "Content-Type": "application/json"} }
            );
        };

        const sessionExist = await queryDb("SELECT session_token FROM Sessions WHERE session_token = ?", [sessionToken]);

        if(sessionExist.rows.length === 0){
            return new Response(
                JSON.stringify({ errorMessage: "Session Token does not exist!"}),
                { status: 404, headers: { "Content-Type": "application/json"}}
            );
        };

        await queryDb("DELETE FROM Sessions WHERE session_token = ?", [sessionToken]);
        cookies.delete("session_token");

        return new Response(
            JSON.stringify({ message: "Log-out Successfully" }),
            { status: 200, headers: { "Content-Type": "application/json"}}
        );

    } catch (error) {
        return new Response(
            JSON.stringify({ errorMessage: `Internal Server Error ${error}`}),
            { status: 500, headers: { "Content-Type": "application/json"}}
        );
    };
};