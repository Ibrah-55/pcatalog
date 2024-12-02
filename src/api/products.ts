import { Product } from "../types/Product";

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data: Product[] = await response.json();
  return data;
};
