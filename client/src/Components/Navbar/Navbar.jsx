import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <>
      <Navbar className='navbar'>
        <Navbar.Brand as={Link} to='/'>Brand Link</Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to='/login'>Вход</Nav.Link>
          <Nav.Link as={Link} to='/register'>Регистрация</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default NavbarComponent;