import { f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, j as renderComponent, l as renderSlot, i as createAstro } from './astro/server_liWVwnXO.mjs';
import 'kleur/colors';
import { $ as $$Icon } from './LogoTrucking_Bp3OB3wq.mjs';

const $$Astro = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { size = "small", icon = "home" } = Astro2.props;
  const sizeClasses = {
    "large": "w-[45rem] h-20 py-2 px-2",
    "medium": "w-96 h-20 py-2 px-2",
    "small": "w-80 h-20 py-2 px-2"
  };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(sizeClasses[size] + " bg-neutral-950 border border-neutral-800 rounded-lg flex", "class")}> <span class="border border-neutral-800 text-neutral-400 w-16 mr-2 rounded-md flex justify-center items-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": icon })} </span> <section> ${renderSlot($$result, $$slots["default"])} </section> </div>`;
}, "C:/dev/myc/src/components/dashboard/Card.astro", void 0);

export { $$Card as $ };
