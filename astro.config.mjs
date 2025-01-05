// @ts-check
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';

import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
  mode: 'standalone'
}),
server: {
  port: import.meta.env.PORT || 3000
},

  integrations: [tailwind(), icon()]
});