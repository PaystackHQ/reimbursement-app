import Vue from 'vue';
import Router from 'vue-router';
import LoggedIn from './pages/LoggedIn.vue';
import LoggedOut from './pages/LoggedOut.vue';
import Login from './pages/access/Login.vue';
import RequestList from './pages/requests/RequestList.vue';
import BeneficiaryList from './pages/beneficiaries/BeneficiaryList.vue';
import Settings from './pages/settings/Settings.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: LoggedIn,
      name: 'LoggedIn',
      children: [
        {
          path: '/requests',
          name: 'Requests',
          component: RequestList,
        },
        {
          path: '/beneficiaries',
          name: 'Beneficiaries',
          component: BeneficiaryList,
        },
        {
          path: '/settings',
          name: 'Settings',
          component: Settings,
        },
      ],
    },
    {
      path: '/',
      component: LoggedOut,
      name: 'LoggedOut',
      children: [
        {
          path: '/login',
          component: Login,
          name: 'Login',
        },
      ],
    },
  ],
});
