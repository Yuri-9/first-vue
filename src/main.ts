import { createApp } from 'vue';
import { LazyLoadingPlugin } from '@/plugins';
import { store, key } from '@/store';
import App from './App.vue';
import router from './router';
import './styles.scss';
import ScrollIntoView from './plugins/ScrollIntoView';

const app = createApp(App);

app
  .use(LazyLoadingPlugin, { margin: 100, visibilityThreshold: 0 })
  .use(ScrollIntoView)
  .use(store, key)
  .use(router)
  .mount('#app');
