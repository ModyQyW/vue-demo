<template>
  <v-container>
    <v-row>
      <v-col
        :cols="12"
        :md="4"
        :sm="12"
      >
        <p class="text-body-1">
          Add Todo
        </p>
        <v-form
          ref="form"
          lazy-validation
        >
          <v-text-field
            v-model="title"
            :counter="20"
            :rules="titleRules"
            label="Title"
            required
          />
          <v-row
            justify="space-around"
            class="mt-2"
          >
            <v-btn
              color="primary"
              @click="handleConfirm"
            >
              OK
            </v-btn>
            <v-btn @click="handleReset">
              Reset
            </v-btn>
          </v-row>
        </v-form>
      </v-col>
      <v-col
        :cols="12"
        :md="4"
        :sm="12"
      >
        <p class="text-body-1">
          Todo List
        </p>
        <v-card
          max-height="600px"
          class="overflow-y-auto"
        >
          <v-list dense>
            <v-subheader v-if="todoList.length === 0">
              Empty
            </v-subheader>
            <template v-for="todo of todoList">
              <v-list-item :key="todo.timestamp">
                <v-list-item-content>
                  <!-- tooltip is better -->
                  <v-list-item-title
                    :title="todo.title"
                    v-text="todo.title"
                  />
                  <v-list-item-subtitle>
                    {{ todo.timestamp | filterTimestamp }}
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action class="flex-row">
                  <v-btn
                    icon
                    @click="handleRemove('todo', todo.timestamp)"
                  >
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon @click="handleComplete(todo.timestamp)">
                      mdi-check
                    </v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </template>
          </v-list>
        </v-card>
      </v-col>
      <v-col
        :cols="12"
        :md="4"
        :sm="12"
      >
        <p class="text-body-1">
          Done List
        </p>
        <v-card
          max-height="600px"
          class="overflow-y-auto"
        >
          <v-list dense>
            <v-subheader v-if="doneList.length === 0">
              Empty
            </v-subheader>
            <template v-for="done of doneList">
              <v-list-item :key="done.timestamp">
                <v-list-item-content>
                  <!-- tooltip is better -->
                  <v-list-item-title
                    :title="done.title"
                    v-text="done.title"
                  />
                  <v-list-item-subtitle>
                    {{ done.timestamp | filterTimestamp }}
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn
                    icon
                    @click="handleRemove('done', done.timestamp)"
                  >
                    <v-icon>mdi-delete</v-icon>
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
import {
  getTodoList, setTodoList, getDoneList, setDoneList,
} from '@u/storage';

export default {
  filters: {
    filterTimestamp(timestamp) {
      return new Date(timestamp).toLocaleString();
    },
  },
  data: () => ({
    title: '',
    titleRules: [
      (v) => !!v || 'Title is required',
      (v) => (v && v.length <= 20) || 'Title must be less than 20 characters',
    ],
    todoList: getTodoList(),
    doneList: getDoneList(),
  }),
  methods: {
    handleReset() {
      this.$refs.form.reset();
    },
    handleConfirm() {
      if (this.$refs.form.validate()) {
        this.todoList.unshift({
          title: this.title,
          timestamp: +new Date(),
        });
        setTodoList(this.todoList);
        this.handleReset();
      }
    },
    handleRemove(type, timestamp) {
      if (type === 'todo') {
        for (let i = 0, len = this.todoList.length; i < len; i += 1) {
          if (this.todoList[i].timestamp === timestamp) {
            this.todoList.splice(i, 1);
            setTodoList(this.todoList);
            break;
          }
        }
      } else {
        for (let i = 0, len = this.doneList.length; i < len; i += 1) {
          if (this.doneList[i].timestamp === timestamp) {
            this.doneList.splice(i, 1);
            setDoneList(this.doneList);
            break;
          }
        }
      }
    },
    handleComplete(timestamp) {
      let item = {};
      for (let i = 0, len = this.todoList.length; i < len; i += 1) {
        if (this.todoList[i].timestamp === timestamp) {
          [item] = this.todoList.splice(i, 1);
          setTodoList(this.todoList);
          break;
        }
      }
      this.doneList.unshift(item);
      setDoneList(this.doneList);
    },
  },
};
</script>
