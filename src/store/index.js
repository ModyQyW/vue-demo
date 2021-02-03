import Vue from 'vue';
import Vuex from 'vuex';
import { getTheme, setTheme, getLanguage, setLanguage } from '@u/storage';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    language: getLanguage(),
    theme: getTheme(),
  },
  getters: {},
  mutations: {
    setLanguage(state, language) {
      state.language = language;
      setLanguage(language);
    },
    setTheme(state, theme) {
      state.theme = theme === 'light' || theme === 'dark' ? theme : 'light';
      setTheme(state.theme);
    },
  },
  actions: {},
  modules: {},
});
