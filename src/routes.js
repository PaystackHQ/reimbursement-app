import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/pages/access/Login.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Login,
      name: 'Login',
    },
  ],
});
