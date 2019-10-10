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
          @add="handleAddTodo"
          ref="addForm"
        />
      </el-col>
      <el-col
        :span="8"
        style="max-height: 100%;"
      >
        <h4>Todo List</h4>
        <todo-list
          :todo="todo"
          @done="handleDone"
          @remove="handleRemove"
        />
      </el-col>
      <el-col
        :span="8"
        style="max-height: 100%;"
      >
        <h4>Done List</h4>
        <done-list
          :done="done"
          @remove="handleRemove"
        />
      </el-col>
    </el-row>
    <el-row
      type="flex"
      justify="center"
      style="margin-top: 8px;"
    >
      <el-button
        type="danger"
        @click="handleClear"
      >
        Clear All
      </el-button>
    </el-row>
    <el-row
      type="flex"
      align="middle"
      justify="center"
      style="margin-top: 8px;"
    >
      <span>Check Interval: </span>
      <el-select
        v-model="interval"
        @change="handleChangeInterval"
      >
        <el-option
          v-for="interval in intervalOptions"
          :key="interval.value"
          :label="interval.label"
          :value="interval.value">
        </el-option>
      </el-select>
    </el-row>
  </el-main>
</template>

<script>
import dayjs from 'dayjs'
import storage from '@u/storage'
import AddForm from './components/AddForm'
import TodoList from './components/TodoList'
import DoneList from './components/DoneList'

export default {
  name: 'home',
  components: {
    AddForm,
    TodoList,
    DoneList
  },
  data () {
    return {
      todo: storage.get('todo').value || [],
      done: storage.get('done').value || [],
      interval: storage.get('interval').value || 180000,
      intervalTimer: null,
      intervalOptions: [
        {
          label: '1 min',
          value: 60000
        }, {
          label: '3 min',
          value: 180000
        }, {
          label: '5 min',
          value: 300000
        }, {
          label: '10 min',
          value: 600000
        }, {
          label: '15 min',
          value: 900000
        }, {
          label: '30 min',
          value: 1800000
        }
      ]
    }
  },
  mounted () {
    this.handleSetIntervalTimer()
  },
  methods: {
    handleSetIntervalTimer () {
      if (this.intervalTimer) {
        clearInterval(this.intervalTimer)
      }
      this.handleCheckOutdated()
      this.intervalTimer = setInterval(() => {
        this.handleCheckOutdated()
      }, this.interval)
    },
    handleCheckOutdated () {
      const now = Date.now()
      let todoLen = this.todo.length
      for (let i = 0; i < todoLen; i += 1) {
        if (this.todo[i].deadline <= now) {
          this.$notify({
            title: 'Warning',
            message: `${this.todo[i].title} Deadline! Detail: ${this.todo[i].detail}. Deadline: ${dayjs(this.todo[i].deadline).format('YYYY-MM-DD HH:mm:ss')}.`,
            duration: 0,
            type: 'warning'
          })
          this.handleRemove({ type: 'todo', index: i })
          todoLen -= 1
          i -= 1
        }
      }
    },
    handleAddTodo (payload) {
      const newTodo = { ...payload, timestamp: Date.now() }
      this.todo.push(newTodo)
      const res = storage.set('todo', JSON.stringify(this.todo))
      if (!res.suc) {
        this.$alert(res.msg, 'Error').then(function () {}).catch(function () {})
      } else {
        this.$message({
          message: 'Add successfully',
          type: 'success'
        })
        this.$refs.addForm.handleResetForm()
      }
    },
    handleClear () {
      this.todo = []
      this.done = []
      storage.clear()
    },
    handleDone (payload) {
      const newDone = this.todo.shift()
      this.done.push(newDone)
      const res1 = storage.set('todo', JSON.stringify(this.todo))
      const res2 = storage.set('done', JSON.stringify(this.done))
      if (!res1.suc) {
        this.$alert(res1.msg, 'Error').then(function () {}).catch(function () {})
      } else if (!res2.suc) {
        this.$alert(res1.msg, 'Error').then(function () {}).catch(function () {})
      } else {
        this.$message({
          message: 'Done successfully',
          type: 'success'
        })
      }
    },
    handleRemove (payload) {
      const { type, index } = payload
      let res
      switch (type) {
        case 'todo':
          this.todo.splice(index, 1)
          res = storage.set('todo', JSON.stringify(this.todo))
          break
        case 'done':
          this.done.splice(index, 1)
          res = storage.set('done', JSON.stringify(this.done))
          break
        default:
          break
      }
      if (!res.suc) {
        this.$alert(res.msg, 'Error').then(function () {}).catch(function () {})
      } else {
        this.$message({
          message: 'Remove successfully',
          type: 'success'
        })
      }
    },
    handleChangeInterval (interval) {
      const res = storage.set('interval', JSON.stringify(interval))
      if (!res.suc) {
        this.$alert(res.msg, 'Error').then(function () {}).catch(function () {})
      } else {
        this.$message({
          message: 'Set interval successfully',
          type: 'success'
        })
      }
      this.handleSetIntervalTimer()
    }
  }
}
</script>
