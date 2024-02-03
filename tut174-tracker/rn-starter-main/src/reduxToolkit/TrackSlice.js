import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const trackSlice = createSlice({
  name: "track",
  initialState,
  reducers: {
    fetch_track(state, action) {
      return action.payload;
    },
    create_track(state, action) {
      return [...state, action.payload];
    },
  },
});

export const { fetch_track, create_track } = trackSlice.actions;

export default trackSlice.reducer;
