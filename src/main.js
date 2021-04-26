import Vue from 'vue';
import '@/plugins';
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';
import App from './App.vue';
import '@/styles/global.scss';
import '@/guard';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
