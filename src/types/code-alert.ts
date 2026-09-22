export interface GameAlertInfo {
  slug: string;
  title: string;
  emoji: string;
  frequency: {
    es: string;
    en: string;
  };
  typicalDropDay: {
    es: string;
    en: string;
  };
  activeCodesCount: number;
}
