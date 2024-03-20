import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    video: [],
    channel: null,
  },
  reducers: {
    addVideo: (state, action) => {
      state.video.push(action.payload);
    },
    addChannel: (state, action) => {
      state.channel = action.payload;
    },
  },
});

export const { addVideo, addChannel } = videoSlice.actions;

export default videoSlice.reducer;
