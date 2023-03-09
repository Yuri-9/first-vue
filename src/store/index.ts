import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import films from '@/store/movies.json';
import { IFilm } from '@/types/film';
import { SearchByIDs, SortByIDs } from '@/types/filters';

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

export const key: InjectionKey<Store<IState>> = Symbol('filmStore');

export const store = createStore({
  state(): IState {
    return initialState;
  },
  getters: {
    selectedFilm: (state: IState) => state.films.find((film) => film.id === state.selectedFilmId),
    totalCountFilms: (state: IState) => state.films.length,
    searchedFilms: (state) => (searchValue: string) => {
      const valueLoverCase = searchValue.toLowerCase();

      const filteredFilms = state.films.filter((film) => {
        if (state.searchBy === SearchByIDs.TITLE) {
          return film.title.toLowerCase().includes(valueLoverCase);
        }
        if (state.searchBy === SearchByIDs.GENRE) {
          return film.genres.some((genre) => genre.toLowerCase().includes(valueLoverCase));
        }
        return true;
      });

      const sortedFilms = filteredFilms.sort((filmA, filmB) => {
        if (state.sortBy === SortByIDs.RELEASE_DATE) {
          return filmA.release_date < filmB.release_date ? 1 : -1;
        }
        if (state.sortBy === SortByIDs.RATING) {
          return filmA.vote_count < filmB.vote_count ? 1 : -1;
        }
        return 0;
      });
      return sortedFilms;
    },
  },
  mutations: {
    SET_SELECTED_FILM_ID(state: IState, filmId: number | null) {
      state.selectedFilmId = filmId;
    },
    SET_SEARCH_BY(state: IState, searchBy: SearchByIDs) {
      state.searchBy = searchBy;
    },
    SET_SORT_BY(state: IState, sortBy: SortByIDs) {
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
