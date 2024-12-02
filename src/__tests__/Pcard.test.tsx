// src/__tests__/ProductCard.test.tsx
import { render, screen } from "@testing-library/react";
import ProductCard from "../Components/PCard";

test("renders product card with correct props", () => {
  const product = {
    id: 1,
    title: "Laptop",
    price: 999,
    image: "laptop.jpg",
    rating: { rate: 4.5 },
  };

  render(<ProductCard {...product} />);

  // Check if the product title is rendered
  expect(screen.getByText(/Laptop/i)).toBeInTheDocument();

  // Check if the product price is rendered
  expect(screen.getByText(/\$999/i)).toBeInTheDocument();

  // Check if the product image is rendered
  const image = screen.getByAltText(/laptop/i);
  expect(image).toHaveAttribute("src", "laptop.jpg");

  // Check if the rating is rendered
  expect(screen.getByText(/4.5/)).toBeInTheDocument();
});
