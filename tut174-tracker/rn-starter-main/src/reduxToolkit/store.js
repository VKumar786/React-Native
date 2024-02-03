import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./AuthSlice";
import locationSlice from "./LocationSlice";
import trackSlice from "./TrackSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    location: locationSlice,
    tracks: trackSlice,
  },
});

export default store;
