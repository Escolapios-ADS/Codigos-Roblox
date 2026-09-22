export type SongGenre = 'all' | 'trending' | 'phonk' | 'pop' | 'anime' | 'meme' | 'gaming' | 'trap';

export interface SongItem {
  id: string;
  code: string;
  title: string;
  artist: string;
  genre: SongGenre;
  genreLabel: {
    es: string;
    en: string;
  };
  duration?: string;
  plays: string;
  verifiedGames: string[];
  isTrending?: boolean;
  verifiedDate: string;
}
