<template>
  <el-form
    :model="addForm"
    :rules="addFormRules"
    label-position="left"
    ref="addForm"
    label-width="100px"
  >
    <el-form-item label="Title" prop="title" required>
      <el-input
        v-model="addForm.title"
        clearable
        placeholder="Todo in short, less than 20"
      />
    </el-form-item>
    <el-form-item label="Detail" prop="detail" required>
      <el-input
        type="textarea"
        v-model="addForm.detail"
        :rows="8"
        resize="none"
        clearable
        placeholder="Detail for the todo, less than 100"
      />
    </el-form-item>
    <el-form-item label="Deadline" prop="deadline" required>
      <el-date-picker
        v-model="addForm.deadline"
        type="datetime"
        placeholder="Pick deadline"
        value-format="timestamp"
        :picker-options="datepickerOptions"
      />
    </el-form-item>
    <el-form-item label-width="0" style="text-align: center;">
      <el-button
        type="primary"
        @click="handleSubmitForm"
      >
        Add
      </el-button>
      <el-button @click="handleResetForm">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data () {
    return {
      addForm: {
        title: '',
        detail: '',
        deadline: ''
      },
      addFormRules: {
        title: [
          { required: true, message: 'Please set todo title', trigger: 'blur' },
          { max: 20, message: 'Should less than 20', trigger: 'blur' }
        ],
        detail: [
          { required: true, message: 'Please set todo detail', trigger: 'change' },
          { max: 100, message: 'Should less than 100', trigger: 'blur' }
        ],
        deadline: [
          { type: 'date', required: true, message: 'Please set deadline', trigger: 'change' }
        ]
      },
      datepickerOptions: {
        disabledDate (time) {
          return time.getTime() < Date.now()
        }
      }
    }
  },
  methods: {
    handleSubmitForm () {
      this.$refs.addForm.validate((valid) => {
        if (valid) {
          this.$emit('add', this.addForm)
          return true
        } else {
          return false
        }
      })
    },
    handleResetForm () {
      this.$refs.addForm.resetFields()
    }
  }
}
</script>

<style lang="scss">
.el-date-editor.el-input {
  width: 100% !important;
}
</style>
