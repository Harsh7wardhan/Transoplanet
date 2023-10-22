import React from 'react';

function SearchResults({ productName, price, imageUrl }) {
  return (
    <div>
      <h2>{productName}</h2>
      <p>The price is: {price}</p>
      <img src={imageUrl} alt="Product" />
    </div>
  );
}

export default SearchResults;
