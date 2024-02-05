/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SEARCH_URL } from "./constants";


const searchSlice = createSlice({
  name: "search_videos",
  initialState: {
    videos: [],
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetch_videos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.videos = action.payload.items;
    });
  
  },
});

export const fetch_videos = createAsyncThunk("fetch_videos", async (search) => {
  const data = await fetch(SEARCH_URL + search);
  const json = await data.json();
  return json;
});

// eslint-disable-next-line no-unused-vars
export const { searchVideos } = searchSlice.actions;
export default searchSlice.reducer;
