import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    video: null,
    channel: null,
  },
  reducers: {
    addVideo: (state, action) => {
      state.video = action.payload;
    },
    addChannel: (state, action) => {
      state.channel = action.payload;
    },
  },
});

export const { addVideo, addChannel } = videoSlice.actions;

export default videoSlice.reducer;
