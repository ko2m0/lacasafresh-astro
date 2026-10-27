import type { APIRoute } from 'astro';
import { products } from '../data/products';

const site = 'https://lacasafresh.com';

// 1. Define your static pages
const pages = [
  { route: 'en/', priority: '1.0' },
  { route: 'en/products/', priority: '0.9' },
  { route: 'en/importers/', priority: '0.8' },
  { route: 'en/growers/', priority: '0.8' },
  { route: 'en/about/', priority: '0.7' },
  { route: 'en/contact/', priority: '0.7' },
  { route: 'en/team/', priority: '0.7' },
  { route: 'es/', priority: '1.0' },
  { route: 'es/products/', priority: '0.9' },
  { route: 'es/importers/', priority: '0.8' },
  { route: 'es/growers/', priority: '0.8' },
  { route: 'es/about/', priority: '0.7' },
  { route: 'es/contact/', priority: '0.7' },
  { route: 'es/team/', priority: '0.7' },
];

// 2. Dynamically add all published product pages
const productPages = products
  .filter((p) => p.published)
  .flatMap((p) => [
    { route: `en/products/${p.slug}/`, priority: '0.8' },
    { route: `es/products/${p.slug}/`, priority: '0.8' },
  ]);

const allPages = [...pages, ...productPages];

export const GET: APIRoute = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${allPages
    .map((page) => {
      const url = `${site}/${page.route}`;
      
      // Automatically generate the alternate language URL for hreflang
      const enUrl = page.route.startsWith('es/') 
        ? `${site}/en/${page.route.substring(3)}` 
        : url;
        
      const esUrl = page.route.startsWith('en/') 
        ? `${site}/es/${page.route.substring(3)}` 
        : url;

      return `
  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page.priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />
    <xhtml:link rel="alternate" hreflang="es" href="${esUrl}" />
  </url>`;
    })
    .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};