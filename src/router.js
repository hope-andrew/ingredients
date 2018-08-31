import Vue from 'vue';
import Router from 'vue-router';
import Ingredients from './views/Ingredients.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Ingredients,
    },
    {
      path: '/ingredients',
      name: 'ingredients',
      component: Ingredients,
    },
  ],
});
