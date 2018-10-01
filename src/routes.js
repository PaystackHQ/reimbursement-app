import Vue from 'vue';
import Router from 'vue-router';
import LoggedIn from './pages/LoggedIn.vue';
import LoggedOut from './pages/LoggedOut.vue';
import Login from './pages/access/Login.vue';
import RequestList from './pages/requests/RequestList.vue';
import Request from './pages/requests/Request.vue';
import BeneficiaryList from './pages/beneficiaries/BeneficiaryList.vue';
import Beneficiary from './pages/beneficiaries/Beneficiary.vue';
import Settings from './pages/settings/Settings.vue';

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  routes: [
    {
      path: '/',
      component: LoggedIn,
      name: 'LoggedIn',
      children: [
        {
          path: '/requests',
          name: 'RequestList',
          component: RequestList,
          children: [
            {
              path: '/requests/:id',
              name: 'Request',
              component: Request,
            },
          ],
        },
        {
          path: '/beneficiaries',
          name: 'BeneficiaryList',
          component: BeneficiaryList,
        },
        {
          path: '/beneficiaries/:id',
          name: 'Beneficiary',
          component: Beneficiary,
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
