import { IError } from '@/types/error';
import { IFilm } from '@/types/film';
import { SearchByIDs, SortByIDs } from '@/types/filters';
import { IState } from './state';

const mutations = {
  SET_SELECTED_FILM_ID(state: IState, filmId: number | null) {
    state.selectedFilmId = filmId;
  },
  SET_SEARCH_BY(state: IState, searchBy: SearchByIDs) {
    state.searchBy = searchBy;
  },
  SET_SORT_BY(state: IState, sortBy: SortByIDs) {
    state.sortBy = sortBy;
  },
  SET_FILMS(state: IState, films: IFilm[]) {
    state.films = films;
  },
  SET_ERROR(state: IState, error: IError) {
    state.error = error;
  },
};

export default mutations;
