// src/slice/searchSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
  term: string;
}

const initialState: SearchState = {
  term: "",
};

const sSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload;
    },
  },
});

export const { setSearchTerm } = sSlice.actions;
export default sSlice.reducer;
