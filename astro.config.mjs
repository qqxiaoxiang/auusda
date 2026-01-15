// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Set the site URL for sitemap generation
  site: 'https://auusda.com',
  // Add sitemap integration
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});