import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import films from '@/store/movies.json';
import { IFilm } from '@/types/film';
import type { SearchByIds, SortByIds } from '@/types/filters';

export interface IState {
  selectedFilmId: null | number;
  searchBy: SearchByIds;
  sortBy: SortByIds;
  films: IFilm[];
}

const initialState: IState = {
  selectedFilmId: null,
  searchBy: 'title',
  sortBy: 'release_date',
  films,
};

export const key: InjectionKey<Store<IState>> = Symbol('filmStore');

export const store = createStore({
  state(): IState {
    return initialState;
  },
  getters: {
    selectedFilm: (state: IState) => state.films.find((film) => film.id === state.selectedFilmId),
    totalCountFilms: (state: IState) => state.films.length,
    searchedFilms: (state) => (searchValue: string) => {
      if (!searchValue) return state.films;

      const valueLoverCase = searchValue.toLowerCase();

      return state.films.filter((film) => {
        if (state.searchBy === 'title') {
          return film.title.toLowerCase().includes(valueLoverCase);
        }
        if (state.searchBy === 'gender') {
          return film.genres.some((genre) => genre.toLowerCase().includes(valueLoverCase));
        }
        return true;
      });
    },
  },
  mutations: {
    SET_SELECTED_FILM_ID(state: IState, filmId: number | null) {
      state.selectedFilmId = filmId;
    },
    SET_SEARCH_BY(state: IState, searchBy: SearchByIds) {
      state.searchBy = searchBy;
    },
    SET_SORT_BY(state: IState, sortBy: SortByIds) {
      state.sortBy = sortBy;
    },
  },
  actions: {
    setSelectedFilmId({ commit }, filmId) {
      commit('SET_SELECTED_FILM_ID', filmId);
    },
    setSearchBy({ commit }, searchBy) {
      commit('SET_SEARCH_BY', searchBy);
    },
    setSortBy({ commit }, sortBy) {
      commit('SET_SORT_BY', sortBy);
    },
  },
  modules: {},
});

export function useStore() {
  return baseUseStore(key);
}
