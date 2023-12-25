import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./CartSlice";

const store = configureStore({
  reducer: {
    blog: blogReducer,
  },
});

export default store
