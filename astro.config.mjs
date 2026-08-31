import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build
export default defineConfig({
  site: 'https://adamlangshaw.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      changefreq: 'monthly',
      serialize(item) {
        // Plain YYYY-MM-DD lastmod (no time/milliseconds).
        item.lastmod = new Date().toISOString().slice(0, 10);
        return item;
      },
    }),
  ],
  redirects: {
    '/about': '/',
    '/influences': '/',
    '/projects': '/',
  },
});
