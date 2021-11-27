import Vue from 'vue';
import VueRouter from 'vue-router';

// Pages
import DefaultPage from '@/components/pages/DefaultPage.vue';

Vue.use(VueRouter);

// https://fontawesome.com/v5/cheatsheet
const ROUTES = [
  { name: 'Home', path: '/home', component: DefaultPage, icon: 'home' },
  {
    name: 'Home1',
    path: '/home_1',
    component: DefaultPage,
    icon: 'anchor',
  },
  { name: 'Home2', path: '/home_2', component: DefaultPage, icon: 'archive' },
  { name: 'Home3', path: '/home_3', component: DefaultPage, icon: 'address-card' },
  { name: 'Home4', path: '/home_4', component: DefaultPage, icon: 'adjust' },
];

export function createRouter() {
  const defaultRoute = { path: '*', redirect: ROUTES[0].path };

  return new VueRouter({ routes: [defaultRoute].concat(ROUTES) });
}
