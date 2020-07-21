import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { logout } from '../../actions/userActions';

const NavbarComponent = ({ logout, authUser}) => {
  const onClick = () => {
    logout();
  };

  return (
    <>
      <Navbar className='navbar'>
        <Navbar.Brand as={Link} to='/'>Brand Link</Navbar.Brand>
        <Nav>
          {authUser ? <>
            <Nav.Link as={Link} to='/profile'>Профиль</Nav.Link>
            <Nav.Link as={Link} onClick={onClick} to='/'>Выход</Nav.Link>  
          </>: <>
            <Nav.Link as={Link} to='/login'>Вход</Nav.Link>
            <Nav.Link as={Link} to='/register'>Регистрация</Nav.Link>
          </>}
        </Nav>
      </Navbar>
    </>
  );
};

const mapStateToProps = state => ({
  authUser: state.user
});

const mapDispatchToProps = dispatch => ({
  logout: () => {
    dispatch(logout());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarComponent);