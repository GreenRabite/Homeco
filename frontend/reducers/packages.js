import {RECEIVE_PROPERTY} from '../actions/property_actions';

const packagesReducer = (state={}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_PROPERTY:
      return Object.assign({}, state, action.packages)
    default:
      return state;
  };
};

export default packagesReducer;
