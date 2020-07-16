import React from 'react';
import { Navbar } from 'react-bootstrap';

const NavbarComponent = () => {
  return (
    <>
      <Navbar bg="dark">
        <Navbar.Brand href="#home">Brand link</Navbar.Brand>
      </Navbar>
    </>
  );
};

export default NavbarComponent;