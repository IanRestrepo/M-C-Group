
			import { onRequest } from "C:/dev/myc/.netlify/build/_astro-internal_middleware.mjs";
			import { createContext, trySerializeLocals } from 'astro/middleware';

			export default async (request, context) => {
				const ctx = createContext({
					request,
					params: {},
					locals: { netlify: { context } }
				});
				// https://docs.netlify.com/edge-functions/api/#return-a-rewrite
				ctx.rewrite = (target) => {
					if(target instanceof Request) {
						// We can only mutate headers, so if anything else is different, we need to fetch
						// the target URL instead.
						if(target.method !== request.method || target.body || target.url.origin !== request.url.origin) {
							return fetch(target);
						}
						// We can't replace the headers object, so we need to delete all headers and set them again
						request.headers.forEach((_value, key) => {
							request.headers.delete(key);
						});
						target.headers.forEach((value, key) => {
							request.headers.set(key, value);
						});
						return new URL(target.url);
					}
					return new URL(target, request.url);
				};
				const next = () => {
					const { netlify, ...otherLocals } = ctx.locals;
					request.headers.set("x-astro-locals", trySerializeLocals(otherLocals));
					request.headers.set("x-astro-middleware-secret", "dd58cb53-999b-4498-ac99-b4666134a7b2");
					return context.next();
				};

				return onRequest(ctx, next);
			}

			export const config = {
				name: "Astro Middleware",
				generator: "@astrojs/netlify@6.0.1",
				path: "/*", excludedPath: ["/_astro/*", "/.netlify/images/*"]
			};
			