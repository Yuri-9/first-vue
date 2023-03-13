import { ActionTree } from 'vuex';
import { IState } from './state';

const actions: ActionTree<IState, IState> | undefined = {
  setSelectedFilmId({ commit }, filmId) {
    commit('SET_SELECTED_FILM_ID', filmId);
  },
  setSearchBy({ commit }, searchBy) {
    commit('SET_SEARCH_BY', searchBy);
  },
  setSortBy({ commit }, sortBy) {
    commit('SET_SORT_BY', sortBy);
  },
};

export default actions;
