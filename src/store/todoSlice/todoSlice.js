import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  todoList: [{ id: 0, title: "Learn Redux", completed: false }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: INITIAL_STATE,
  reducers: {
    addTodoItem: (state, action) => {
      state.todoList.push({
        // id: state.todoList.length,
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
  },
});

export const { addTodoItem, removeTodoItem, clearTodoList } = todoSlice.actions;

export default todoSlice.reducer;
