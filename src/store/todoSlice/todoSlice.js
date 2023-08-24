import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  todoList: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: INITIAL_STATE,
  reducers: {
    addTodoItem: (state, action) => {
      state.todoList.push({
        id: crypto.randomUUID(),
        title: action.payload,
        completed: false,
      });
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
      console.log(action.payload);

      state.todoList.find((item) => item.id === action.payload.id).title =
        action.payload.title;
      console.log(action.payload.title);
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
