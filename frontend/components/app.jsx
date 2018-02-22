import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import SessionFormContainer from './session/session_form_container';
import HomeContainer from './home/home_container';
import PackageContainer from './package/package_container';
import ContractorShowContainer from './contractor/contractor_show_container';
import UserContainer from './user/user_container';

const App = () => (
  <div className='main'>
    <Switch>
      <Route exact path='/' component={HomeContainer} />
      <Route exact path='/packages' component={PackageContainer} />
      <AuthRoute exact path='/signup' component={SessionFormContainer} />
      <AuthRoute exact path='/login' component={SessionFormContainer} />
      <Route exact path='/user' component={UserContainer} />
      <Route path='/contractor/main' component={ContractorShowContainer}></Route>
    </Switch>
  </div>
);

export default App;
// <Route component={NotFound} />
