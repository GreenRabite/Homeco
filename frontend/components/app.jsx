import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import SessionFormContainer from './session/session_form_container';
import HomeContainer from './home/home_container';
import PackageContainer from './package/package_container';
import ContractorShowContainer from './contractor/contractor_show_container';

const App = () => (
  <div className='main'>
    <Switch>
      <Route exact path='/' component={HomeContainer} />
      <Route exact path='/packages' component={PackageContainer} />
      <AuthRoute path='/signup' component={SessionFormContainer} />
      <AuthRoute path='/login' component={SessionFormContainer} />
      <Route path='/contractor/main' component={ContractorShowContainer}></Route>
    </Switch>
  </div>
);

export default App;
// <Route component={NotFound} />
