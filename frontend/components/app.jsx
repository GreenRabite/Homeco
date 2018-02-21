import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import SessionFormContainer from './session/session_form_container';
import ContractorNavBar from './contractor/contractor_nav';

const App = () => (
  <div className='main'>
    <Switch>
      <AuthRoute path='/signup' component={SessionFormContainer} />
      <AuthRoute path='/login' component={SessionFormContainer} />
      <Route path='/contractor/main' component={ContractorNavBar}></Route>
    </Switch>
  </div>
);

export default App;
// <Route component={NotFound} />
