/* empty css                                     */
import { f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, j as renderComponent, k as renderScript, i as createAstro } from '../../chunks/astro/server_liWVwnXO.mjs';
import 'kleur/colors';
import { q as queryDb } from '../../chunks/db_CJAxVE4Z.mjs';
import { $ as $$DashboardLayout } from '../../chunks/DashboardLayout_C4mb8-G_.mjs';
import { $ as $$Card } from '../../chunks/Card_VCV99hAH.mjs';
import { $ as $$Icon } from '../../chunks/LogoTrucking_Bp3OB3wq.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$NewUserForm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NewUserForm;
  const { action } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<form id="loginForm" method="post"${addAttribute(action, "action")} class="flex flex-col gap-4"> <input type="email" name="email" id="email" required class="rounded-lg text-lime-400 border border-1 border-neutral-700 bg-neutral-950 py-1 px-3 placeholder-neutral-600 outline-none focus:ring-1 ring-lime-800 selection:bg-lime-800 selection:text-lime-400" placeholder="Email" autocomplete="off"> <input type="text" name="username" id="username" required class="rounded-lg text-lime-400 border border-1 border-neutral-700 bg-neutral-950 py-1 px-3 placeholder-neutral-600 outline-none focus:ring-1 ring-lime-800 selection:bg-lime-800 selection:text-lime-400" placeholder="Username" autocomplete="off"> <input type="password" name="password" id="password" required class="rounded-lg text-lime-400 border border-1 border-neutral-700 bg-neutral-950 py-1 px-3 placeholder-neutral-600 outline-none focus:ring-1 ring-lime-800 selection:bg-lime-800 selection:text-lime-400" placeholder="Password" autocomplete="off"> <span id="error-message-container" class="hidden text-red-500 text-sm  items-center gap-2 justify-center selection:bg-red-950"> ${renderComponent($$result, "Icon", $$Icon, { "name": "warning" })} <p id="error-message"></p> </span> <button type="submit" id="submit-button" class="bg-lime-400 text-black font-medium py-1 rounded-lg selection:bg-lime-800 selection:text-lime-400">
Create new user
</button> </form> ${renderScript($$result, "C:/dev/myc/src/components/dashboard/NewUserForm.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/dev/myc/src/components/dashboard/NewUserForm.astro", void 0);

const $$Astro = createAstro();
const $$Admins = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Admins;
  const sessionToken = Astro2.cookies.get("session_token")?.value;
  const user = await queryDb(`
  SELECT Users.username
  FROM Users
  JOIN Sessions ON Users.id = Sessions.user_id
  WHERE Sessions.session_token = ? 
  AND Sessions.expires_at > datetime('now')
`, [sessionToken]);
  const admins = await queryDb("SELECT Users.username, Users.email FROM Users");
  const username = user?.rows[0]?.username || "Guest";
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-10 px-5 text-white w-full"> <h1>Welcome ${username}</h1> <section class="bg-neutral-950 border border-neutral-800 my-5 h-full py-5 px-5 rounded-lg grid grid-cols-1 lg:grid-cols-2"> <div class="py-5 flex gap-5 flex-wrap justify-center overflow-scroll"> ${admins.rows.map(({ username: username2, email }) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "size": "large", "icon": "admin" }, { "default": ($$result3) => renderTemplate` <small class="">${email}</small> <h1>${username2}</h1> ` })}`)} </div> <div class="my-auto mx-10 lg:mx-32"> <h1 class="text-2xl text-center my-5 ">Create new Admin</h1> ${renderComponent($$result2, "NewUserForm", $$NewUserForm, { "action": "/api/auth/create_user" })} </div> </section> </section> ` })}`;
}, "C:/dev/myc/src/pages/dashboard/admins.astro", void 0);

const $$file = "C:/dev/myc/src/pages/dashboard/admins.astro";
const $$url = "/dashboard/admins";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Admins,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
