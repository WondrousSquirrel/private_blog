import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(state => state.user);
  return (
    isAuthenticated ? <Route {...rest} render={
      props => <Component {...rest} {...props} />
    } /> : <Redirect to='/'/> 
  );
};

export default ProtectedRoute;