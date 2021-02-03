import Vue from 'vue';
import '@/plugins';
import i18n from './i18n';
import router from './router';
import store from './store';
import App from './App.vue';

import vuetify from './plugins/vuetify';
import '@/styles/global.scss';
import '@/guard';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
