<template>
  <el-container
    id="app"
    :class="{ dark: theme === 'dark' }"
  >
    <el-header>
      <el-menu
        :default-active="defaultActiveIndex"
        mode="horizontal"
        class="d-flex align-center justify-center"
        @select="handleSelect"
      >
        <el-menu-item index="/">
          Home
        </el-menu-item>
        <el-menu-item index="/about">
          About
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-button
      icon="el-icon-view"
      circle
      type="info"
      style="position: fixed; bottom: 12px; left: 12px; width: 40px; height: 40px;"
      @click="handleToggleTheme"
    />
    <router-view />
  </el-container>
</template>

<script>
export default {
  computed: {
    defaultActiveIndex() {
      return this.$route.path;
    },
    theme() {
      return this.$store.state.theme;
    },
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$router.push({ path: keyPath[0] });
    },
    handleToggleTheme() {
      if (this.theme === 'light') {
        this.$message('A fake dark theme. :D');
      }
      this.$store.commit('toggleTheme');
    },
  },
};
</script>

<style>
/* stylelint-disable selector-max-id */
* {
  box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  background-color: #f5f5f5;
}

::-webkit-scrollbar-track {
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: inset 0 0 4px rgba(0, 0, 0, .3);
}

::-webkit-scrollbar-thumb {
  background-color: #555;
  border-radius: 8px;
  box-shadow: inset 0 0 4px rgba(0, 0, 0, .3);
}

html,
body,
#app {
  width: 100%;
  height: 100%;
}

#app {
  font-family: Alibaba-PuHuiTi-Regular, AlibabaSans-Regular, -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Avenir, "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 14px;
  line-height: 22px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.d-flex {
  display: flex;
}

.flex-row {
  flex-direction: row;
}

.flex-col {
  flex-direction: column;
}

.align-start {
  align-items: flex-start;
}

.align-center {
  align-items: center;
}

.align-end {
  align-items: flex-end;
}

.justify-start {
  justify-content: flex-start;
}

.justify-center {
  justify-content: center;
}

.justify-end {
  justify-content: flex-end;
}

.text-center {
  text-align: center;
}

.el-row + .el-row {
  margin-top: 16px;
}

.dark {
  background-color: #eee;
}
</style>
