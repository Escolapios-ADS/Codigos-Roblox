export type GameCategory = 'all' | 'anime' | 'rpg' | 'action' | 'fashion' | 'simulator' | 'promo';

export interface CodeItem {
  code: string;
  reward: {
    es: string;
    en: string;
  };
  isNew?: boolean;
  verifiedDate: string;
}

export interface ExpiredCodeItem {
  code: string;
  reward: {
    es: string;
    en: string;
  };
}

export interface GameItem {
  id: string;
  slug: string;
  title: string;
  tagline: {
    es: string;
    en: string;
  };
  badge?: {
    es: string;
    en: string;
  };
  category: GameCategory;
  categoryLabel: {
    es: string;
    en: string;
  };
  developer: string;
  likes: string;
  visits: string;
  activePlayers: string;
  robloxUrl: string;
  accentColor: string; // e.g. 'emerald', 'cyan', 'purple', 'amber', 'rose'
  iconGradient: string;
  emoji: string;
  lastUpdated: string;
  metaDescription: {
    es: string;
    en: string;
  };
  howToRedeem: {
    es: {
      title: string;
      steps: string[];
      tip: string;
    };
    en: {
      title: string;
      steps: string[];
      tip: string;
    };
  };
  activeCodes: CodeItem[];
  expiredCodes: ExpiredCodeItem[];
  faqs: {
    es: Array<{ q: string; a: string }>;
    en: Array<{ q: string; a: string }>;
  };
}
