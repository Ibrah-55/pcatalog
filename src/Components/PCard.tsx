import React from "react";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  rating: number;
}

const ProductCard: React.FC<ProductCardProps> = React.memo(
  ({ name, price, image, rating }) => {
    console.log("Rendering:", name); // This helps to track if the component is re-rendering unnecessarily

    return (
      <div className="border p-4 rounded-lg">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <h3 className="text-lg font-semibold mt-2">{name}</h3>
        <p className="text-sm text-gray-500">{`$${price}`}</p>
        <p className="text-sm text-yellow-500">{`${rating} ⭐`}</p>
      </div>
    );
  },
);

export default ProductCard;
