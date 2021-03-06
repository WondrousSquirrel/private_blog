import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AiFillHome } from 'react-icons/ai';

import { logout } from '../../actions/userActions';

const NavbarComponent = ({ logout, authUser}) => {
  const onClick = () => {
    logout();
  };

  return (
    <>
      <Navbar className='navbar'>
        <Nav.Link as={Link} to='/'><AiFillHome /></Nav.Link>
        <Nav>
          {/* eslint-disable-next-line */}
          {authUser.hasOwnProperty('id') ? <>
            <Nav.Link as={Link} to='/profile'>Профиль</Nav.Link>
            <Nav.Link as={Link} onClick={onClick} to='/'>Выход</Nav.Link>  
          </>: <>
            <Nav.Link as={Link} className='navLink' to='/login'>Вход</Nav.Link>
            <Nav.Link as={Link} className='navLink' to='/register'>Регистрация</Nav.Link>
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

NavbarComponent.propTypes = {
  authUser: PropTypes.object.isRequired,
  logout: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarComponent);