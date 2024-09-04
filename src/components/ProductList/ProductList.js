// ProductList.js

import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductListStyles.css'
import { camiseta, pantalon, zapatos, sombrero, bufanda } from '../images/imageImports';

const products = [
  {
    id: 1,
    name: 'Camiseta',
    price: 20.999,
    image: camiseta
  },
  {
    id: 2,
    name: 'Pantalón',
    price: 34.999,
    image: pantalon
  },
  {
    id: 3,
    name: 'Zapatos',
    price: 59.999,
    image: zapatos
  },
  {
    id: 4,
    name: 'Sombrero',
    price: 15.999,
    image: sombrero
  },
  {
    id: 5,
    name: 'Bufanda',
    price: 12.499,
    image: bufanda
  }
  // ...otros productos
];

function ProductList() {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
