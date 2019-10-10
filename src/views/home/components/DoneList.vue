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
    done: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleRemove (payload) {
      this.$emit('remove', payload)
    }
  }
}
</script>
