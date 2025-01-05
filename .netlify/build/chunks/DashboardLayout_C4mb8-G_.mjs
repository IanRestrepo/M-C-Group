import { f as createComponent, r as renderTemplate, j as renderComponent, h as addAttribute, m as maybeRenderHead, n as renderHead, l as renderSlot, i as createAstro } from './astro/server_liWVwnXO.mjs';
import 'kleur/colors';
import { a as astro, $ as $$Icon, P as PROJECT_SETTINGS } from './LogoTrucking_Bp3OB3wq.mjs';
/* empty css                          */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$NavBar = createComponent(async ($$result, $$props, $$slots) => {
  const navLinks = [
    { href: "/dashboard", icon: "home" },
    { href: "/dashboard/admins", icon: "admins" },
    { href: "/dashboard/posts", icon: "cloud-post" },
    { href: "/dashboard/tickets", icon: "tickets" }
  ];
  return renderTemplate(_a || (_a = __template(["", '<nav class="bg-black w-[4.8rem] transition-all"> <img', ' alt="Logo" class="px-2 py-4"> <ul> ', ' </ul> <button class="flex items-center justify-center text-center w-full py-4" id="logout"> ', ' </button> </nav> <script>\n  const button = document.getElementById("logout");\n\n  button?.addEventListener("click", async (e) => {\n    e.preventDefault();\n\n      try {\n        const sessionToken = document.cookie\n          .split("; ")\n          .find((row) => row.startsWith("session_token="))\n          ?.split("=")[1];\n\n        if (!sessionToken) {\n          console.error("No session token found");\n          return;\n        }\n\n        // Hacer la petici\xF3n POST al endpoint de logout\n        const response = await fetch("/api/auth/logout", {\n          method: "POST",\n          headers: {\n            "Content-Type": "application/json",\n          },\n          body: JSON.stringify({ sessionToken }),\n        });\n\n        const data = await response.json();\n\n        if (response.ok) {\n          window.location.reload();\n        } else {\n          console.error("Error during logout:", data.errorMessage);\n        }\n      } catch (error) {\n        console.error("Error during logout:", error);\n      }\n  });\n<\/script>'])), maybeRenderHead(), addAttribute(astro.src, "src"), navLinks.map(({ href, icon }) => renderTemplate`<li class="text-white"> <a${addAttribute(href, "href")} class="flex gap-4"> ${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "text-white mx-auto my-5", "id": "icon" })} </a> </li>`), renderComponent($$result, "Icon", $$Icon, { "name": "logout", "class": "text-white" }));
}, "C:/dev/myc/src/components/dashboard/NavBar.astro", void 0);

const $$Astro = createAstro();
const $$DashboardLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DashboardLayout;
  return renderTemplate`<html lang="en" data-astro-cid-kqx5um5x> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${PROJECT_SETTINGS.PROJECT_NAME}</title>${renderHead()}</head> <body data-astro-cid-kqx5um5x> <main class="min-h-screen w-full bg-neutral-900 flex overflow-x-hidden relative selection:bg-lime-700 selection:text-lime-300" data-astro-cid-kqx5um5x> ${renderComponent($$result, "NavBar", $$NavBar, { "data-astro-cid-kqx5um5x": true })} <div class="flex-1 overflow-auto h-screen relative" data-astro-cid-kqx5um5x> ${renderSlot($$result, $$slots["default"])} <img${addAttribute(astro.src, "src")} alt="Logo" class="absolute inset-0 m-auto opacity-20 w-64 h-64 pointer-events-none" data-astro-cid-kqx5um5x> </div> </main> </body></html>`;
}, "C:/dev/myc/src/layouts/DashboardLayout.astro", void 0);

export { $$DashboardLayout as $ };
