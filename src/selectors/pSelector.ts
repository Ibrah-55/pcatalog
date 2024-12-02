import { createSelector } from "reselect";
import { RootState } from "../store";

// Basic selector to get the products and search term from the state
const selectProducts = (state: RootState) => state.products.items;
const selectSearchTerm = (state: RootState) => state.search.term;

// Memoized selector to filter products based on the search term
export const selectFilteredProducts = createSelector(
  [selectProducts, selectSearchTerm],
  (products, searchTerm) => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  },
);
