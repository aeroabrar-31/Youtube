import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isToggleOpen: false,
    theme: false,
  },
  reducers: {
    toggle: (state) => {
      state.isToggleOpen = !state.isToggleOpen;
    },
    closeSideBar: (state) => {
      state.isToggleOpen = true;
    },
    changeTheme: (state) => {
      state.theme = !state.theme;
    },
  },
});

export const { toggle, closeSideBar, changeTheme } = appSlice.actions;

export default appSlice.reducer;
