import React from 'react';

interface ProductProps {
  name: string;
  price: number;
  image: string;
  rating: number;
}

const ProductCard: React.FC<ProductProps> = ({ name, price, image, rating }) => (
  <div className="p-4 bg-white rounded-lg shadow-md">
    <img src={image} alt={name} className="w-full h-48 object-cover" />
    <h2 className="text-lg font-bold">{name}</h2>
    <p className="text-gray-700">${price}</p>
    <div>{'⭐'.repeat(Math.round(rating))}</div>
  </div>
);

export default ProductCard;
