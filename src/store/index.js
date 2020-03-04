import Vue from 'vue'
import Vuex from 'vuex'
import { get, set } from '@u/storage'

const themeKey = 'theme'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    theme: get(themeKey) || 'light'
  },
  mutations: {
    toggleTheme (state) {
      state.theme = state.theme === 'light'
        ? 'dark'
        : 'light'
      set(themeKey, state.theme)
    }
  },
  actions: {
  },
  modules: {
  }
})
