import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://vyqda.com',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/privacy/') && !page.includes('/terms/'),
    }),
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
