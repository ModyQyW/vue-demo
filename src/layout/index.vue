<template>
  <v-app>
    <layout-bar :drawer.sync="drawer" />
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            vue2-todo-list-demo
          </v-list-item-title>
          <v-list-item-subtitle>
            author:
            <a href="https://github.com/ModyQyW/" target="_blank">ModyQyW</a>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider />
      <v-list dense nav>
        <v-list-item-group color="primary">
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" exact>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ $t(item.title) }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import LayoutBar from './components/Bar.vue';

export default {
  name: 'Layout',
  components: {
    LayoutBar,
  },
  data: () => ({
    drawer: null,
    items: [
      {
        title: 'app.drawer.home',
        icon: 'mdi-view-dashboard',
        to: '/',
      },
      {
        title: 'app.drawer.about',
        icon: 'mdi-help-box',
        to: '/about',
      },
    ],
  }),
};
</script>
