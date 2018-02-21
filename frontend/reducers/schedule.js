import merge from 'lodash/merge';
import { RECEIVE_SCHEDULE } from '../actions/schedule_actions';

const scheduleReducer = (state={}, action) => {
  let newState={};
  switch (action.type) {
    case RECEIVE_SCHEDULE:
      newState = merge({},state);
      newState[action.schedule.id] = action.schedule;
      return newState;
    default:
      return state;
  }
};

export default scheduleReducer;
