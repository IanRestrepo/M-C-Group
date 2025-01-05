import { q as queryDb } from '../../../chunks/db_CJAxVE4Z.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const formData = await request.formData();
    const email = formData.get("email");
    const username = formData.get("username");
    const password = formData.get("password");
    if (!email || !password || !username) {
      return new Response(
        JSON.stringify({ message: "Incorrect usage of API, please fill up all the inputs!" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    ;
    const userExist = await queryDb(
      "SELECT * FROM Users WHERE email = ?",
      [email]
    );
    if (userExist.rows.length > 0) {
      return new Response(
        JSON.stringify({ error: "Internal Server Error: Maybe the e-mail is already being used" }),
        { status: 409, headers: { "Content-Type": "applicationque s/json" } }
      );
    }
    ;
    const result = await queryDb(
      "INSERT INTO Users (email, password_hash, username) VALUES (?,?,?)",
      [email, password, username]
    );
    return new Response(
      JSON.stringify({ message: "User created successfully, userId: ", userId: result.lastInsertRowid?.toString() }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: `Internal Server Error: ${error}` }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
