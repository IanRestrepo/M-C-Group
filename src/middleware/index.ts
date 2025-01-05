import { queryDb } from "@lib/db";
import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async ({ url, cookies }, next) => {
  const protectedRoutes = ['/dashboard', '/dashboard/admins', '/dashboard/posts', '/dashboard/tickets'];

  if ( !protectedRoutes.includes(url.pathname) && url.pathname !== "/") {
    return next();
  }

  const sessionToken = cookies.get("session_token");
  
  if ( !sessionToken ) {
    if ( url.pathname === "/") {
      return next();
    }
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/",
      },
    });
  }

  const session = await queryDb("SELECT session_token FROM Sessions WHERE session_token = ?", [sessionToken?.value]);

  if ( session.rows.length === 0 ) {
      cookies.delete("session_token");

      return new Response(null, {
        status: 302,
        headers: {
          Location: "/",
        },
    });
  }

  if (url.pathname === "/") {
    return new Response(
      null,
      {
        status: 302,
        headers: {
          Location: "/dashboard",
        },
      }
    )
  }

  return next();
});
