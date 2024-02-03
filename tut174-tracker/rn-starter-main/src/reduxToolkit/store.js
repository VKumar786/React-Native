import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./AuthSlice";
import locationSlice from "./LocationSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    location: locationSlice,
  },
});

export default store;
