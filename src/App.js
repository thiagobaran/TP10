import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Home from './paginas/Home';
import Info from './paginas/Info';
import Creaciones from './paginas/Creaciones';
import Favoritos from './paginas/Favoritos';
import { FavoriteProvider } from './context/FavoritosContext';

function App() {
  return (
    <FavoriteProvider>
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Mi Portafolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/info">Info</Nav.Link>
              <Nav.Link as={Link} to="/creaciones">Creaciones</Nav.Link>
              <Nav.Link as={Link} to="/favoritos">Favoritos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/creaciones" element={<Creaciones />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </Router>
    </FavoriteProvider>
  );
}

export default App;
