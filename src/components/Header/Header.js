// Header.js

import React from 'react';
import './HeaderStyles.css'; // Importa el archivo CSS
import { logo } from '../images/imageImports';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo de la Tienda" className="logo" />
      <div className="header-right">
      
      <h1>MigStyleLyfe</h1>
      </div>
      <div className="header-left">
        <button className="left-button">Acerca de</button>
        <button className="left-button">Ofertas</button>
        <button className="left-button">Estilos</button>
        <button className="left-button">Contactos</button>
      </div>
      <div className='header-inicio'>
          <button className="inicio-button">Iniciar Sesión</button>
          <button className="inicio-button">Registrarse</button>
      </div>
    </header>
  );
}

export default Header;
