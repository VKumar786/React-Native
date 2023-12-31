import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authToken: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addToken(state, action) {
      return {
        authToken: action.payload.token,
      };
    },
    removeToken(state, action) {
      return {
        authToken: "",
      };
    },
  },
});

export const { addToken, removeToken } = authSlice.actions;
export default authSlice.reducer;
