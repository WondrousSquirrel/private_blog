import React, { Suspense, lazy} from 'react';
import { Route, Switch } from 'react-router';

const Register = lazy(() => import('./Components/Auth/Register'));
const Login = lazy(() => import('./Components/Auth/Login'));

const Home = () => <h1>Home</h1>;

const createRoutes = () => <Switch>
  <Suspense fallback={<div>Загрузка...</div>}>
    <Route exact path='/' component={Home}/>
    <Route path='/register' component={Register}/>
    <Route path='/login' component={Login}/>
  </Suspense>
</Switch>;

const routes = createRoutes();

export default routes;