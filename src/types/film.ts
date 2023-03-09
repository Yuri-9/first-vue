export interface IFilm {
  id: number;
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  director: string;
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  genres: string[];
  runtime: number;
}
