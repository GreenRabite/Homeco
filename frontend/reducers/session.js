import {RECEIVE_CURRENT_USER, RECEIVE_BUNDLE_USER} from '../actions/session_actions';

const _nullSession = {currentUser: null};

const sessionReducer = (state=_nullSession, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {

    case RECEIVE_CURRENT_USER:
      newState = {currentUser: action.currentUser};
      return newState;

    case RECEIVE_BUNDLE_USER:
      newState = {currentUser: action.currentUser};
      return newState;

    default:
      return state;
  };
};

export default sessionReducer;
