import * as APIUtilSession from '../util/session_util';
import {receiveErrors} from './error_actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_BUNDLE_USER = 'RECEIVE_BUNDLE_USER';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveBundleUser = (payload) => ({
  type: RECEIVE_BUNDLE_USER,
  currentUser: payload.user,
  schedules: payload.schedules
});

export const googleUser = () => dispatch => APIUtilSession.googleUser()
  .then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );

export const createUser = (user) => dispatch => APIUtilSession.createUser(user)
  .then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );

export const bundleUser = (payload) => dispatch => APIUtilSession.bundleUser(payload)
  .then(
    payload => dispatch(receiveBundleUser(payload)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );

export const createSession = (user) => dispatch => APIUtilSession.createSession(user)
  .then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );

export const logout = () => dispatch => APIUtilSession.deleteSession()
  .then(
    user => dispatch(receiveCurrentUser(null)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
