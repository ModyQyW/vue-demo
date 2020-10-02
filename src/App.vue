<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  mounted() {
    this.$i18n.locale = this.$store.state.language;
    this.$vuetify.theme.dark = this.$store.state.theme === 'dark';
    console.log('i18n', this.$i18n);
  },
};
</script>

<style>
/* stylelint-disable */
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC',
    'Hiragino Sans GB', 'Microsoft YaHei', Avenir, 'Helvetica Neue', Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
