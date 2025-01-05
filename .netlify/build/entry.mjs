import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_BWTTF-z5.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/auth/create_user.astro.mjs');
const _page2 = () => import('./pages/api/auth/get_users.astro.mjs');
const _page3 = () => import('./pages/api/auth/login.astro.mjs');
const _page4 = () => import('./pages/api/auth/logout.astro.mjs');
const _page5 = () => import('./pages/dashboard/admins.astro.mjs');
const _page6 = () => import('./pages/dashboard/posts.astro.mjs');
const _page7 = () => import('./pages/dashboard/tickets.astro.mjs');
const _page8 = () => import('./pages/dashboard.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/auth/create_user.ts", _page1],
    ["src/pages/api/auth/get_users.ts", _page2],
    ["src/pages/api/auth/login.ts", _page3],
    ["src/pages/api/auth/logout.ts", _page4],
    ["src/pages/dashboard/admins.astro", _page5],
    ["src/pages/dashboard/posts.astro", _page6],
    ["src/pages/dashboard/tickets.astro", _page7],
    ["src/pages/dashboard/index.astro", _page8],
    ["src/pages/index.astro", _page9]
]);
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: undefined
});
const _args = {
    "middlewareSecret": "dd58cb53-999b-4498-ac99-b4666134a7b2"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
