import { createSelector } from "reselect";
import { RootState } from "../store";
import { Product } from "../types/Product";

const selectProducts = (state: RootState): Product[] => state.products.items;
const selectSearchTerm = (state: RootState) => state.search.term;

export const selectFilteredProducts = createSelector(
  [selectProducts, selectSearchTerm],
  (products, searchTerm) => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  },
);
