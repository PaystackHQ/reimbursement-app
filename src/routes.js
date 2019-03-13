import Vue from 'vue';
import Router from 'vue-router';
import LoggedIn from './pages/LoggedIn.vue';
import LoggedOut from './pages/LoggedOut.vue';
import Login from './pages/access/Login.vue';
import RequestList from './pages/requests/RequestList.vue';
import Request from './pages/requests/Request.vue';
import BeneficiaryList from './pages/beneficiaries/BeneficiaryList.vue';
import Beneficiary from './pages/beneficiaries/Beneficiary.vue';
import UserList from './pages/users/UserList.vue';
import Settings from './pages/settings/Settings.vue';

Vue.use(Router);

const checkLoggedIn = (to, from, next) => {
  try {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) next();
    else next('/login');
  } catch (error) {
    next('/login');
  }
};

export default new Router({
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  routes: [
    {
      path: '/',
      component: LoggedIn,
      name: 'LoggedIn',
      beforeEnter: checkLoggedIn,
      redirect: { name: 'RequestList' },
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
        {
          path: '/users',
          name: 'UserList',
          component: UserList,
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
