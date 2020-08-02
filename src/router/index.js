import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/layout';
import Home from '@v/home';
import About from '@v/about';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
      },
    ],
  },
  {
    path: '/about',
    component: Layout,
    children: [
      {
        path: '',
        name: About,
        component: About,
      },
    ],
  },
  {
    path: '/404',
    component: Layout,
    children: [
      {
        path: '',
        name: '404',
        component: () => import('@v/exception/404.vue'),
      },
    ],
  },
  {
    path: '*',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@v/exception/404.vue'),
      },
    ],
  },
];

const createRouter = () => new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes,
});

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher;
}

export default router;
