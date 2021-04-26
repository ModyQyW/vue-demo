<template>
  <v-app-bar app color="primary" dark>
    <v-app-bar-nav-icon @click.stop="handleToggleDrawer" />
    <!-- eslint-disable vuejs-accessibility/anchor-has-content -->
    <a href="https://vuejs.org" target="_blank">
      <v-img
        alt="Vue Logo"
        class="shrink mr-2"
        contain
        lazy-src="https://vuejs.org/images/logo.png"
        src="https://vuejs.org/images/logo.png"
        transition="scale-transition"
        width="36"
      />
    </a>
    <a href="https://vuetifyjs.com" target="_blank">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        lazy-src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="36"
      />
    </a>
    <!-- eslint-enable vuejs-accessibility/anchor-has-content -->
    <v-toolbar-title class="d-none d-md-block">
      vue2-todo-list-demo
    </v-toolbar-title>
    <v-spacer />
    <v-menu bottom>
      <template #activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" small v-on="on">
          <v-icon>mdi-palette</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="item in themeItems"
          :key="item.value"
          @click="handleSetTheme(item.value)"
        >
          <v-list-item-title>{{ item.label }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-btn
      href="https://github.com/ModyQyW/vue2-todo-list-demo/"
      target="_blank"
      text
      small
    >
      Github
      <v-icon right>mdi-open-in-new</v-icon>
    </v-btn>
    <v-btn
      href="https://gitee.com/ModyQyW/vue2-todo-list-demo/"
      target="_blank"
      text
      small
    >
      Gitee
      <v-icon right>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'LayoutBar',
  props: {
    drawer: {
      required: true,
      validator: (val) => val === null || typeof val === 'boolean',
    },
  },
  data: () => ({
    themeItems: [
      {
        label: 'LIGHT',
        value: 'light',
      },
      {
        label: 'DARK',
        value: 'dark',
      },
    ],
  }),
  methods: {
    handleToggleDrawer() {
      this.$emit('update:drawer', !this.drawer);
    },
    handleSetTheme(item) {
      this.$store.commit('setTheme', item);
      this.$vuetify.theme.dark = item === 'dark';
    },
  },
};
</script>
