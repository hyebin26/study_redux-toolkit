import { createSlice } from "@reduxjs/toolkit";

export const titleSlice = createSlice({
  name: "title",
  initialState: {
    title: null,
  },
  reducers: {
    inputTitle: (state, action) => {
      state.title = action.payload;
    },
  },
});

export const { inputTitle } = titleSlice.actions;

export default titleSlice.reducer;
