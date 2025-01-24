import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../Services/product";
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from "../features/AuthSlice";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    Auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

setupListeners(store.dispatch);
