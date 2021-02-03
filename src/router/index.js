import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/layout/index.vue';
import Home from '@/views/home/index.vue';
import About from '@/views/about/index.vue';

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
    path: '*',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/exception/404.vue'),
      },
    ],
  },
];

const createRouter = () =>
  new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes,
  });

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher;
}

export default router;
