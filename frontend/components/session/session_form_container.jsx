import {connect} from 'react-redux';
import {googleUser, createUser, createSession, logout} from '../../actions/session_actions';
import {CLEAR_ERRORS} from '../../actions/error_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  let formType = ownProps.match.path === '/signup' ? 'signup' : 'login';
  return ({
    formType,
    errors: state.errors
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

export default connect(mapStateToProps, mapDispatchToProps)(SessionFrom);
