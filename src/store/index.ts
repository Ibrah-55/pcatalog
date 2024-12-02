// src/store.ts
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slice/pSlice";
import searchReducer from "../slice/sSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
