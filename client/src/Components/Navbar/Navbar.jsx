import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavbarComponent = () => {
  return (
    <>
      <Navbar className='navbar'>
        <Navbar.Brand href="#home">Brand link</Navbar.Brand>
        <Nav>
          <Nav.Link href="#login">Вход</Nav.Link>
          <Nav.Link href="#register">Регистрация</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default NavbarComponent;