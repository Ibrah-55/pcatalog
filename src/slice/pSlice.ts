import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../api/products";

export const loadProducts = createAsyncThunk("products/load", fetchProducts);

const pSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      });
  },
});

export default pSlice.reducer;
