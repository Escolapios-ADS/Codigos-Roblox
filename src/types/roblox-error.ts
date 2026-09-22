export type ErrorCategory = 'connection' | 'server' | 'kick' | 'auth' | 'system';
export type ErrorSeverity = 'low' | 'medium' | 'high' | 'critical';
export type ErrorFrequency = 'very_common' | 'common' | 'rare';

export interface RobloxErrorItem {
  code: number;
  category: ErrorCategory;
  severity: ErrorSeverity;
  frequency: ErrorFrequency;
  title: {
    es: string;
    en: string;
  };
  officialMessage: {
    es: string;
    en: string;
  };
  cause: {
    es: string;
    en: string;
  };
  quickSolution: {
    es: string;
    en: string;
  };
  steps: {
    es: string[];
    en: string[];
  };
  platforms: string[];
}
