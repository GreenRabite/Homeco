import {RECEIVE_COMPLAINS, RECEIVE_COMPLAIN} from '../actions/complain_actions';

const complainReducer = (state={}, action)=>{
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_COMPLAIN:
      return Object.assign({}, action.complains);

    case RECEIVE_COMPLAINS:
      newState[action.complain._id] = action.complain;
      return Object.assign({}, state, newState);

    default:
      return state;
  }
};

export default complainReducer;
