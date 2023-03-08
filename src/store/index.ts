import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import films from '@/store/movies.json';
import { IFilm } from '@/types/film';

export interface IState {
  selectedFilmId: null | number;
  films: IFilm[];
}

const initialState: IState = {
  selectedFilmId: null,
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
  },
  mutations: {
    SET_SELECTED_FILM_ID(state: IState, filmId: number | null) {
      console.log('filmId', filmId);

      state.selectedFilmId = filmId;
    },
  },
  actions: {
    setSelectedFilmId({ commit }, filmId) {
      commit('SET_SELECTED_FILM_ID', filmId);
    },
  },
  modules: {},
});

export function useStore() {
  return baseUseStore(key);
}
