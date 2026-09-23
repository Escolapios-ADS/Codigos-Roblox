export interface CurrencyRate {
  code: string;
  name: {
    es: string;
    en: string;
  };
  symbol: string;
  symbolPosition: 'before' | 'after';
  rateToUSD: number; // 1 USD = X Currency
}

export const CURRENCY_RATES: CurrencyRate[] = [
  {
    code: 'EUR',
    name: { es: 'Euro (€)', en: 'Euro (€)' },
    symbol: '€',
    symbolPosition: 'after',
    rateToUSD: 0.92,
  },
  {
    code: 'USD',
    name: { es: 'Dólar Estadounidense ($)', en: 'US Dollar ($)' },
    symbol: '$',
    symbolPosition: 'before',
    rateToUSD: 1.0,
  },
  {
    code: 'MXN',
    name: { es: 'Peso Mexicano (MXN $)', en: 'Mexican Peso (MXN $)' },
    symbol: '$',
    symbolPosition: 'before',
    rateToUSD: 19.5,
  },
  {
    code: 'ARS',
    name: { es: 'Peso Argentino (ARS $)', en: 'Argentine Peso (ARS $)' },
    symbol: '$',
    symbolPosition: 'before',
    rateToUSD: 1350.0,
  },
  {
    code: 'COP',
    name: { es: 'Peso Colombiano (COP $)', en: 'Colombian Peso (COP $)' },
    symbol: '$',
    symbolPosition: 'before',
    rateToUSD: 4100.0,
  },
  {
    code: 'BRL',
    name: { es: 'Real Brasileño (R$)', en: 'Brazilian Real (R$)' },
    symbol: 'R$',
    symbolPosition: 'before',
    rateToUSD: 5.5,
  },
  {
    code: 'GBP',
    name: { es: 'Libra Esterlina (£)', en: 'British Pound (£)' },
    symbol: '£',
    symbolPosition: 'before',
    rateToUSD: 0.78,
  },
];

export interface RobuxPack {
  robux: number;
  robuxPremium: number;
  priceUSD: number;
  priceEUR: number;
  badge?: {
    es: string;
    en: string;
  };
}

export const OFFICIAL_ROBUX_PACKS: RobuxPack[] = [
  {
    robux: 400,
    robuxPremium: 450,
    priceUSD: 4.99,
    priceEUR: 5.99,
  },
  {
    robux: 800,
    robuxPremium: 1000,
    priceUSD: 9.99,
    priceEUR: 11.99,
    badge: { es: '⭐ Más Popular', en: '⭐ Most Popular' },
  },
  {
    robux: 1700,
    robuxPremium: 2200,
    priceUSD: 19.99,
    priceEUR: 23.99,
  },
  {
    robux: 4500,
    robuxPremium: 5000,
    priceUSD: 49.99,
    priceEUR: 59.99,
    badge: { es: '🔥 Mejor Ahorro', en: '🔥 Best Value' },
  },
  {
    robux: 10000,
    robuxPremium: 11000,
    priceUSD: 99.99,
    priceEUR: 119.99,
  },
  {
    robux: 22500,
    robuxPremium: 25000,
    priceUSD: 199.99,
    priceEUR: 239.99,
    badge: { es: '💎 Pack Ballena', en: '💎 Mega Pack' },
  },
];

export const DEVEX_RATE_PER_ROBUX_USD = 0.0035; // $105 USD per 30,000 Robux
export const DEVEX_MINIMUM_ROBUX = 30000;
export const ROBLOX_MARKETPLACE_TAX_PERCENT = 30; // 30% cut
