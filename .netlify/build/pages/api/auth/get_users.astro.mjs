import { q as queryDb } from '../../../chunks/db_CJAxVE4Z.mjs';
export { renderers } from '../../../renderers.mjs';

const GET = async ({ request }) => {
  const sessionToken = request.headers.get("session_token");
  if (!sessionToken) {
    return new Response(
      JSON.stringify({ error: "No session token provided" }),
      { status: 401, headers: { "Content-Type": "application/json" } }
    );
  }
  const query = `
    SELECT username FROM Users
    JOIN Sessions ON Users.id = Sessions.user_id
    WHERE Sessions.session_token _ ? AND Sessions.expires_at > DATETIME('now')
    `;
  const result = await queryDb(query, [sessionToken]);
  if (result.rows.length === 0) {
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
