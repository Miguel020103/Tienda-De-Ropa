// FeaturedProducts.js

import React from 'react';
import './FeaturedProductsStyles.css'; // Importa el archivo CSS
import { camisa, jeans, vestido } from '../images/imageImports';

function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: 'Camisa estampada',
      price: 29.999,
      image: camisa,
    },
    {
      id: 2,
      name: 'Jeans ajustados',
      price: 49.999,
      image: jeans,
    },
    {
      id: 3,
      name: 'Vestido floral',
      price: 39.999,
      image: vestido,
    },
  ];

  return (
    <section className="featured-products">
      <h1>Productos Destacados</h1>
      <div className="product-featured-list">
        {products.map(product => (
          <div className="product-featured-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(3)}</p>
            <button>Ver Prenda</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
