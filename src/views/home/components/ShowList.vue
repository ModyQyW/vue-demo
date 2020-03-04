<template>
  <el-card style="max-height: calc(100% - 64px); overflow: hidden auto;">
    <template v-if="list.length > 0">
      <show-list-item
        v-for="(item, index) in list"
        :key="item.timestamp"
        :item="item"
        :index="index"
        :type="type"
        @done="handleDone"
        @remove="handleRemove"
      />
      <el-row
        type="flex"
        justify="center"
        style="margin-top: 24px;"
      >
        <el-button
          type="danger"
          size="mini"
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
import ShowListItem from './ShowListItem'

export default {
  name: 'ShowList',
  components: {
    ShowListItem
  },
  props: {
    type: {
      type: String,
      required: true
    },
    list: {
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
    },
    handleClear () {
      this.$emit('clear', { type: this.type })
    }
  }
}
</script>
