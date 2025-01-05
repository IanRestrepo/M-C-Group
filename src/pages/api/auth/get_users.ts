import { queryDb } from "@lib/db";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ request })=> {
    const sessionToken = request.headers.get("session_token");

    if(!sessionToken) {
        return new Response(
            JSON.stringify({ error: "No session token provided" }),
            { status: 401, headers: { "Content-Type": "application/json" } }
        );
    }

    const query = `
    SELECT username FROM Users
    JOIN Sessions ON Users.id = Sessions.user_id
    WHERE Sessions.session_token _ ? AND Sessions.expires_at > DATETIME('now')
    `
    const result = await queryDb(query, [sessionToken]);
    
    if ( result.rows.length === 0) {
        return new Response(
            JSON.stringify({ error: "Session not found or expired" }),
            { status: 401, headers: { "Content-Type": "application/json" } }
        );
    }

    return new Response(
        JSON.stringify({ username: result.rows[0].username }),
        { status: 200, headers: { "Content-Type": "application/json" } }
    );
};