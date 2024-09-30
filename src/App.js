import React, { useState } from 'react';
import ProductList from './components/ProductList';
import FilterButtons from './components/FilterButtons';
import { products } from './utils';
const App = () => {
    const [filter, setFilter] = useState("All");
    const filteredProducts =
        filter === "All" ? products : products.filter(product => product.category === filter);
    return (
        <div className="app-container">
            <header>
                <h1>Product List</h1>
            </header>
            <FilterButtons setFilter={setFilter} />
            <ProductList products={filteredProducts} />
        </div>
    );
};

export default App;
