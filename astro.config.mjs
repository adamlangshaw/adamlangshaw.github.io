import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build
export default defineConfig({
  site: 'https://adamlangshaw.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
  redirects: {
    '/about': '/',
    '/influences': '/',
    '/projects': '/',
  },
});
