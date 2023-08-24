import { configureStore } from "@reduxjs/toolkit";
import todoReducer, {
  addTodoItem,
  removeTodoItem,
  clearTodoList,
  markItemAsCompleted,
  markItemAsNotCompleted,
  editItemTitle,
} from "./todoSlice/todoSlice";
import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";

export const listenerMiddleware = createListenerMiddleware();
listenerMiddleware.startListening({
  matcher: isAnyOf(
    addTodoItem,
    removeTodoItem,
    clearTodoList,
    markItemAsCompleted,
    markItemAsNotCompleted,
    editItemTitle
  ),
  effect: (action, listenerApi) => {
    localStorage.setItem(
      "todo-list",
      JSON.stringify(listenerApi.getState().todo.todoList)
    );
  },
});

export default configureStore({
  reducer: {
    todo: todoReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    listenerMiddleware.middleware,
  ],
});
