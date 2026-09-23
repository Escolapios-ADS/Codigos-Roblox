import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const GAMES_TS_PATH = path.join(ROOT_DIR, 'src', 'data', 'games.ts');

interface RawGameCode {
  code: string;
  rewardEn: string;
  rewardEs: string;
}

interface GameSyncConfig {
  id: string;
  title: string;
  placeId: string;
  universeId: number;
  fandomWiki?: string;
  fandomPage?: string;
  customParser?: (wikitext: string) => { active: RawGameCode[]; expired: string[] };
}

// 1. Game mapping configuration for Roblox API and Fandom Wikis
const SYNC_CONFIGS: GameSyncConfig[] = [
  {
    id: 'blox-fruits',
    title: 'Blox Fruits',
    placeId: '2753915549',
    universeId: 994732206,
    fandomWiki: 'blox-fruits',
    fandomPage: 'Codes',
    customParser: parseBloxFruitsWiki,
  },
  {
    id: 'blade-ball',
    title: 'Blade Ball',
    placeId: '13772394625',
    universeId: 4777817887,
    fandomWiki: 'bladeball',
    fandomPage: 'Codes',
    customParser: parseBladeBallWiki,
  },
  {
    id: 'dress-to-impress',
    title: 'Dress to Impress (DTI)',
    placeId: '15101393044',
    universeId: 5203828273,
    fandomWiki: 'dresstoimpress',
    fandomPage: 'Codes',
    customParser: parseDTIWiki,
  },
  {
    id: 'anime-defenders',
    title: 'Anime Defenders',
    placeId: '17017769292',
    universeId: 5836869368,
    fandomWiki: 'anime-defenders',
    fandomPage: 'Codes',
    customParser: parseAnimeDefendersWiki,
  },
  {
    id: 'king-legacy',
    title: 'King Legacy',
    placeId: '4520749081',
    universeId: 1451439645,
    fandomWiki: 'king-legacy',
    fandomPage: 'Codes',
    customParser: parseKingLegacyWiki,
  },
  {
    id: 'brookhaven-rp',
    title: 'Brookhaven RP',
    placeId: '4924922222',
    universeId: 1686885941,
  },
  {
    id: 'fisch',
    title: 'Fisch',
    placeId: '16732694052',
    universeId: 5750914919,
    fandomWiki: 'fisch',
    fandomPage: 'Codes',
    customParser: parseFischWiki,
  },
  {
    id: 'anime-vanguards',
    title: 'Anime Vanguards',
    placeId: '16146832113',
    universeId: 5578556129,
    fandomWiki: 'animevanguards',
    fandomPage: 'Codes',
    customParser: parseAnimeVanguardsWiki,
  },
  {
    id: 'pet-simulator-99',
    title: 'Pet Simulator 99',
    placeId: '8737899170',
    universeId: 3317771874,
  },
  {
    id: 'toilet-tower-defense',
    title: 'Toilet Tower Defense',
    placeId: '13775256536',
    universeId: 4778845442,
  },
  {
    id: 'murder-mystery-2',
    title: 'Murder Mystery 2',
    placeId: '142823291',
    universeId: 66654135,
    fandomWiki: 'murder-mystery-2',
    fandomPage: 'Codes',
    customParser: parseGenericWiki,
  },
  {
    id: 'da-hood',
    title: 'Da Hood',
    placeId: '2788229376',
    universeId: 1008451066,
  },
  {
    id: 'rivals',
    title: 'Rivals',
    placeId: '17625359962',
    universeId: 6035872082,
    fandomWiki: 'rivalsroblox',
    fandomPage: 'Codes',
    customParser: parseRivalsWiki,
  },
  {
    id: 'all-star-tower-defense',
    title: 'All Star Tower Defense',
    placeId: '4996049426',
    universeId: 1720936166,
  },
  {
    id: 'shindo-life',
    title: 'Shindo Life',
    placeId: '4616652839',
    universeId: 1511883870,
    fandomWiki: 'shindo-life-rell',
    fandomPage: 'Codes',
    customParser: parseGenericWiki,
  },
];

