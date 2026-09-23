import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { gamesData } from '../data/games';
import { guidesData } from '../data/guides';

export async function GET(context: APIContext) {
  const gameItems = gamesData.map((game) => ({
    title: `Códigos ${game.title} (2026) - Códigos Activos`,
    pubDate: new Date(game.lastUpdated || '2026-09-23'),
    description: game.metaDescription.es,
    link: `/es/juego/${game.slug}/`,
    categories: [game.categoryLabel.es, 'Roblox', 'Códigos']
  }));

  const guideItems = guidesData.map((guide) => ({
    title: guide.title.es,
    pubDate: new Date(guide.updatedDate || guide.publishedDate),
    description: guide.excerpt.es,
    link: `/es/guias/${guide.slug}/`,
    categories: [guide.categoryLabel.es, 'Roblox', 'Guías']
  }));

  const items = [...gameItems, ...guideItems].sort(
    (a, b) => b.pubDate.getTime() - a.pubDate.getTime()
  );

  return rss({
    title: 'Códigos Roblox 2026 - Códigos Activos y Guías',
    description: 'Últimos códigos activos verificados, recompensas gratis y guías de optimización para Roblox.',
    site: context.site || 'https://codigosroblox.org',
    items,
    customData: `<language>es-ES</language>`,
  });
}
