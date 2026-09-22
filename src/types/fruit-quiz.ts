export type FruitId = 'kitsune' | 'buddha' | 'dough' | 'dragon' | 'portal' | 'magma' | 'leopard';

export interface QuizOption {
  text: {
    es: string;
    en: string;
  };
  emoji: string;
  scores: Partial<Record<FruitId, number>>;
}

export interface QuizQuestion {
  id: number;
  question: {
    es: string;
    en: string;
  };
  options: QuizOption[];
}

export interface FruitResult {
  id: FruitId;
  name: string;
  emoji: string;
  rarity: 'Mythical' | 'Legendary' | 'Rare';
  archetype: {
    es: string;
    en: string;
  };
  tagline: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  strengths: {
    es: string[];
    en: string[];
  };
  recommendedStats: {
    melee: number;
    defense: number;
    sword: number;
    gun: number;
    fruit: number;
  };
  beliPrice: string;
  tradeValue: string;
}
