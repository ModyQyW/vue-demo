<template>
  <el-main style="max-height: calc(100% - 60px);">
    <el-row
      type="flex"
      :gutter="20"
      style="max-height: calc(100% - 100px); padding: 0 20px;"
    >
      <el-col
        :span="8"
        style="max-height: 100%;"
      >
        <h4>Add Form</h4>
        <add-form
          @add-todo="handleAddTodo"
          ref="addForm"
        />
      </el-col>
      <el-col
        :span="8"
        style="max-height: 100%;"
      >
        <h4>Todo List</h4>
        <show-list
          type="todo"
          :list="todoList"
          @done="handleAddDone"
          @remove="handleRemove"
          @clear="handleClear"
        />
      </el-col>
      <el-col
        :span="8"
        style="max-height: 100%;"
      >
        <h4>Done List</h4>
        <show-list
          type="done"
          :list="doneList"
          @remove="handleRemove"
          @clear="handleClear"
        />
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
import dayjs from 'dayjs'
import { get, set, remove } from '@u/storage'
import AddForm from './components/AddForm'
import ShowList from './components/ShowList'

export default {
  name: 'home',
  components: {
    AddForm,
    ShowList
  },
  data () {
    const todoListKey = 'todoList'
    const doneListKey = 'doneList'
    return {
      todoListKey,
      doneListKey,
      todoList: get(todoListKey).data || [],
      doneList: get(doneListKey).data || []
    }
  },
  methods: {
    handleAddTodo (payload) {
      const newTodo = {
        ...payload,
        timestamp: dayjs().valueOf()
      }
      this.todoList.push(newTodo)
      const res = set(this.todoListKey, this.todoList)
      if (res.success) {
        this.$message({
          message: 'Add successfully.',
          type: 'success'
        })
      } else {
        this.$alert(res.message, 'Failed')
          .then(() => {})
          .catch(() => {})
      }
    },
    handleClear (payload) {
      const { type } = payload
      switch (type) {
        case 'todo':
          this.todoList = []
          remove(this.todoListKey)
          break
        case 'done':
          this.doneList = []
          remove(this.doneListKey)
          break
        default:
          break
      }
    },
    handleAddDone (payload) {
      const newDone = this.todoList.shift()
      this.doneList.push(newDone)
      const res1 = set(this.todoListKey, this.todoList)
      const res2 = set(this.doneListKey, this.doneList)
      if (!res1.success) {
        this.$alert(res1.message, 'Error')
          .then(() => {})
          .catch(() => {})
      } else if (!res2.success) {
        this.$alert(res2.message, 'Error')
          .then(() => {})
          .catch(() => {})
      } else {
        this.$message({
          message: 'Done successfully.',
          type: 'success'
        })
      }
    },
    handleRemove (payload) {
      const { type, index } = payload
      let res
      switch (type) {
        case 'todo':
          this.todoList.splice(index, 1)
          res = set(this.todoListKey, this.todoList)
          break
        case 'done':
          this.doneList.splice(index, 1)
          res = set(this.doneListKey, this.doneList)
          break
        default:
          break
      }
      if (!res.success) {
        this.$alert(res.message, 'Error')
          .then(() => {})
          .catch(() => {})
      } else {
        this.$message({
          message: 'Remove successfully.',
          type: 'success'
        })
      }
    }
  }
}
</script>
