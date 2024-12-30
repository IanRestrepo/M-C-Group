import { createClient } from "@libsql/client";

if(!import.meta.env.TURSO_DATABASE_URL || !import.meta.env.TURSO_AUTH_TOKEN) {
    throw new Error("DATABASE CONNECTION FAILED!");
}

export const turso = createClient({
    url: import.meta.env.TURSO_DATABASE_URL,
    authToken: import.meta.env.TURSO_AUTH_TOKEN,
})

export const queryDb = async (query: string, params: any[] = [])=> {
    try {
        const result = await turso.execute({ sql: query, args: params});
        return result;
    } catch (error) {
        console.error("Internal Server Error: ", error);
        throw error
    }
}