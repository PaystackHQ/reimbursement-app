import Vue from 'vue';
import Root from './Root.vue';
import router from './routes';

// Global components
import BaseButton from './components/BaseButton.vue';
import Avatar from './components/Avatar.vue';
import RequestListItem from './components/RequestListItem.vue';

Vue.component('BaseButton', BaseButton);
Vue.component('Avatar', Avatar);
Vue.component('RequestListItem', RequestListItem);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(Root),
}).$mount('#app');
