<template>
  <el-card style="max-height: calc(100% - 64px); overflow: hidden auto;">
    <template v-if="done.length > 0">
      <list-item
        v-for="(item, index) in done"
        :key="item.timestamp"
        :item="item"
        :index="index"
        :type="'done'"
        @remove="handleRemove"
      />
      <el-row
        type="flex"
        justify="center"
        style="margin-top: 8px;"
      >
        <el-button
          type="danger"
          @click="handleClear"
        >
          Clear
        </el-button>
      </el-row>
    </template>
    <template v-else>
      <em>No Data</em>
    </template>
  </el-card>
</template>

<script>
import ListItem from './ListItem';

export default {
  components: {
    ListItem,
  },
  props: {
    done: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleRemove(payload) {
      this.$emit('remove', payload);
    },
    handleClear() {
      this.$emit('clear', { type: this.type });
    },
  },
};
</script>
