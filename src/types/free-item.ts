export type FreeItemCategory = 'all' | 'bundles' | 'hair' | 'hats' | 'back' | 'events' | 'emotes';
export type ClaimMethodType = 'catalog' | 'game_event' | 'challenge_code';

export interface FreeItem {
  id: string;
  title: string;
  category: FreeItemCategory;
  categoryLabel: {
    es: string;
    en: string;
  };
  method: ClaimMethodType;
  methodLabel: {
    es: string;
    en: string;
  };
  robloxUrl: string;
  price: string; // '0 Robux'
  instructions: {
    es: string;
    en: string;
  };
  emoji: string;
  badge?: {
    es: string;
    en: string;
  };
  verifiedDate: string;
}
