// src/slice/pSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../api/products";
import { Product } from "../types/Product"; // Import the Product type

// Define the type for the slice state
interface ProductState {
  items: Product[];
  loading: boolean;
}

// Create async thunk for loading products
export const loadProducts = createAsyncThunk<Product[]>(
  "products/load",
  fetchProducts,
);

const initialState: ProductState = {
  items: [],
  loading: false,
};

const pSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(loadProducts.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default pSlice.reducer;
