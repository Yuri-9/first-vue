import { Store } from 'vuex';
import { IState } from './state';

declare module '@vue/runtime-core' {
  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<IState>;
  }
}
