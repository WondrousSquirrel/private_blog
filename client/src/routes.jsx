import React from 'react';
import { Route } from 'react-router';

const Home = () => <h1>Home</h1>;

const createRoutes = () => (
  <Route exact path='/' component={Home}/>
);

const routes = createRoutes();

export default routes;