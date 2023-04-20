import React, { useState, useEffect } from "react";
import commerce from "../lib/commerce";
import { stripHtml } from "string-strip-html";
import PropTypes from "prop-types";

const ProductItem = ({ product }) => {
  const { result } = stripHtml(product.description);

  return (
    <div className="product-item">
      <img className="image" src={product.image?.url} alt={product.name} />
      <h4 className="name">{product.name}</h4>
      <h5 className="price">${product.price.formatted}</h5>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object,
};

export default ProductItem;
