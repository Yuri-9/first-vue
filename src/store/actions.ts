import { ActionTree } from 'vuex';
import { IState } from './state';

const actions: ActionTree<IState, IState> | undefined = {
  setSelectedFilmId({ commit }, filmId) {
    commit('SET_SELECTED_FILM_ID', filmId);
  },
  setSearchValue({ commit }, searchValue) {
    commit('SET_SEARCH_VALUE', searchValue);
  },
  setSearchBy({ commit }, searchBy) {
    commit('SET_SEARCH_BY', searchBy);
  },
  setSortBy({ commit }, sortBy) {
    commit('SET_SORT_BY', sortBy);
  },
  async setFilms({ commit }, films) {
    commit('SET_FILMS', films);

    // moved getFilms to component

    // try {
    //   const films = await FilmsService.getFilms();
    //   commit('SET_FILMS', films);
    // } catch (e) {
    //   commit('SET_ERROR', e);
    // }
  },
};

export default actions;
