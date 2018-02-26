import {RECEIVE_COMPLAINS, RECEIVE_COMPLAIN} from '../actions/complain_actions';

const complainReducer = (state={}, action)=>{
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_COMPLAINS:
      return Object.assign({}, action.complains);

    case RECEIVE_COMPLAIN:
      newState = Object.assign({}, state)
      newState[action.complain._id] = action.complain;
      return newState;

    default:
      return state;
  }
};

export default complainReducer;