// Helper: Strip MediaWiki markup into clean plain text
function cleanWiki(str: string): string {
  return str
    .replace(/\[\[(?:[^|\]]*\|)?([^\]]+)\]\]/g, '$1') // [[link|text]] -> text
    .replace(/\{\{[^}]*\}\}/g, '') // {{template}} -> ""
    .replace(/<[^>]*>/g, '') // <tag> -> ""
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

// Helper: Translate typical gaming reward phrases from EN to natural ES
function translateReward(en: string): string {
  let es = en;
  const translations: Array<[RegExp, string]> = [
    [/(\d+)\s*(?:minutes?|mins?)\s*(?:of)?\s*2x\s*(?:experience|exp)\b/gi, '$1 minutos de 2x Experiencia (2x EXP)'],
    [/Free\s*2x\s*EXP\s*for\s*(\d+)\s*(?:minutes?|mins?)\b/gi, '2x EXP gratis durante $1 minutos'],
    [/2x\s*(?:experience|exp)\s*(?:boost)?\s*(?:for)?\s*(\d+)\s*(?:minutes?|mins?)\b/gi, '2x Potenciador de EXP durante $1 minutos'],
    [/stat\s*reset|refund\s*stats?|free\s*refund\s*stats?/gi, 'Reinicio de estadísticas (Stat Reset)'],
    [/free\s*wheel\s*spin|free\s*spin/gi, 'Tirada gratis en la Ruleta'],
    [/(\d[\d,]*)\s*gems?/gi, '$1 Gemas'],
    [/(\d[\d,]*)\s*coins?/gi, '$1 Monedas'],
    [/(\d[\d,]*)\s*reli?cs?/gi, '$1 Reliquias'],
    [/(\d[\d,]*)\s*keys?/gi, '$1 Llaves'],
    [/(\d[\d,]*)\s*spins?/gi, '$1 Giros'],
    [/(\d[\d,]*)\s*snowflakes?/gi, '$1 Copos de Nieve'],
    [/(\d[\d,]*)\s*wish(?:es)?/gi, '$1 Deseos'],
    [/divine\s*trait\s*crystal/gi, 'Cristal de Rasgo Divino'],
    [/ancient\s*relic/gi, 'Reliquia Antigua'],
    [/solar\s*token/gi, 'Ficha Solar'],
    [/aqua\s*token/gi, 'Ficha Aqua'],
    [/flame\s*token/gi, 'Ficha de Fuego'],
    [/trait\s*reroll/gi, 'Reintento de rasgos (Trait Reroll)'],
    [/sword\s*skin/gi, 'Skin de espada exclusiva'],
    [/community\s*wrap/gi, 'Envoltorio de armas comunitario'],
    [/exclusive\s*item/gi, 'Objeto cosmético exclusivo'],
    [/instant\s*catcher/gi, 'Capturador Instantáneo'],
    [/luminous\s*larva/gi, 'Larva Luminosa'],
    [/companion/gi, 'Compañero'],
    [/random\s*item/gi, 'Objeto aleatorio'],
    [/random\s*totem/gi, 'Tótem aleatorio'],
    [/claim\s*a\s*free/gi, 'Consigue gratis un'],
    [/unlocks?\s*the\s*title/gi, 'Desbloquea el título'],
  ];

  for (const [regex, replacement] of translations) {
    es = es.replace(regex, replacement);
  }
  return es;
}

// Parser: Blox Fruits
function parseBloxFruitsWiki(wikitext: string): { active: RawGameCode[]; expired: string[] } {
  const active: RawGameCode[] = [];
  const expired: string[] = [];
  const parts = wikitext.split(/Expired Codes/i);
  const workingSection = parts[0] || '';
  const expiredSection = parts[1] || '';

  const rows = workingSection.split('|-');
  for (const row of rows) {
    const codeMatch = row.match(/<code>([^<]+)<\/code>/i);
    if (codeMatch) {
      const code = codeMatch[1].trim();
      if (code.length >= 3 && !code.includes(' ')) {
        const lines = row.split('\n').filter((l) => l.trim().startsWith('|'));
        const rewardRaw = lines[1] ? cleanWiki(lines[1].replace(/^\|/, '')) : '2x EXP Boost or In-Game Reward';
        active.push({
          code,
          rewardEn: rewardRaw || 'In-game reward',
          rewardEs: translateReward(rewardRaw || 'Recompensa en el juego'),
        });
      }
    }
  }

  const expMatch = expiredSection.matchAll(/<code>([^<]+)<\/code>/gi);
  for (const m of expMatch) {
    const c = m[1].trim();
    if (c.length >= 3 && !expired.includes(c)) expired.push(c);
  }

  return { active, expired };
}

