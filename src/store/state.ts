import { IFilm } from '@/types/film';
import { SearchByIDs, SortByIDs } from '@/types/filters';

import { IError } from '@/types/error';

export interface IState {
  selectedFilm: IFilm | null;
  searchValue: string;
  searchBy: SearchByIDs;
  sortBy: SortByIDs;
  page: number;
  films: IFilm[];
  error: IError | null;
}

const initialState: IState = {
  selectedFilm: null,
  searchValue: '',
  searchBy: SearchByIDs.TITLE,
  sortBy: SortByIDs.RELEASE_DATE,
  page: 1,
  films: [],
  error: null,
};

export const state = (): IState => initialState;
