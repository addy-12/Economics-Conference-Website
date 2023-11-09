import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://icaef-2024.github.io',
  base: '/Economics-Conference-Website',
  integrations: [mdx(), sitemap(), tailwind(), react()]
});