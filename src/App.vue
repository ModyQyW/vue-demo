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
