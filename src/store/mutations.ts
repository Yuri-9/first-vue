import { IError } from '@/types/error';
import { IFilm } from '@/types/film';
import { SearchByIDs, SortByIDs } from '@/types/filters';
import { IState } from './state';

const mutations = {
  GET_FILM_BY_ID(state: IState, selectedFilm: IFilm) {
    state.selectedFilm = selectedFilm;
  },
  SET_SEARCH_BY(state: IState, searchBy: SearchByIDs) {
    state.searchBy = searchBy;
  },
  SET_SEARCH_VALUE(state: IState, searchValue: SearchByIDs) {
    state.searchValue = searchValue;
  },
  SET_SORT_BY(state: IState, sortBy: SortByIDs) {
    state.sortBy = sortBy;
  },
  SET_PAGE(state: IState, page: number) {
    state.page = page;
  },
  SET_FILMS(state: IState, films: IFilm[]) {
    state.films = films;
  },
  SET_ERROR(state: IState, error: IError) {
    state.error = error;
  },
};

export default mutations;
