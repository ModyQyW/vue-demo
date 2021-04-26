import Vue from 'vue';
import Vuex from 'vuex';
import { getTheme, setTheme } from '@/utils';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV === 'development',
  state: {
    theme: getTheme(),
  },
  getters: {},
  mutations: {
    setTheme(state, theme) {
      state.theme = theme === 'light' || theme === 'dark' ? theme : 'light';
      setTheme(state.theme);
    },
  },
  actions: {},
  modules: {},
});
