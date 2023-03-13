import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';

import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import { IState, state } from './state';

export const key: InjectionKey<Store<IState>> = Symbol('filmStore');

export const store = createStore({
  state,
  getters,
  mutations,
  actions,
  modules: {},
});

export function useStore() {
  return baseUseStore(key);
}
