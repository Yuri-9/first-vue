import { createStore } from 'vuex';

interface IState {
  selectedFilmId: null | string;
}

export default createStore({
  state(): IState {
    return {
      selectedFilmId: null,
    };
  },
  getters: {
    getSelectedFilmId(state: IState) {
      return state.selectedFilmId;
    },
  },
  mutations: {
    setSelectedFilmId(state: IState, selectedFilmId: string | null) {
      state.selectedFilmId = selectedFilmId;
    },
  },
  actions: {},
  modules: {},
});
