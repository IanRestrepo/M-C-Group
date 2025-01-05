import { f as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, h as addAttribute, j as renderComponent, i as createAstro, u as unescapeHTML, o as Fragment } from './astro/server_liWVwnXO.mjs';
import { getIconData, iconToSVG } from '@iconify/utils';

const PROJECT_SETTINGS = {
  "PROJECT_NAME": "M&C Group"
};

const icons = {"local":{"prefix":"local","lastModified":1736112177,"icons":{"admin":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M5 20v-1a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v1m-7-8a4 4 0 1 0 0-8 4 4 0 0 0 0 8\" color=\"currentColor\"/>"},"admins":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"1.5\" color=\"currentColor\"><path d=\"M1 20v-1a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v1\"/><path d=\"M13 14v0a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v.5\"/><path stroke-linejoin=\"round\" d=\"M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8m10-3a3 3 0 1 0 0-6 3 3 0 0 0 0 6\"/></g>"},"cloud-post":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M12 4c-6 0-6 4-6 6-1.667 0-5 1-5 5s3.333 5 5 5h12c1.667 0 5-1 5-5s-3.333-5-5-5c0-2 0-6-6-6Z\" color=\"currentColor\"/>"},"home":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M17 21H7a4 4 0 0 1-4-4v-6.292a4 4 0 0 1 1.927-3.421l5-3.03a4 4 0 0 1 4.146 0l5 3.03A4 4 0 0 1 21 10.707V17a4 4 0 0 1-4 4m-8-4h6\" color=\"currentColor\"/>"},"logout":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M12 12h7m0 0-3 3m3-3-3-3m3-3V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1\" color=\"currentColor\"/>"},"server":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" color=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m6 18.01.01-.011M6 6.01l.01-.011\"/><path d=\"M2 9.4V2.6a.6.6 0 0 1 .6-.6h18.8a.6.6 0 0 1 .6.6v6.8a.6.6 0 0 1-.6.6H2.6a.6.6 0 0 1-.6-.6Zm0 12v-6.8a.6.6 0 0 1 .6-.6h18.8a.6.6 0 0 1 .6.6v6.8a.6.6 0 0 1-.6.6H2.6a.6.6 0 0 1-.6-.6Z\"/></g>"},"tickets":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" color=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 16v-4m0-3V8\"/><circle cx=\"12\" cy=\"12\" r=\"8\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3.953 4.5A10.96 10.96 0 0 0 1 12c0 2.899 1.121 5.535 2.953 7.5m16.094-15A10.96 10.96 0 0 1 23 12c0 2.899-1.121 5.535-2.953 7.5\"/></g>"},"viewSite":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" color=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M7 21h10\"/><path d=\"M2 16.4V3.6a.6.6 0 0 1 .6-.6h18.8a.6.6 0 0 1 .6.6v12.8a.6.6 0 0 1-.6.6H2.6a.6.6 0 0 1-.6-.6Z\"/></g>"},"warning":{"body":"<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M9.616 3.642c1.058-1.839 3.71-1.839 4.768 0l8.043 13.988c1.054 1.833-.27 4.12-2.384 4.12H3.957c-2.115 0-3.438-2.287-2.384-4.12zM12 8.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75m.568 9.25a.75.75 0 0 0-1.115-1.003l-.01.011a.75.75 0 0 0 1.114 1.004z\" clip-rule=\"evenodd\" color=\"currentColor\"/>"}},"width":24,"height":24}};

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
      this.hint = "";
    }
  }
  const req = Astro2.request;
  const { name = "", title, desc, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  const { viewBox } = normalizedProps;
  if (includeSymbol) {
    delete normalizedProps.viewBox;
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${desc && renderTemplate`<desc>${desc}</desc>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}${addAttribute(viewBox, "viewBox")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "href")}></use> ` })}`} </svg>`;
}, "C:/dev/myc/node_modules/astro-icon/components/Icon.astro", void 0);

const astro = new Proxy({"src":"/_astro/LogoTrucking.Cejbpx6w.svg","width":115,"height":48,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/dev/myc/src/assets/LogoTrucking.svg";
							}
							
							return target[name];
						}
					});

export { $$Icon as $, PROJECT_SETTINGS as P, astro as a };
