import { configureStore } from "@reduxjs/toolkit";
import addNameReducer from "./addNameSlice";
import todoReducer from "./todoSlice";

export default configureStore({
  reducer: {
    addName: addNameReducer,
    todo: todoReducer,
  },
});
