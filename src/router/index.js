import Vue from 'vue'
import Router from 'vue-router'
import Home from '@v/home'
import About from '@v/about'
import Exception from '@v/exception'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/404',
      name: '404',
      component: Exception
    },
    {
      path: '*',
      redirect: { name: '404' }
    }
  ]
})
