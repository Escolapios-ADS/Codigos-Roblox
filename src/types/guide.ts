import type { SupportedLocale } from '../i18n/translations';

export interface GuideSection {
  heading: {
    es: string;
    en: string;
  };
  content: {
    es: string[];
    en: string[];
  };
  table?: {
    headers: { es: string[]; en: string[] };
    rows: { es: string[][]; en: string[][] };
  };
  callout?: {
    type: 'tip' | 'warning' | 'info';
    text: { es: string; en: string };
  };
}

export interface GuideItem {
  id: string;
  slug: string;
  title: {
    es: string;
    en: string;
  };
  metaTitle?: {
    es: string;
    en: string;
  };
  excerpt: {
    es: string;
    en: string;
  };
  readTime: string;
  category: 'tier-list' | 'safety' | 'mechanics' | 'tips';
  categoryLabel: {
    es: string;
    en: string;
  };
  author: {
    name: string;
    role: { es: string; en: string };
    avatar: string;
  };
  publishedDate: string;
  updatedDate: string;
  emoji: string;
  badge?: {
    es: string;
    en: string;
  };
  sections: GuideSection[];
}
