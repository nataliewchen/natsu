import React, { useState, useEffect } from "react";
import commerce from "../lib/commerce";
import PropTypes from "prop-types";
import { useNavigate, useLocation } from "react-router-dom";

import ProductItem from "./ProductItem.tsx";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await commerce.products.list();
      setProducts(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="products-list">
      <div className="header">
        <h1>Products</h1>
      </div>
      <div className="items-wrapper">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
