import React, { Suspense, lazy} from 'react';
import { Route, Switch } from 'react-router';

import ProtectedRoute from './Components/protectedRoute';
import EditForm from './Components/Profile/EditProfile';

const Register = lazy(() => import('./Components/Auth/Register'));
const Login = lazy(() => import('./Components/Auth/Login'));
const Profile = lazy(() => import ('./Components/Profile/Profile'));

const Home = () => <h1>Home</h1>;

const createRoutes = () => <Switch>
  <Suspense fallback={<div>Загрузка...</div>}>
    <Route exact path='/' component={Home}/>
    <Route path='/register' component={Register}/>
    <Route path='/login' component={Login}/>
    <ProtectedRoute path='/profile' component={Profile} />
    <ProtectedRoute path='/edit' component={EditForm} />
  </Suspense>
</Switch>;

const routes = createRoutes();

export default routes;