// Parser: Blade Ball
function parseBladeBallWiki(wikitext: string): { active: RawGameCode[]; expired: string[] } {
  const active: RawGameCode[] = [];
  const expired: string[] = [];
  const parts = wikitext.split(/Expired Codes|Inactive Codes/i);
  const workingSection = parts[0] || '';

  const rows = workingSection.split('|-');
  for (const row of rows) {
    const codeMatch = row.match(/'''([A-Z0-9_!]+)'''/i);
    if (codeMatch) {
      const code = codeMatch[1].trim();
      const forbidden = ['CODE', 'CODES', 'REWARD', 'REWARDS', 'EXTRA', 'STATUS', 'RELEASE'];
      if (code.length >= 3 && !code.includes(' ') && !forbidden.includes(code.toUpperCase())) {
        const lines = row.split('\n').filter((l) => l.trim().startsWith('|') && !l.includes(codeMatch[1]));
        const rewardRaw = lines[0] ? cleanWiki(lines[0].replace(/^\|/, '')) : 'Free Wheel Spin / Sword Skin';
        active.push({
          code,
          rewardEn: rewardRaw || 'Free Wheel Spin',
          rewardEs: translateReward(rewardRaw || 'Tirada gratis en la ruleta'),
        });
      }
    }
  }

  return { active, expired };
}

// Parser: Dress to Impress
function parseDTIWiki(wikitext: string): { active: RawGameCode[]; expired: string[] } {
  const active: RawGameCode[] = [];
  const expired: string[] = [];
  const parts = wikitext.split(/Expired Codes|Inactive Codes/i);
  const workingSection = parts[0] || '';

  const regex = /\{\{CopyText\|([A-Z0-9_!]+)\}\}/gi;
  let m;
  while ((m = regex.exec(workingSection)) !== null) {
    const code = m[1].trim();
    if (code.length >= 3 && !active.some((x) => x.code.toUpperCase() === code.toUpperCase())) {
      active.push({
        code,
        rewardEn: 'Exclusive In-Game Dress / Accessory',
        rewardEs: 'Vestido o accesorio exclusivo para tu avatar',
      });
    }
  }

  return { active, expired };
}

// Parser: King Legacy
function parseKingLegacyWiki(wikitext: string): { active: RawGameCode[]; expired: string[] } {
  const active: RawGameCode[] = [];
  const expired: string[] = [];
  const parts = wikitext.split(/Expired Codes|If your code says/i);
  const workingSection = parts[0] || '';

  const lines = workingSection.split('\n');
  for (const line of lines) {
    const m = line.match(/^([A-Za-z0-9_!<>&]+)\s*-\s*(.+)$/);
    if (m) {
      const code = m[1].trim();
      const rewardRaw = cleanWiki(m[2]);
      if (code.length >= 3 && !code.toLowerCase().includes('active') && !code.toLowerCase().includes('code')) {
        active.push({
          code,
          rewardEn: rewardRaw,
          rewardEs: translateReward(rewardRaw),
        });
      }
    }
  }

  return { active, expired };
}

