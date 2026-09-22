export type OutfitCategory = 'military' | 'aesthetic' | 'streetwear' | 'anime' | 'goth' | 'preppy';
export type OutfitGender = 'male' | 'female' | 'unisex';

export interface OutfitItem {
  id: string;
  name: {
    es: string;
    en: string;
  };
  category: OutfitCategory;
  gender: OutfitGender;
  description: {
    es: string;
    en: string;
  };
  shirtId?: string;
  pantsId?: string;
  hairId?: string;
  accessoryId?: string;
  tags: string[];
}
