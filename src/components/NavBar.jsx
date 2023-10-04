import React from 'react';
import CartWidget from './CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
  const categorias = ['Inicio', 'Acerca de'];
  const subCategorias = ['Hombre', 'Mujer', 'Unisex'];

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">StyleGG</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {categorias.map((categoria, index) => (
              <Nav.Link key={index} href={`#${categoria}`}>{categoria}</Nav.Link>
            ))}
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              {subCategorias.map((subCategoria, index) => (
                <NavDropdown.Item key={index} href={`#${subCategoria}`}>{subCategoria}</NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
