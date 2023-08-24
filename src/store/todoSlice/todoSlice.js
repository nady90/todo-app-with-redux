import { createSlice } from "@reduxjs/toolkit";

const localStorageList =
  localStorage.getItem("todo-list") !== null
    ? JSON.parse(localStorage.getItem("todo-list"))
    : [];

const INITIAL_STATE = {
  todoList: localStorageList,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: INITIAL_STATE,
  reducers: {
    addTodoItem: {
      reducer(state, action) {
        state.todoList.push(action.payload);
      },
      prepare(title) {
        return {
          payload: {
            title,
            id: crypto.randomUUID(),
            completed: false,
          },
        };
      },
    },
    removeTodoItem: (state, action) => {
      state.todoList = state.todoList.filter(
        (item) => item.id !== action.payload
      );
    },
    clearTodoList: (state, action) => {
      state.todoList = [];
    },
    markItemAsCompleted: (state, action) => {
      state.todoList.find(
        (item) => item.id === action.payload
      ).completed = true;
    },
    markItemAsNotCompleted: (state, action) => {
      state.todoList.find(
        (item) => item.id === action.payload
      ).completed = false;
    },
    editItemTitle: (state, action) => {
      state.todoList.find((item) => item.id === action.payload.id).title =
        action.payload.title;
    },
  },
});

export const {
  addTodoItem,
  removeTodoItem,
  clearTodoList,
  markItemAsCompleted,
  markItemAsNotCompleted,
  editItemTitle,
} = todoSlice.actions;

export default todoSlice.reducer;
