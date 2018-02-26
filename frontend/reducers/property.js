import {RECEIVE_PROPERTY} from '../actions/property_actions';

const propertyReducer = (state={}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_PROPERTY:
      return Object.assign({}, state, action.property);
    default:
      return state;
  };
};

export default propertyReducer;
