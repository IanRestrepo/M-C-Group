/* empty css                                     */
import { f as createComponent, r as renderTemplate, j as renderComponent, i as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_liWVwnXO.mjs';
import 'kleur/colors';
import { q as queryDb } from '../../chunks/db_CJAxVE4Z.mjs';
import { $ as $$DashboardLayout } from '../../chunks/DashboardLayout_C4mb8-G_.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Tickets = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tickets;
  const sessionToken = Astro2.cookies.get("session_token")?.value;
  const user = await queryDb(`
  SELECT Users.username
  FROM Users
  JOIN Sessions ON Users.id = Sessions.user_id
  WHERE Sessions.session_token = ? 
  AND Sessions.expires_at > datetime('now')
`, [sessionToken]);
  const username = user?.rows[0]?.username || "Guest";
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-10 px-5 text-white w-full"> <h1>Welcome ${username}</h1> <section class="bg-neutral-950 border border-neutral-800 my-5 h-full py-5 px-5 rounded-lg"> <h1 class="text-center font-mono text-xl text-red-400 italic"> Tickets Not aviable yet</h1> </section> </section> ` })}`;
}, "C:/dev/myc/src/pages/dashboard/tickets.astro", void 0);

const $$file = "C:/dev/myc/src/pages/dashboard/tickets.astro";
const $$url = "/dashboard/tickets";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Tickets,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
