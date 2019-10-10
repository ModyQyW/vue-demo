<template>
  <el-card style="max-height: calc(100% - 64px); overflow: hidden auto;">
    <template v-if="todo.length > 0">
      <list-item
        v-for="(item, index) in todo"
        :key="item.timestamp"
        :item="item"
        :index="index"
        :type="'todo'"
        @done="handleDone"
        @remove="handleRemove"
      />
    </template>
    <template v-else>
      <em>No Data</em>
    </template>
  </el-card>
</template>

<script>
import ListItem from './ListItem'

export default {
  components: {
    ListItem
  },
  props: {
    todo: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleDone (payload) {
      this.$emit('done', payload)
    },
    handleRemove (payload) {
      this.$emit('remove', payload)
    }
  }
}
</script>
