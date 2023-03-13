import { IFilm } from '@/types/film';
import { SearchByIDs, SortByIDs } from '@/types/filters';
import films from '@/store/movies.json';

export interface IState {
  selectedFilmId: null | number;
  searchBy: SearchByIDs;
  sortBy: SortByIDs;
  films: IFilm[];
}

const initialState: IState = {
  selectedFilmId: null,
  searchBy: SearchByIDs.TITLE,
  sortBy: SortByIDs.RELEASE_DATE,
  films,
};

export const state = (): IState => initialState;