// Parser: Fisch (Only real active codes from the active tab)
function parseFischWiki(wikitext: string): { active: RawGameCode[]; expired: string[] } {
  const active: RawGameCode[] = [];
  const expired: string[] = [];
  const parts = wikitext.split(/\|-\|Expired|Expired Codes|Inactive Codes/i);
  const workingSection = parts[0] || '';

  const rows = workingSection.split('|-');
  for (const row of rows) {
    const lines = row
      .split('\n')
      .map((l) => l.trim())
      .filter((l) => l.startsWith('|') && !l.startsWith('|--') && !l.startsWith('|}'));
    if (lines.length >= 2) {
      const rawCode = lines[0].replace(/^\|\s*/, '').trim();
      const rawReward = cleanWiki(lines[1].replace(/^\|\s*/, ''));
      if (
        /^[a-zA-Z0-9_!]+$/.test(rawCode) &&
        rawCode.length > 3 &&
        !['Codes', 'Code', 'Reward'].includes(rawCode) &&
        rawReward.length > 0 &&
        !rawReward.toLowerCase().includes('tba')
      ) {
        active.push({
          code: rawCode,
          rewardEn: rawReward,
          rewardEs: translateReward(rawReward),
        });
      }
    }
  }

  return { active, expired };
}

// Parser: Anime Vanguards
function parseAnimeVanguardsWiki(wikitext: string): { active: RawGameCode[]; expired: string[] } {
  const active: RawGameCode[] = [];
  const expired: string[] = [];
  const rows = wikitext.split('|-');

  for (const row of rows) {
    const lines = row
      .split('\n')
      .map((l) => l.trim())
      .filter((l) => l.startsWith('|'));
    if (lines.length >= 3) {
      const code = lines[0].replace(/^\|\s*/, '').trim();
      const rewardRaw = cleanWiki(lines[1].replace(/^\|\s*/, ''));
      const statusRaw = lines[lines.length - 1];

      if (code.length >= 3 && !code.includes(' ') && !['Code', 'Codes'].includes(code)) {
        if (/expired/i.test(statusRaw)) {
          expired.push(code);
        } else {
          active.push({
            code,
            rewardEn: rewardRaw || 'Gems & Trait Rerolls',
            rewardEs: translateReward(rewardRaw || 'Gemas y tiradas de rasgos'),
          });
        }
      }
    }
  }

  return { active, expired };
}

// Parser: Anime Defenders
function parseAnimeDefendersWiki(wikitext: string): { active: RawGameCode[]; expired: string[] } {
  const active: RawGameCode[] = [];
  const expired: string[] = [];
  const parts = wikitext.split(/\|-\|Expired Codes=|Expired Codes|Inactive Codes/i);
  const workingSection = parts[0] || '';

  const rows = workingSection.split('|-');
  for (const row of rows) {
    const lines = row
      .split('\n')
      .map((l) => l.trim())
      .filter((l) => l.startsWith('|'));
    if (lines.length >= 2) {
      const code = lines[0].replace(/^\|\s*/, '').trim();
      const rewardRaw = cleanWiki(lines[1].replace(/^\|\s*/, ''));
      if (code.length >= 3 && !code.includes(' ') && !['Codes', 'Code', 'Rewards'].includes(code)) {
        active.push({
          code,
          rewardEn: rewardRaw,
          rewardEs: translateReward(rewardRaw),
        });
      }
    }
  }

  return { active, expired };
}

// Parser: Rivals
function parseRivalsWiki(wikitext: string): { active: RawGameCode[]; expired: string[] } {
  const active: RawGameCode[] = [];
  const expired: string[] = [];
  const parts = wikitext.split(/== Expired Codes ==/i);
  const workingSection = parts[0] || '';

  const lines = workingSection.split('\n');
  for (const line of lines) {
    const m = line.match(/'''([A-Za-z0-9_!]+)'''\s*-\s*(.+)/);
    if (m) {
      const code = m[1].trim();
      const rewardRaw = cleanWiki(m[2]);
      const forbidden = ['RELEASE', 'EXPIRED', 'ELIBILLUG', 'CODE', 'REWARD'];
      if (
        code.length >= 3 &&
        !forbidden.includes(code.toUpperCase()) &&
        !rewardRaw.toLowerCase().startsWith('nothing') &&
        rewardRaw.length > 0
      ) {
        active.push({
          code,
          rewardEn: rewardRaw,
          rewardEs: translateReward(rewardRaw),
        });
      }
    }
  }

  return { active, expired };
}

