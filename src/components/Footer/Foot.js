// Footer.js

import React from 'react';
import './Footer.css'

function Foot() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h3>Información de Contacto</h3>
          <p>Dirección: Calle Principal #123</p>
          <p>Teléfono: (123) 456-7890</p>
          <p>Correo: info@tiendaderopa.com</p>
        </div>
        <div className="footer-form">
          <h3>Contáctanos</h3>
          <form>
            <input type="text" placeholder="Nombre" />
            <input type="email" placeholder="Correo Electrónico" />
            <textarea placeholder="Mensaje"></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
      <p>&copy; 2023 Tienda de Ropa. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Foot;