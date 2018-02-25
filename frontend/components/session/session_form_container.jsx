import {connect} from 'react-redux';
import {googleUser, createUser, createSession, logout, bundleUser} from '../../actions/session_actions';
import {clearErrors} from '../../actions/error_actions';
import SessionForm from './session_form';
import {createSchedule} from '../../actions/schedule_actions';
import {withRouter} from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
  let formType = ownProps.match.path === '/signup' ? 'signup' : 'login';
  return ({
    formType,
    errors: state.errors,
    currentUser: state.session.currentUser,
    pac: state.entities.packages.pac
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    googleUser: () =>  dispatch(googleUser()),
    createUser: (user) => dispatch(createUser(user)),
    createSession: (user) => dispatch(createSession(user)),
    logout: () => dispatch(logout()),
    clearErrors: () => dispatch(clearErrors()),
    bundleUser: (payload) => dispatch(bundleUser(payload))
  });
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SessionForm)
)
