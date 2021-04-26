<template>
  <v-container>
    <v-row>
      <v-col :cols="12" :md="4" :sm="12">
        <p class="text-body-1">Add Todo</p>
        <v-form ref="form" lazy-validation>
          <v-text-field
            v-model="title"
            :counter="20"
            :rules="titleRules"
            label="Title"
            required
          />
          <v-row>
            <v-col>
              <v-btn class="mr-2" color="primary" @click="handleConfirm">
                OK
              </v-btn>
              <v-btn @click="handleReset"> Reset </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
      <v-col :cols="12" :md="4" :sm="12">
        <p class="text-body-1">Todo List</p>
        <v-card max-height="600px" class="overflow-y-auto">
          <v-list dense>
            <v-subheader v-if="todoList.length === 0"> Empty </v-subheader>
            <template v-for="todo of todoList">
              <v-list-item :key="todo.timestamp">
                <v-list-item-content>
                  <v-list-item-title :title="todo.title" v-text="todo.title" />
                  <v-list-item-subtitle>
                    {{ handleFormatTimestamp(todo.timestamp) }}
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action class="flex-row">
                  <v-btn icon small @click="handleRemove(todo)">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                  <v-btn icon small @click="handleChangeStatus(todo, 2)">
                    <v-icon>mdi-check</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </template>
          </v-list>
        </v-card>
      </v-col>
      <v-col :cols="12" :md="4" :sm="12">
        <p class="text-body-1">Done List</p>
        <v-card max-height="600px" class="overflow-y-auto">
          <v-list dense>
            <v-subheader v-if="doneList.length === 0"> Empty </v-subheader>
            <template v-for="done of doneList">
              <v-list-item :key="done.timestamp">
                <v-list-item-content>
                  <!-- tooltip is better -->
                  <v-list-item-title :title="done.title" v-text="done.title" />
                  <v-list-item-subtitle>
                    {{ handleFormatTimestamp(done.timestamp) }}
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action class="flex-row">
                  <v-btn icon small @click="handleRemove(done)">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                  <v-btn icon small @click="handleChangeStatus(todo, 1)">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </template>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getList, setList } from '@/utils';

export default {
  data: () => ({
    title: '',
    titleRules: [
      (v) => !!v || 'Title is required',
      (v) => (v && v.length <= 20) || 'Title must be less than 20 characters',
    ],
    list: getList(),
  }),
  computed: {
    todoList() {
      return this.list.filter((listItem) => listItem.status === 1);
    },
    doneList() {
      return this.list.filter((listItem) => listItem.status === 2);
    },
  },
  methods: {
    handleFormatTimestamp(timestamp) {
      return new Date(timestamp).toLocaleString();
    },
    handleReset() {
      this.$refs.form.reset();
    },
    handleConfirm() {
      if (this.$refs.form.validate()) {
        this.list.unshift({
          title: this.title,
          status: 1,
          timestamp: Date.now(),
        });
        setList(this.list);
        this.handleReset();
      }
    },
    handleRemove(listItem) {
      for (let i = 0, len = this.list.length; i < len; i += 1) {
        if (this.list[i].timestamp === listItem.timestamp) {
          this.list.splice(i, 1);
          setList(this.list);
          break;
        }
      }
    },
    handleChangeStatus(listItem, status) {
      for (let i = 0, len = this.list.length; i < len; i += 1) {
        if (this.list[i].timestamp === listItem.timestamp) {
          this.list[i].status = status;
          setList(this.list);
          break;
        }
      }
    },
  },
};
</script>
