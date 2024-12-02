import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../slice/pSlice";
import ProductCard from "../Components/PCard";
import { Input, Select, Pagination } from "antd";
import { setSearchTerm } from "../slice/sSlice";
import { AppDispatch } from "../store/index";

const { Search } = Input;
const { Option } = Select;
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: { rate: number };
}

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: any) => state.products.items);
  const searchTerm = useSelector((state: any) => state.search.term);

  const [sortOption, setSortOption] = useState("priceAsc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Set number of items per page

  // Memoize the filtered and sorted product list
  const filteredProducts = useMemo(() => {
    let filtered = products.filter((product: Product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    // Sorting
    if (sortOption === "priceAsc") {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === "priceDesc") {
      filtered = filtered.sort((a, b) => b.price - a.price);
    } else if (sortOption === "ratingAsc") {
      filtered = filtered.sort((a, b) => a.rating.rate - b.rating.rate);
    } else if (sortOption === "ratingDesc") {
      filtered = filtered.sort((a, b) => b.rating.rate - a.rating.rate);
    }

    return filtered;
  }, [products, searchTerm, sortOption]);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredProducts.slice(start, end);
  }, [filteredProducts, currentPage]);

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const handleSortChange = (value: string) => {
    setSortOption(value);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className=" dark:bg-gray-900 dark:text-white">
      <Search
        placeholder="Search products..."
        allowClear
        size="large"
        enterButton="Search Product"
        onChange={handleSearch}
        className="mb-4"
      />

      {/* Sorting Dropdown */}
      <Select
        defaultValue="priceAsc"
        onChange={handleSortChange}
        className="mb-4"
      >
        <Option value="priceAsc">Price: Low to High</Option>
        <Option value="priceDesc">Price: High to Low</Option>
        <Option value="ratingAsc">Rating: Low to High</Option>
        <Option value="ratingDesc">Rating: High to Low</Option>
      </Select>

      {/* Display the filtered and sorted products */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
        {paginatedProducts.map((product: any) => (
          <ProductCard
            key={product.id}
            name={product.title}
            price={product.price}
            image={product.image}
            rating={product.rating.rate}
          />
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        current={currentPage}
        total={filteredProducts.length}
        pageSize={itemsPerPage}
        onChange={handlePageChange}
        className="mt-4"
      />
    </div>
  );
};

export default Home;
