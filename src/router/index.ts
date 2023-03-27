import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import SearchSection from '@/components/SearchSection.vue';
import DescriptionSection from '@/components/DescriptionSection.vue';
import HomeLayout from '../views/HomeLayout.vue';
import HomeView from '../views/HomeView.vue';
import PageNotFoundView from '../views/PageNotFoundView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeLayout,
    children: [
      {
        path: '',
        name: 'HomeView',
        component: HomeView,
        children: [
          {
            path: '',
            name: 'search',
            component: SearchSection,
          },
          {
            path: 'films/:id',
            name: 'films',
            component: DescriptionSection,
          },
        ],
      },
    ],
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },

  { path: '/:pathMatch(.*)*', name: 'PageNotFound', component: PageNotFoundView },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
