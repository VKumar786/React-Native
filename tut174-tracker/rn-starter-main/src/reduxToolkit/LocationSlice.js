import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  locations: [],
  recording: false,
  currentLocation: null, // {}
};

const locationSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addCurrentLocation(state, action) {
      return {
        ...state,
        currentLocation: action.payload,
      };
    },
  },
});

export const { addCurrentLocation } = locationSlice.actions;
export default locationSlice.reducer;
