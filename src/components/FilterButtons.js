// src/components/FilterButtons.js
import React from 'react';

const FilterButtons = ({ setFilter }) => {
    return (
        <div className="filter">
            <button onClick={() => setFilter('All')}>All</button>
            <button onClick={() => setFilter('electronics')}>Electronics</button>
            <button onClick={() => setFilter('cloth')}>Cloth</button>
            <button onClick={() => setFilter('accessories')}>Accessories</button>

        </div>
    );
};

export default FilterButtons;
