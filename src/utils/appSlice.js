import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isToggleOpen: false,
  },
  reducers: {
    toggle: (state) => {
      state.isToggleOpen = !state.isToggleOpen;
    },
    closeSideBar: (state) => {
      state.isToggleOpen = true;
    },
  },
});

export const { toggle, closeSideBar } = appSlice.actions;

export default appSlice.reducer;
