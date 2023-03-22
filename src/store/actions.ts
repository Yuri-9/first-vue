import { ActionTree } from 'vuex';
import FilmsService from '@/api/films';
import { IState } from './state';

const actions: ActionTree<IState, IState> | undefined = {
  setSearchValue({ commit }, searchValue) {
    commit('SET_SEARCH_VALUE', searchValue);
  },
  setSearchBy({ commit }, searchBy) {
    commit('SET_SEARCH_BY', searchBy);
  },
  setSortBy({ commit }, sortBy) {
    commit('SET_SORT_BY', sortBy);
  },
  setPage({ commit }, page) {
    commit('SET_PAGE', page);
  },
  async setFilms({ commit }, films) {
    commit('SET_FILMS', films);
  },
  async getFilmById({ commit }, filmId) {
    try {
      const film = await FilmsService.getFilmById(filmId);
      commit('GET_FILM_BY_ID', film);
    } catch (e) {
      commit('SET_ERROR', e);
    }
  },
};

export default actions;
