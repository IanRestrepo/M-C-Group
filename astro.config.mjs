// @ts-check
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';

import netlify from '@astrojs/netlify/functions';

import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify({
    edgeMiddleware: true
  }),
  integrations: [tailwind(), icon()]
});