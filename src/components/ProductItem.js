// src/components/ProductItem.js
import React from 'react';

const ProductItem = ({ product }) => {
    return (
        <div className="pitem">
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
        </div>
    );
};

export default ProductItem;
