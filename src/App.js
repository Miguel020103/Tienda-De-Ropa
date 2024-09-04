import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import FeaturedProducts from './components/destacados/FeaturedProducts';
import Foot from './components/Footer/Foot';
import CollectionBySeason from './components/Colecciones/CollectionBySeason';

function App() {
  return (
    <div className="App">
      <Header />
      <ProductList />
      <FeaturedProducts/>
      <CollectionBySeason/>
      <Foot/>
    </div>
  );
}

export default App;
