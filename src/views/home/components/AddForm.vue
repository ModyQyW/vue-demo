<template>
  <el-form
    ref="addForm"
    :model="addForm"
    :rules="addFormRules"
    label-position="left"
    label-width="80px"
  >
    <el-form-item
      label="Title"
      prop="title"
      required
    >
      <el-input
        v-model="addForm.title"
        show-word-limit
        maxlength="20"
        clearable
      />
    </el-form-item>
    <el-form-item
      label="Detail"
      prop="detail"
      required
    >
      <el-input
        v-model="addForm.detail"
        type="textarea"
        :rows="8"
        resize="none"
        show-word-limit
        maxlength="100"
        clearable
      />
    </el-form-item>
    <el-form-item
      label-width="0"
      class="text-center"
    >
      <el-button
        type="primary"
        size="mini"
        @click="handleSubmitForm"
      >
        Add
      </el-button>
      <el-button
        size="mini"
        @click="handleResetForm"
      >
        Reset
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      addForm: {
        title: '',
        detail: '',
      },
      addFormRules: {
        title: [
          { required: true, message: 'Please set todo title', trigger: 'blur' },
          { max: 20, message: 'Should less than 20', trigger: 'blur' },
        ],
        detail: [
          { required: true, message: 'Please set todo detail', trigger: 'change' },
          { max: 100, message: 'Should less than 100', trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    handleSubmitForm() {
      this.$refs.addForm.validate((valid) => {
        if (valid) {
          this.$emit('add-todo', this.addForm);
          this.handleResetForm();
        }
      });
    },
    handleResetForm() {
      this.$refs.addForm.resetFields();
    },
  },
};
</script>
