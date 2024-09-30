import React from 'react';
import ProductItem from './ProductItem';
const ProductList = ({ products }) => {
    return (
        <section className="plist">
            {products.length > 0
                ?
                (products.map((product, index) => (
                    <ProductItem key={index} product={product} />
                )))
                :
                (<p>no products in this catigory</p>
            )}
        </section>
    );
};
export default ProductList;