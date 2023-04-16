import React, { useState, useEffect } from "react";
import commerce from "../lib/commerce";
import PropTypes from "prop-types";

import ProductItem from "./ProductItem";

import "../App.css";

const ProductsList = ({ products }) => {
  return (
    <div>
      products list
      <br />
      <br />
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

ProductsList.propTypes = {
  products: PropTypes.array,
};

export default ProductsList;
