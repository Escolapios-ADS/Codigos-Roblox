import type { GameAlertInfo } from '../types/code-alert';
import { gamesData } from './games';

export const gamesAlertData: GameAlertInfo[] = gamesData.map((g) => {
  let frequency = { es: 'Semanal', en: 'Weekly' };
  let typicalDropDay = { es: 'Fines de semana', en: 'Weekends' };

  if (g.slug === 'blox-fruits') {
    frequency = { es: 'Actualizaciones Mayores', en: 'Major Updates' };
    typicalDropDay = { es: 'Viernes / Sábados', en: 'Fridays / Saturdays' };
  } else if (g.slug === 'blade-ball') {
    frequency = { es: 'Diario / Eventos', en: 'Daily / Events' };
    typicalDropDay = { es: 'Cualquier día con hito de likes', en: 'Any day on like milestones' };
  } else if (g.slug === 'dress-to-impress') {
    frequency = { es: 'Temporadas y Pases', en: 'Seasons & Battlepass' };
    typicalDropDay = { es: 'Sábados', en: 'Saturdays' };
  } else if (g.slug === 'fisch') {
    frequency = { es: 'Actualizaciones de Pesca', en: 'Fishing Updates' };
    typicalDropDay = { es: 'Viernes', en: 'Fridays' };
  }

  return {
    slug: g.slug,
    title: g.title,
    emoji: g.emoji,
    frequency,
    typicalDropDay,
    activeCodesCount: g.activeCodes.length,
  };
});
