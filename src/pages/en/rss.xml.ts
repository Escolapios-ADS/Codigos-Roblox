import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { gamesData } from '../../data/games';
import { guidesData } from '../../data/guides';

export async function GET(context: APIContext) {
  const gameItems = gamesData.map((game) => ({
    title: `${game.title} Codes (2026) - Active Codes`,
    pubDate: new Date(game.lastUpdated || '2026-09-23'),
    description: game.metaDescription.en,
    link: `/en/juego/${game.slug}/`,
    categories: [game.categoryLabel.en, 'Roblox', 'Codes']
  }));

  const guideItems = guidesData.map((guide) => ({
    title: guide.title.en,
    pubDate: new Date(guide.updatedDate || guide.publishedDate),
    description: guide.excerpt.en,
    link: `/en/guias/${guide.slug}/`,
    categories: [guide.categoryLabel.en, 'Roblox', 'Guides']
  }));

  const items = [...gameItems, ...guideItems].sort(
    (a, b) => b.pubDate.getTime() - a.pubDate.getTime()
  );

  return rss({
    title: 'Roblox Codes 2026 (English) - Active Codes & Guides',
    description: 'Updated list of working Roblox codes, free items, and tier lists in English.',
    site: context.site || 'https://codigosroblox.org',
    items,
    customData: `<language>en-US</language>`,
  });
}
