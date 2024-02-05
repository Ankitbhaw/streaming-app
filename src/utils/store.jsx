import { configureStore } from "@reduxjs/toolkit";
import sideBarSlice from "./sideBarSlice";
import searchSlice from "./searchSlice";
import loginSlice from "./loginSlice";

const store = configureStore({
  reducer: {
    sideBar: sideBarSlice,
    search_videos: searchSlice,
    login: loginSlice,
  },
});

export default store;
