// ProductCard.js

import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(3)}</p>
      <button>Agregar al carrito</button>
    </div>
  );
}

export default ProductCard;
