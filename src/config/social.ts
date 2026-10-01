export interface SocialConfig {
  youtube: {
    name: string;
    url: string;
    handle: string;
  };
  tiktok: {
    name: string;
    url: string;
    handle: string;
  };
}

export const socialConfig: SocialConfig = {
  youtube: {
    name: 'YouTube',
    url: 'https://www.youtube.com/@codigosroblox',
    handle: '@codigosroblox',
  },
  tiktok: {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@codigosroblox.org',
    handle: '@codigosroblox.org',
  },
};