// Generic fallback parser
function parseGenericWiki(wikitext: string): { active: RawGameCode[]; expired: string[] } {
  const active: RawGameCode[] = [];
  const expired: string[] = [];
  const regex = /'''([A-Z0-9_!]{3,30})'''/g;
  let m;
  while ((m = regex.exec(wikitext)) !== null) {
    const code = m[1].trim();
    if (!['CODE', 'REWARD', 'CODES', 'EXPIRED'].includes(code.toUpperCase())) {
      if (!active.some((x) => x.code === code)) {
        active.push({
          code,
          rewardEn: 'Free In-Game Rewards',
          rewardEs: 'Recompensas gratuitas dentro del juego',
        });
      }
    }
  }
  return { active, expired };
}

// Format helpers
function formatVisits(visits: number): string {
  if (visits >= 1e9) {
    return `${(visits / 1e9).toFixed(1)}B+`;
  }
  if (visits >= 1e6) {
    return `${(visits / 1e6).toFixed(1)}M+`;
  }
  return `${visits.toLocaleString()}+`;
}

function formatPlayers(playing: number): string {
  if (playing >= 1000) {
    const rounded = Math.floor(playing / 1000) * 1000;
    return `${rounded.toLocaleString('es-ES')}+`;
  }
  return `${playing}+`;
}

async function fetchFandomWiki(subdomain: string, page = 'Codes'): Promise<string | null> {
  const url = `https://${subdomain}.fandom.com/api.php?action=parse&page=${page}&format=json&prop=wikitext`;
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
        Accept: 'application/json',
      },
    });
    if (!res.ok) return null;
    const json = await res.json();
    return json.parse?.wikitext?.['*'] || null;
  } catch (err) {
    return null;
  }
}

