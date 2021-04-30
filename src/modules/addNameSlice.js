import { createSlice } from "@reduxjs/toolkit";

export const addNameSlice = createSlice({
  name: "title",
  initialState: null,
  reducers: {
    addName(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export const { addName } = addNameSlice.actions;

export default addNameSlice.reducer;
