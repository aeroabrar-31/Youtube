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
  },
});

export const { toggle } = appSlice.actions;

export default appSlice.reducer;
