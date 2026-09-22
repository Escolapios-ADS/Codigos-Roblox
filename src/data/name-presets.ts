export type NameStyle = 'pro' | 'aesthetic' | 'anime' | 'dark' | 'clans';

export interface StyleOption {
  id: NameStyle;
  label: {
    es: string;
    en: string;
  };
  emoji: string;
  description: {
    es: string;
    en: string;
  };
}

export const styleOptions: StyleOption[] = [
  {
    id: 'pro',
    label: { es: 'Pro & Competitivo', en: 'Pro & Competitive' },
    emoji: '🔥',
    description: {
      es: 'Nombres intimidantes para PvP, shooters y duelos competitivos.',
      en: 'High-octane intimidating handles for competitive PvP and shooter games.',
    },
  },
  {
    id: 'aesthetic',
    label: { es: 'Aesthetic & Cute', en: 'Aesthetic & Cute' },
    emoji: '✨',
    description: {
      es: 'Nombres suaves en minúsculas, con estilo pastel y vibras de moda.',
      en: 'Soft lowercase aesthetic tags with gentle vibes and runway charm.',
    },
  },
  {
    id: 'anime',
    label: { es: 'Anime & Shonen', en: 'Anime & Shonen' },
    emoji: '🎌',
    description: {
      es: 'Inspirados en Blox Fruits, ninjas, técnicas místicas y protagonistas de anime.',
      en: 'Inspired by Blox Fruits, shinobi lore, mythical powers, and shonen icons.',
    },
  },
  {
    id: 'dark',
    label: { es: 'Gótico & Dark', en: 'Dark & Mystic' },
    emoji: '💀',
    description: {
      es: 'Estilo sombrío, vampírico, nocturno y enigmático.',
      en: 'Shadowy, nocturnal, vampiric, and enigmatic naming patterns.',
    },
  },
  {
    id: 'clans',
    label: { es: 'Clanes & Gremios', en: 'Clans & Guilds' },
    emoji: '⚡',
    description: {
      es: 'Nombres con etiquetas de clan [TAG] listos para liderar tripulaciones.',
      en: 'Pre-formatted guild and crew tags [TAG] ready to command the server.',
    },
  },
];

export const nameWordBanks = {
  pro: {
    prefixes: ['Vortex', 'Apex', 'Nova', 'Zenith', 'Phantom', 'Cipher', 'Krypton', 'Hyper', 'Titan', 'Ghost', 'Strike', 'Nexus', 'Blaze', 'Pulse', 'Zero'],
    suffixes: ['God', 'Sniper', 'Reaper', 'Shadow', 'Clutch', 'Elite', 'Vibe', 'X', 'Pulse', 'Lord', 'King', 'Prime', 'Fang', 'Storm', 'Blade'],
    connectors: ['_', '', 'x', '.', ''],
  },
  aesthetic: {
    prefixes: ['honey', 'cloudy', 'luna', 'peach', 'velvet', 'milky', 'angelic', 'blossom', 'cozy', 'sunflower', 'pastel', 'cherry', 'starry', 'bubble', 'hazel'],
    suffixes: ['vibes', 'clouds', 'drops', 'latte', 'stars', 'dreams', 'glow', 'bloom', 'fairy', 'skies', 'breeze', 'tea', 'drizzle', 'haven', 'petal'],
    connectors: ['.', '_', '', 'x'],
  },
  anime: {
    prefixes: ['Roronoa', 'Kitsune', 'Gojo', 'Shadow', 'Akatsuki', 'Bankai', 'Sukuna', 'Shinobi', 'Kenpachi', 'Levi', 'Zoro', 'Itachi', 'Mugiwara', 'Chidori', 'Domain'],
    suffixes: ['Void', 'Soul', 'Slayer', 'Vanguard', 'Breath', 'Spirit', 'Hunter', 'Blade', 'Flames', 'Dragon', 'Demon', 'Titan', 'Strike', 'Wrath', 'Eye'],
    connectors: ['_', '', 'x', ''],
  },
  dark: {
    prefixes: ['Midnight', 'Nocturnal', 'Abyss', 'Eclipse', 'Grim', 'Obscure', 'Vesper', 'Hollow', 'Cryptic', 'Dread', 'Nether', 'Revenant', 'Onyx', 'Venom'],
    suffixes: ['Reign', 'Grave', 'Walker', 'Fang', 'Echo', 'Wraith', 'Corpse', 'Soul', 'Dusk', 'Mist', 'Gloom', 'Veil', 'Bane', 'Crown'],
    connectors: ['_', '', 'x', ''],
  },
  clans: {
    tags: ['[VORTEX]', '[ROYAL]', '[TITAN]', '[ELITE]', '[MYTHIC]', '[SHADOW]', '[NOVA]', '[APEX]', '[CHAOS]', '[FROST]', '[BLAZE]', '[REAPER]'],
    cores: ['Legend', 'Phantom', 'Striker', 'Hunter', 'Sovereign', 'Warrior', 'Immortal', 'Duelist', 'Warlord', 'Overlord', 'Sentinel'],
  },
};
