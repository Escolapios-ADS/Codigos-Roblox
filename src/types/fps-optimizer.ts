export type DeviceType = 'low-pc' | 'gaming-pc' | 'mobile' | 'console';
export type FpsIssue = 'under-30' | '30-60' | 'cap-60' | 'high-ping';

export interface OptimizationProfile {
  title: {
    es: string;
    en: string;
  };
  fpsGain: string;
  pingGain: string;
  recommendedSlider: number;
  steps: {
    es: string[];
    en: string[];
  };
  fastFlagsSnippet?: string;
  summary: {
    es: string;
    en: string;
  };
}