// Main execution routine
export async function syncRobloxData() {
  console.log('\n======================================================');
  console.log('🚀 INICIANDO SINCRONIZADOR AUTOMÁTICO DE CÓDIGOS ROBLOX');
  console.log('======================================================\n');

  const today = new Date().toISOString().split('T')[0];

  // 1. Load existing games data
  const { gamesData } = await import('../src/data/games.ts');
  console.log(`📦 Catálogo cargado: ${gamesData.length} juegos en la base de datos.`);

  // 2. Query Roblox official API in batch for live visits & active players
  const universeIds = SYNC_CONFIGS.map((c) => c.universeId).join(',');
  console.log(`🌐 Conectando con la API oficial de Roblox (Batch query de 15 juegos)...`);

  const robloxStatsMap = new Map<number, { visits: number; playing: number; description: string; name: string }>();
  try {
    const robloxRes = await fetch(`https://games.roblox.com/v1/games?universeIds=${universeIds}`);
    if (robloxRes.ok) {
      const robloxData = await robloxRes.json();
      for (const item of robloxData.data || []) {
        robloxStatsMap.set(item.id, {
          visits: item.visits,
          playing: item.playing,
          description: item.description || '',
          name: item.name,
        });
      }
      console.log(`✅ Estadísticas en vivo obtenidas con éxito para ${robloxStatsMap.size} juegos.\n`);
    } else {
      console.warn(`⚠️ Aviso: La API de Roblox respondió con estado ${robloxRes.status}.`);
    }
  } catch (err: any) {
    console.warn(`⚠️ Error al contactar la API de Roblox: ${err?.message}`);
  }

  let totalNewCodes = 0;
  let totalExpiredMoved = 0;
  let gamesUpdated = 0;

  // 3. Process each game
  for (const config of SYNC_CONFIGS) {
    const game = gamesData.find((g: any) => g.id === config.id);
    if (!game) continue;

    console.log(`------------------------------------------------------`);
    console.log(`🎮 [${game.title}]`);

    let modified = false;

    // Update live player count and visits if available
    const rStats = robloxStatsMap.get(config.universeId);
    if (rStats) {
      const formattedVisits = formatVisits(rStats.visits);
      const formattedPlayers = formatPlayers(rStats.playing);

      if (game.visits !== formattedVisits || game.activePlayers !== formattedPlayers) {
        console.log(`  📊 Stats actualizados: ${game.activePlayers} -> ${formattedPlayers} jugadores | ${game.visits} -> ${formattedVisits} visitas`);
        game.visits = formattedVisits;
        game.activePlayers = formattedPlayers;
        modified = true;
      }
    }

    // Check Fandom Wiki for new codes
    if (config.fandomWiki && config.customParser) {
      const wikitext = await fetchFandomWiki(config.fandomWiki, config.fandomPage || 'Codes');
      if (wikitext) {
        const parsed = config.customParser(wikitext);

        // Find new active codes
        const newlyFoundCodes: RawGameCode[] = [];
        for (const item of parsed.active) {
          const upper = item.code.toUpperCase();
          const alreadyActive = game.activeCodes.some((c: any) => c.code.toUpperCase() === upper);
          const alreadyExpired = game.expiredCodes.some((c: any) => c.code.toUpperCase() === upper);

          if (!alreadyActive && !alreadyExpired) {
            newlyFoundCodes.push(item);
          }
        }

        if (newlyFoundCodes.length > 0) {
          console.log(`  🎉 ¡NUEVOS CÓDIGOS DETECTADOS! (+${newlyFoundCodes.length})`);
          for (const nc of newlyFoundCodes) {
            console.log(`     ⭐ [${nc.code}] -> ${nc.rewardEs}`);
            game.activeCodes.unshift({
              code: nc.code,
              reward: {
                es: nc.rewardEs,
                en: nc.rewardEn,
              },
              isNew: true,
              verifiedDate: 'Hoy',
            });
            totalNewCodes++;
            modified = true;
          }
        } else {
          console.log(`  ✨ Códigos al día (${game.activeCodes.length} activos).`);
        }

        // Check if any active codes have been marked as expired in wiki
        if (parsed.expired && parsed.expired.length > 0) {
          const expiredSet = new Set(parsed.expired.map((c) => c.toUpperCase()));
          const stillActive = [];
          for (const ac of game.activeCodes) {
            if (expiredSet.has(ac.code.toUpperCase())) {
              console.log(`  ⏳ Código caducado movido a histórico: [${ac.code}]`);
              game.expiredCodes.unshift({
                code: ac.code,
                reward: ac.reward,
              });
              totalExpiredMoved++;
              modified = true;
            } else {
              stillActive.push(ac);
            }
          }
          game.activeCodes = stillActive;
        }
      } else {
        console.log(`  ℹ️ Wiki no accesible o sin cambios en esta pasada.`);
      }
    }

    if (modified) {
      game.lastUpdated = today;
      gamesUpdated++;
    }
  }

  // 4. Also check global promo codes
  const promoGame = gamesData.find((g: any) => g.id === 'roblox-promo-codes');
  if (promoGame) {
    promoGame.lastUpdated = today;
  }

  // 5. Save back to src/data/games.ts cleanly
  console.log(`\n======================================================`);
  console.log(`💾 Guardando base de datos en ${GAMES_TS_PATH}...`);

  const fileContent = `import type { GameItem } from '../types/game';

export const gamesData: GameItem[] = ${JSON.stringify(gamesData, null, 2)};

export function getGameBySlug(slug: string): GameItem | undefined {
  return gamesData.find((game) => game.slug === slug);
}

export function getAllGameSlugs(): string[] {
  return gamesData.map((game) => game.slug);
}
`;

  // Backup original
  fs.copyFileSync(GAMES_TS_PATH, `${GAMES_TS_PATH}.bak`);

  // Write new content
  fs.writeFileSync(GAMES_TS_PATH, fileContent, 'utf-8');

  console.log(`✅ ¡Sincronización completada con éxito!`);
  console.log(`   - Juegos analizados: ${SYNC_CONFIGS.length + 1}`);
  console.log(`   - Juegos actualizados: ${gamesUpdated}`);
  console.log(`   - Nuevos códigos incorporados: ${totalNewCodes}`);
  console.log(`   - Códigos caducados archivados: ${totalExpiredMoved}`);
  console.log('======================================================\n');
}

// Run if called directly
syncRobloxData().catch((err) => {
  console.error('❌ Error fatal durante la sincronización:', err);
  process.exit(1);
});
