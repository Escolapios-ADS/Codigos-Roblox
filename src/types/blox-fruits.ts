export type FruitRarity = 'mythical' | 'legendary' | 'rare' | 'uncommon' | 'common';
export type FruitType = 'beast' | 'elemental' | 'natural';
export type ValueTrend = 'rising' | 'stable' | 'dropping';

export interface FruitItem {
  id: string;
  name: string;
  rarity: FruitRarity;
  rarityLabel: {
    es: string;
    en: string;
  };
  type: FruitType;
  typeLabel: {
    es: string;
    en: string;
  };
  beliPrice: number;
  formattedBeli: string;
  robuxPrice: number;
  tradeValue: number;
  formattedTradeValue: string;
  permTradeValue: number;
  formattedPermTradeValue: string;
  demand: number; // 1 to 10
  trend: ValueTrend;
  emoji: string;
  gradient: string;
  description: {
    es: string;
    en: string;
  };
}
