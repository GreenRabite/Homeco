import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import SessionFormContainer from './session/session_form_container';
<<<<<<< HEAD
import ContractorNavBar from './contractor/contractor_nav';
=======
import HomeContainer from './home/home_container';
import PackageContainer from './package/package_container';
>>>>>>> a51e923660899ba76f497f28b813d4211b30eb44

const App = () => (
  <div className='main'>
    <Switch>
      <Route exact path='/' component={HomeContainer} />
      <Route exact path='/packages' component={PackageContainer} />
      <AuthRoute path='/signup' component={SessionFormContainer} />
      <AuthRoute path='/login' component={SessionFormContainer} />
      <Route path='/contractor/main' component={ContractorNavBar}></Route>
    </Switch>
  </div>
);

export default App;
// <Route component={NotFound} />
