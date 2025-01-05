/* empty css                                  */
import { f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_liWVwnXO.mjs';
import 'kleur/colors';
import { q as queryDb } from '../chunks/db_CJAxVE4Z.mjs';
import { $ as $$DashboardLayout } from '../chunks/DashboardLayout_C4mb8-G_.mjs';
import { $ as $$Card } from '../chunks/Card_VCV99hAH.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const admins = await queryDb("SELECT * FROM Users");
  const sessions = await queryDb("SELECT * FROM Sessions;");
  const tickets = await queryDb("SELECT * FROM Tickets");
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-10 px-5 grid grid-cols-1 lg:grid-cols-4 place-items-center text-white w-full"> ${renderComponent($$result2, "Card", $$Card, { "size": "small", "icon": "admins" }, { "default": ($$result3) => renderTemplate` <small class="text-neutral-600 text-sm">Admins</small> <h1 class="text-lg w-full">${admins.rows.length} Admins / Moderators</h1> ` })} ${renderComponent($$result2, "Card", $$Card, { "size": "small", "icon": "admin" }, { "default": ($$result3) => renderTemplate` <small class="text-neutral-600 text-sm">Active Sessions</small> <h1 class="text-lg w-full">${sessions.rows.length} Active sessions</h1> ` })} ${renderComponent($$result2, "Card", $$Card, { "size": "small", "icon": "admins" }, { "default": ($$result3) => renderTemplate` <small class="text-neutral-600 text-sm">Tickets</small> <h1 class="text-lg w-full">${tickets.rows.length} Tickets</h1> ` })} ${renderComponent($$result2, "Card", $$Card, { "size": "small", "icon": "server" }, { "default": ($$result3) => renderTemplate` <small class="text-neutral-600 text-sm">DB Calls ( Columns )</small> <h1 class="text-lg w-full">${admins.columns.length + sessions.columns.length + tickets.columns.length}</h1> ` })} </section> ` })}`;
}, "C:/dev/myc/src/pages/dashboard/index.astro", void 0);

const $$file = "C:/dev/myc/src/pages/dashboard/index.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
        __proto__: null,
        default: $$Index,
        file: $$file,
        url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
