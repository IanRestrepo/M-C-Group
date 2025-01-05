/* empty css                                  */
import { f as createComponent, r as renderTemplate, h as addAttribute, n as renderHead, l as renderSlot, i as createAstro, m as maybeRenderHead, j as renderComponent, k as renderScript } from '../chunks/astro/server_liWVwnXO.mjs';
import 'kleur/colors';
import 'clsx';
import { P as PROJECT_SETTINGS, $ as $$Icon, a as astro } from '../chunks/LogoTrucking_Bp3OB3wq.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$AuthLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AuthLayout;
  return renderTemplate`<html lang="en" data-astro-cid-3qlrnpww> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${PROJECT_SETTINGS.PROJECT_NAME}</title>${renderHead()}</head> <body${addAttribute(`bg-[url(/WebbApp.png)]`, "class")} data-astro-cid-3qlrnpww> <main class="h-screen w-screen lg:flex lg:justify-between" data-astro-cid-3qlrnpww> <section class="lg:w-2/3 h-full text-white" data-astro-cid-3qlrnpww> ${renderSlot($$result, $$slots["default"])} </section> <section class="w-full text-white hidden lg:block" data-astro-cid-3qlrnpww></section> </main> </body></html>`;
}, "C:/dev/myc/src/layouts/AuthLayout.astro", void 0);

const $$Astro = createAstro();
const $$SignInForm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SignInForm;
  const { action } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<form id="loginForm" method="post"${addAttribute(action, "action")} class="flex flex-col gap-4"> <input type="email" name="email" id="email" required class="rounded-lg text-lime-400 border border-1 border-neutral-700 bg-neutral-950 py-1 px-3 placeholder-neutral-600 outline-none focus:ring-1 ring-lime-800 selection:bg-lime-800 selection:text-lime-400" placeholder="Email" autocomplete="off"> <input type="password" name="password" id="password" required class="rounded-lg text-lime-400 border border-1 border-neutral-700 bg-neutral-950 py-1 px-3 placeholder-neutral-600 outline-none focus:ring-1 ring-lime-800 selection:bg-lime-800 selection:text-lime-400" placeholder="Password" autocomplete="off"> <span id="error-message-container" class="hidden text-red-500 text-sm  items-center gap-2 justify-center selection:bg-red-950"> ${renderComponent($$result, "Icon", $$Icon, { "name": "warning" })} <p id="error-message"></p> </span> <button type="submit" id="submit-button" class="bg-lime-400 text-black font-medium py-1 rounded-lg selection:bg-lime-800 selection:text-lime-400">
Log in
</button> </form> ${renderScript($$result, "C:/dev/myc/src/components/SignInForm.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/dev/myc/src/components/SignInForm.astro", void 0);

const $$SignIn = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-1/2 m-auto h-full content-center"> <div class="my-8 text-center"> <img${addAttribute(astro.src, "src")} alt="Logo Trucking" class="m-auto"> <h1 class="font-semibold text-2xl selection:bg-lime-800 selection:text-lime-400">Welcome admin</h1> <p class="text-wrap text-neutral-500 selection:bg-lime-800 selection:text-lime-400">Login and interactue with your community right now</p> </div> ${renderComponent($$result, "SignInForm", $$SignInForm, { "action": "/api/auth/login" })} </div>`;
}, "C:/dev/myc/src/components/SignIn.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AuthLayout", $$AuthLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SignIn", $$SignIn, {})} ` })}`;
}, "C:/dev/myc/src/pages/index.astro", void 0);

const $$file = "C:/dev/myc/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
