import Vue from 'vue';
import Root from './Root.vue';
import router from './routes';

// Global components
import BaseButton from './components/BaseButton.vue';

Vue.component('BaseButton', BaseButton);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(Root),
}).$mount('#app');
