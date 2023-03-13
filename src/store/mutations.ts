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
};

export default mutations;
