import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter2/counterSlice2";
import postsReducer from "../features/posts/postsSlice";
import loginReducer from "../features/login/loginSlice";

export default configureStore({
  reducer: {
    counter2: counterReducer,
    posts: postsReducer,
    login: loginReducer,
  },
});
