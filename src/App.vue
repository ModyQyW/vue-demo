<template>
  <el-container id="app">
    <el-header>
      <el-menu
        :default-active="defaultActiveIndex"
        mode="horizontal"
        @select="handleSelect"
        style="display: flex; align-items: center; justify-content: center;"
      >
        <el-menu-item index="/">Home</el-menu-item>
        <el-menu-item index="/about">About</el-menu-item>
      </el-menu>
    </el-header>
    <router-view :key="defaultActiveIndex"/>
  </el-container>
</template>

<script>
export default {
  computed: {
    defaultActiveIndex () {
      return this.$route.path
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      this.$router.push({ path: keyPath[0] })
    }
  }
}
</script>
