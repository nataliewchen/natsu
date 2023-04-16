import React, { useState, useEffect } from "react";
import commerce from "../lib/commerce";
import { stripHtml } from "string-strip-html";
import PropTypes from "prop-types";

import "../App.css";

const ProductItem = ({ product }) => {
  const { result } = stripHtml(product.description);

  return (
    <div className="product-item">
      <img src={product.image?.url} width="200" />
      <h4>{product.name}</h4>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object,
};

export default ProductItem;
