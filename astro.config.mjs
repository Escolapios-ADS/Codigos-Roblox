// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';
import { getSeoUrls } from './src/utils/seo.ts';

// https://astro.build/config
export default defineConfig({
  site: 'https://codigosroblox.org',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false
    }
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: true,
      minify: 'esbuild',
      assetsInlineLimit: 4096
    }
  },

  integrations: [
    sitemap({
      filter: (page) => page !== 'https://codigosroblox.org/' && !page.includes('404'),
      serialize(item) {
        const url = new URL(item.url);
        const pathname = url.pathname;
        const isEs = pathname.startsWith('/es/');
        const locale = isEs ? 'es' : 'en';

        // Add precise hreflang alternates to sitemap
        const { esUrl, enUrl } = getSeoUrls(pathname, locale);
        item.links = [
          { lang: 'es', url: esUrl },
          { lang: 'en', url: enUrl },
          { lang: 'x-default', url: esUrl }
        ];

        // Calibrate priority, changefreq, and lastmod
        if (pathname === '/es/' || pathname === '/en/') {
          item.priority = 1.0;
          item.changefreq = 'daily';
          item.lastmod = new Date();
        } else if (pathname.includes('/juego/')) {
          item.priority = 0.9;
          item.changefreq = 'daily';
          item.lastmod = new Date();
        } else if (pathname.includes('/guias/')) {
          item.priority = 0.85;
          item.changefreq = 'weekly';
          item.lastmod = new Date();
        } else if (
          pathname.includes('/aviso-legal/') ||
          pathname.includes('/legal-notice/') ||
          pathname.includes('/privacidad/') ||
          pathname.includes('/privacy/') ||
          pathname.includes('/terminos/') ||
          pathname.includes('/terms/') ||
          pathname.includes('/politica-de-cookies/') ||
          pathname.includes('/cookie-policy/')
        ) {
          item.priority = 0.3;
          item.changefreq = 'monthly';
          item.lastmod = new Date('2026-03-23');
        } else {
          // Interactive VIP tools & hubs
          item.priority = 0.8;
          item.changefreq = 'weekly';
          item.lastmod = new Date();
        }

        return item;
      }
    })
  ]
});