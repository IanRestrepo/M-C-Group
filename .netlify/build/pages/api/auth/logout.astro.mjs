import { q as queryDb } from '../../../chunks/db_CJAxVE4Z.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ request, cookies }) => {
  try {
    const { sessionToken } = await request.json();
    if (!sessionToken) {
      return new Response(
        JSON.stringify({ errorMessage: "Session Token is required!" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    ;
    const sessionExist = await queryDb("SELECT session_token FROM Sessions WHERE session_token = ?", [sessionToken]);
    if (sessionExist.rows.length === 0) {
      return new Response(
        JSON.stringify({ errorMessage: "Session Token does not exist!" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }
    ;
    await queryDb("DELETE FROM Sessions WHERE session_token = ?", [sessionToken]);
    cookies.delete("session_token");
    return new Response(
      JSON.stringify({ message: "Log-out Successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ errorMessage: `Internal Server Error ${error}` }),
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
