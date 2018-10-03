import Vue from 'vue';
import Root from './Root.vue';
import router from './routes';

// Global components
import BaseButton from './components/BaseButton.vue';
import Avatar from './components/Avatar.vue';
import RequestListItem from './components/RequestListItem.vue';
import Sidebar from './components/Sidebar.vue';
import Modal from './components/Modal.vue';

Vue.component('BaseButton', BaseButton);
Vue.component('Avatar', Avatar);
Vue.component('RequestListItem', RequestListItem);
Vue.component('Sidebar', Sidebar);
Vue.component('Modal', Modal);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(Root),
}).$mount('#app');
