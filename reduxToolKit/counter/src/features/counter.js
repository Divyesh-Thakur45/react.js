import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.counter += 1;
    },
    descrement: (state, action) => {
      state.counter -= 1;
    },
  },
});

export const { increment, descrement } = counterSlice.actions;

export default counterSlice.reducer;