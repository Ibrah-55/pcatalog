import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../slice/pSlice";
import ProductCard from "../Components/PCard";
import { Input } from "antd"; // Import Ant Design Input

const { Search } = Input;

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.products.items);
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredProducts = products.filter((product: any) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <>
      {/* Ant Design Search Component */}
      <Search
        placeholder="Search products..."
        allowClear
        enterButton="Search"
        size="large"
        onSearch={handleSearch}
        className="border p-2 mb-4"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
        {filteredProducts.map((product: any) => (
          <ProductCard
            key={product.id}
            name={product.title}
            price={product.price}
            image={product.image}
            rating={product.rating.rate}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
