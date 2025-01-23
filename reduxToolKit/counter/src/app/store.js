import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter.js";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
