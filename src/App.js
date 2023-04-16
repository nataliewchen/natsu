import React, { useState, useEffect } from "react";
import commerce from "./lib/commerce";

import ProductsList from "./components/ProductsList";

import "./App.css";

const App = () => {
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
    <div>
      this is my app <hr />
      <ProductsList products={products} />
    </div>
  );
};

export default App;
