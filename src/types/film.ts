export interface IFilm {
  id: number;
  title: string;
  tagline: string;
  vote_average: number[];
  vote_count: number;
  director: string;
  actors: string[];
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  genres: string[];
  runtime: number;
}

export class Film implements IFilm {
  id: number;
  title: string;
  tagline: string;
  vote_average: number[];
  vote_count: number;
  director: string;
  actors: string[];
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  genres: string[];
  runtime: number;

  constructor({
    id, title, tagline, posterurl, imdbRating, genres, duration, storyline, ratings, releaseDate, director, actors,
  }: any) {
    this.id = id;
    this.title = title || '';
    this.tagline = tagline || '';
    this.vote_average = ratings;
    this.vote_count = imdbRating;
    this.director = director || '';
    this.actors = actors;
    this.poster_path = posterurl;
    this.release_date = releaseDate;
    this.overview = storyline;
    this.budget = id;
    this.revenue = id;
    this.genres = genres;
    this.runtime = +duration.slice(2, -1);
  }
}
