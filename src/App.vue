<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  mounted() {
    this.$vuetify.theme.dark = this.$store.state.theme === 'dark';
  },
};
</script>
