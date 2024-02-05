/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: false,
  reducers: {
    logIn: (state) => true,
    logOut: (state) => false,
  },
});
// eslint-disable-next-line no-unused-vars
export const {logIn,logOut} = loginSlice.actions;
export default loginSlice.reducer;
