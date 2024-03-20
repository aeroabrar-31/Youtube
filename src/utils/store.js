import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import videoSlice from "./videoSlice";
import ChatSlice from "./ChatSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    video: videoSlice,
    chat: ChatSlice,
  },
});

export default store;
