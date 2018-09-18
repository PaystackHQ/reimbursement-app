import Vue from 'vue';
import Root from './Root.vue';
import router from './routes';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(Root),
}).$mount('#app');
