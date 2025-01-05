import { q as queryDb } from '../../../chunks/db_CJAxVE4Z.mjs';
export { renderers } from '../../../renderers.mjs';

const GET = async () => {
  const result = await queryDb("SELECT name FROM sqlite_master WHERE type='table'");
  return new Response(
    JSON.stringify(result.toJSON()),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
};
const POST = async ({ request }) => {
  try {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    if (!email || !password) {
      return new Response(
        JSON.stringify({ errorMessage: "Incorrect usage of API, Please fill up all the inputs.", statusCode: "BAD REQUEST: 400" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    ;
    const userResult = await queryDb(`SELECT id, password_hash FROM Users WHERE email = ?`, [email]);
    if (userResult.rows.length === 0) {
      return new Response(
        JSON.stringify({ errorMessage: "Admin not found!" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }
    ;
    const user = userResult.rows[0];
    if (password != user.password_hash) {
      return new Response(
        JSON.stringify({ errorMessage: "Incorrect password!" }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }
    ;
    const sessionTokenExist = await queryDb("SELECT session_token FROM Sessions WHERE user_id = ?", [user.id]);
    const newSessionToken = crypto.randomUUID();
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1e3);
    if (sessionTokenExist.rows.length > 0) {
      await queryDb("UPDATE Sessions SET session_token = ? WHERE user_id = ?", [newSessionToken, user.id]);
    } else {
      await queryDb("INSERT INTO Sessions (user_id, session_token, expires_at) VALUES (?,?,?)", [user.id, newSessionToken, expiresAt.toISOString()]);
    }
    ;
    return new Response(null, {
      status: 302,
      headers: {
        "Set-Cookie": `session_token=${newSessionToken}; Path=/; Max-Age=604800`,
        "Content-Type": "application/json",
        "Location": "/dashboard"
      }
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: `Internal Server Error: ${error}` }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
