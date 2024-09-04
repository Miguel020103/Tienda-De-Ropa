// CollectionBySeason.js

import React from 'react';
import './collection-by-season.css'; // Importa el archivo CSS
import { frio, calido } from '../images/imageImports';

function CollectionBySeason() {
  const collections = [
    {
      id: 1,
      season: 'Primavera/Verano',
      image: calido,
    },
    {
      id: 2,
      season: 'Otoño/Invierno',
      image: frio,
    },
    // Agrega más objetos de colecciones aquí
  ];

  return (
    <section className="collection-by-season">
        <div className="collection-list">
        {collections.map(collection => (
          <div className="collection-card" key={collection.id}>
            <img src={collection.image} alt={collection.season} />
            <h3>{collection.season}</h3>
            <button>Abrir Coleccion</button>
          </div>
        ))}
      </div>
      <h2>Colecciones por Época</h2>
    </section>
  );
}

export default CollectionBySeason;
