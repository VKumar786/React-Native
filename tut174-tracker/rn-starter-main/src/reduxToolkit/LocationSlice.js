import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  locations: [],
  recording: false,
  currentLocation: null, // {}
  name: "",
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    add_current_location(state, action) {
      return {
        ...state,
        currentLocation: action.payload,
      };
    },
    start_recording(state, action) {
      return {
        ...state,
        recording: true,
      };
    },
    stop_recording(state, action) {
      return {
        ...state,
        recording: false,
      };
    },
    add_location(state, action) {
      return {
        ...state,
        locations: [...state.locations, action.payload],
      };
    },
    change_name(state, action) {
      return {
        ...state,
        name: action.payload,
      };
    },
    reset_data(state, action) {
      return {
        locations: [],
        recording: false,
        name: "",
      };
    },
  },
});

export const {
  add_current_location,
  start_recording,
  add_location,
  stop_recording,
  change_name,
  reset_data,
} = locationSlice.actions;

export default locationSlice.reducer;
