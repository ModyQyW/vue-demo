<template>
  <v-app-bar app color="primary" dark>
    <v-app-bar-nav-icon @click.stop="handleToggleDrawer" />
    <v-img
      alt="Vue Logo"
      class="shrink mr-2"
      contain
      lazy-src="https://vuejs.org/images/logo.png"
      src="https://vuejs.org/images/logo.png"
      transition="scale-transition"
      width="36"
    />
    <v-img
      alt="Vuetify Logo"
      class="shrink mr-2"
      contain
      lazy-src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
      src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
      transition="scale-transition"
      width="36"
    />
    <v-toolbar-title>vue-demo</v-toolbar-title>
    <v-spacer />
    <v-menu bottom>
      <template #activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-translate</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="item in languageItems"
          :key="item.value"
          @click="handleSetLanguage(item.value)"
        >
          <v-list-item-title>{{ item.label }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-menu bottom>
      <template #activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-palette</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="item in themeItems"
          :key="item.value"
          @click="handleSetTheme(item.value)"
        >
          <v-list-item-title>{{ $t(item.label) }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-btn href="https://github.com/ModyQyW/vue-demo/" target="_blank" text>
      Github
      <v-icon right>mdi-open-in-new</v-icon>
    </v-btn>
    <v-btn href="https://gitee.com/ModyQyW/vue-demo/" target="_blank" text>
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
    languageItems: [
      {
        label: 'English',
        value: 'en',
      },
      {
        label: '简体中文',
        value: 'zh-Hans',
      },
    ],
    themeItems: [
      {
        label: 'app.theme.light',
        value: 'light',
      },
      {
        label: 'app.theme.dark',
        value: 'dark',
      },
    ],
  }),
  methods: {
    handleToggleDrawer() {
      this.$emit('update:drawer', !this.drawer);
    },
    handleSetLanguage(item) {
      this.$store.commit('setLanguage', item);
      this.$i18n.locale = item;
    },
    handleSetTheme(item) {
      this.$store.commit('setTheme', item);
      this.$vuetify.theme.dark = item === 'dark';
    },
  },
};
</script>
