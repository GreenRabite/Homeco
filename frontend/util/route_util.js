import React from 'react';
import {connect} from 'react-redux';
import {withRouter, Route, Redirect} from 'react-router-dom';

const Auth = ({component: Component, path, loggedIn, currentUser, exact}) => (
  <Route path={path} exact={exact} render={(props) => (
      loggedIn ?
        <div>
          {currentUser.customerType == 'consumer' ? (
            <Redirect to='/user' />
          ):(
            <Redirect to='/contractor/main' />
          )}
        </div>
         : (
        <Component {...props} />
      )
    )}
  />
);

const Protected = ({component: Component, path, loggedIn, exact}) => (
  <Route path = {path} exact={exact} render={(props) => (
      loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to='/login' />
      )
    )}
  />
);

const Refresh = ({ path = '/' }) => (
    <Route
        path={path}
        component={({ history, location, match }) => {
            history.replace({
              pathname: location.pathname.substring(match.path.length),
            });
            return null;
        }}
    />
);
// ...location,


const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  loggedIn: Boolean(state.session.currentUser)
});

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));

export const RefreshRoute = withRouter(connect(mapStateToProps, null)(Refresh));
