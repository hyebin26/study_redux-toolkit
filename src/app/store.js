import { configureStore } from "@reduxjs/toolkit";
import titleReducer from "../features/todoList/title/titleSlice";
import todoReducer from "../features/todoList/todo/todoSlice";

export default configureStore({
  reducer: {
    title: titleReducer,
    todo: todoReducer,
  },
});
