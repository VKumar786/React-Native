import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    addBlog(state, action) {
      // same as action
      state.push(action.payload);
    },
    removeBlog(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    updateBlog(state, action) {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            ...action.payload,
          };
        }
        return item;
      });
    },
    storeAllBlog(state, action) {
      return action.payload;
    },
  },
});

export const { addBlog, removeBlog, updateBlog, storeAllBlog } = blogSlice.actions;
export default blogSlice.reducer;
