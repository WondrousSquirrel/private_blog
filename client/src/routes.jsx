import React, { Suspense, lazy} from 'react';
import { Route, Switch } from 'react-router';


const Register = lazy(() => import('./Components/Register/Register'));

const Home = () => <h1>Home</h1>;

const createRoutes = () => <Switch>
  <Suspense fallback={<div>Загрузка...</div>}>
    <Route exact path='/' component={Home}/>
    <Route path='/register' component={Register}/>
  </Suspense>
</Switch>;

const routes = createRoutes();

export default routes;