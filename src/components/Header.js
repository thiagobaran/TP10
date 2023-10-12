import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/info">Info</Link></li>
          <li><Link to="/creations">Mis Creaciones</Link></li>
          <li><Link to="/favorites">Favoritos</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
