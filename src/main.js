import Vue from 'vue';
import '@/directives';
import '@/plugins';
import i18n from './i18n';
import router from './router';
import store from './store';
import App from './App.vue';

import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
