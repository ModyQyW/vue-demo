<template>
  <el-row>
    <el-row type="flex" align="center">
      <el-col class="d-flex flex-row align-items-center" :span="12" style="font-size: 16px; line-height: 24px;">{{ item.title }}</el-col>
      <el-col class="d-flex flex-row align-items-center justify-content-end" :span="12">
        <el-button-group>
          <el-button
            v-if="type === 'todo'"
            size="small"
            @click="handleDone"
          >
            <i class="el-icon-check" />
          </el-button>
          <el-button
            size="small"
            @click="handleRemove"
          >
            <i class="el-icon-close" />
          </el-button>
          <el-button
            size="small"
            @click="isExpanded = !isExpanded"
          >
            <i :class="iconToggleName" />
          </el-button>
        </el-button-group>
      </el-col>
    </el-row>
    <el-collapse-transition>
      <el-card v-if="isExpanded" style="margin-top: 4px; line-height: 1.5;">
        <el-row>
          <el-col :span="8"><b>title</b></el-col>
          <el-col :span="16">{{ item.title }}</el-col>
        </el-row>
        <el-row>
          <el-col :span="8"><b>detail</b></el-col>
          <el-col :span="16">{{ item.detail }}</el-col>
        </el-row>
        <el-row>
          <el-col :span="8"><b>deadline</b></el-col>
          <el-col :span="16">{{ deadline }}</el-col>
        </el-row>
      </el-card>
    </el-collapse-transition>
  </el-row>
</template>

<script>
import dayjs from 'dayjs'

export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      isExpanded: false
    }
  },
  computed: {
    iconToggleName () {
      return this.isExpanded ? 'el-icon-caret-bottom' : 'el-icon-caret-left'
    },
    deadline () {
      return dayjs(this.item.deadline).format('YYYY-MM-DD HH:mm:ss')
    }
  },
  methods: {
    handleDone () {
      this.$emit('done', {
        index: this.index,
        type: this.type
      })
    },
    handleRemove () {
      this.$emit('remove', {
        index: this.index,
        type: this.type
      })
    }
  }
}
</script>
