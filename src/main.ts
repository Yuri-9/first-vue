import { createApp } from 'vue';
import { LazyLoadingPlugin } from '@/plugins';
import App from './App.vue';
import router from './router';
import store from './store';
import './styles.scss';
import ScrollIntoView from './plugins/ScrollIntoView';

const app = createApp(App);

app
  .use(LazyLoadingPlugin, { margin: 100, visibilityThreshold: 0 })
  .use(ScrollIntoView)
  .use(store)
  .use(router)
  .mount('#app');
