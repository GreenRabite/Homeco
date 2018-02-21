import {connect} from 'react-redux';
import {googleUser, createUser, createSession, logout} from '../../actions/session_actions';
import {clearErrors} from '../../actions/error_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  let formType = ownProps.match.path === '/signup' ? 'signup' : 'login';
  return ({
    formType,
    pac: state.entities.packages.pac,
    errors: state.errors,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    googleUser: () =>  dispatch(googleUser()),
    createUser: (user) => dispatch(createUser(user)),
    createSession: (user) => dispatch(createSession(user)),
    logout: () => dispatch(logout()),
    clearErrors: () => dispatch(clearErrors())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
