import { createSlice } from "@reduxjs/toolkit";

export const counterSlice2 = createSlice({
  name: "counter2",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmout: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmout } = counterSlice2.actions;

export default counterSlice2.reducer;
