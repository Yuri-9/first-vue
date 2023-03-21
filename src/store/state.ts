import { IFilm } from '@/types/film';
import { SearchByIDs, SortByIDs } from '@/types/filters';

import { IError } from '@/types/error';

export interface IState {
  selectedFilmId: null | number;
  searchValue: string;
  searchBy: SearchByIDs;
  sortBy: SortByIDs;
  films: IFilm[];
  error: IError | null;
}

const initialState: IState = {
  selectedFilmId: null,
  searchValue: '',
  searchBy: SearchByIDs.TITLE,
  sortBy: SortByIDs.RELEASE_DATE,
  films: [],
  error: null,
};

export const state = (): IState => initialState;
