import React from 'react';
import { useSelector } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  const authUser = useSelector(state => state.user);
  return (
    <>
      <Navbar className='navbar'>
        <Navbar.Brand as={Link} to='/'>Brand Link</Navbar.Brand>
        <Nav>
          {authUser ?
            <Nav.Link as={Link} to='/profile'>Профиль</Nav.Link> : <>
              <Nav.Link as={Link} to='/login'>Вход</Nav.Link>
              <Nav.Link as={Link} to='/register'>Регистрация</Nav.Link>
            </>}
        </Nav>
      </Navbar>
    </>
  );
};

export default NavbarComponent;