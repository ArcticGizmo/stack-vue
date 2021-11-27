import Vue from 'vue';
import VueRouter from 'vue-router';

// Pages
import HomePage from '@/components/pages/HomePage.vue';
import APIPage from '@/components/pages/APIPage.vue';
import ChannelPage from '@/components/pages/ChannelPage.vue';

Vue.use(VueRouter);

// https://fontawesome.com/v5/cheatsheet
const ROUTES = [
  { name: 'Home', path: '/home', component: HomePage, icon: 'home' },
  {
    name: 'API',
    path: '/api',
    component: APIPage,
    icon: 'cloud',
  },
  { name: 'Channel', path: '/channel', component: ChannelPage, icon: 'exchange-alt' },
];

export function createRouter() {
  const defaultRoute = { path: '*', redirect: ROUTES[0].path };

  return new VueRouter({ routes: [defaultRoute].concat(ROUTES) });
}
