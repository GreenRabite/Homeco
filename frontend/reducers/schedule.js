import merge from 'lodash/merge';
import { RECEIVE_SCHEDULE, RECEIVE_SCHEDULES } from '../actions/schedule_actions';

const scheduleReducer = (state={}, action) => {
  let newState={};
  switch (action.type) {

    case RECEIVE_SCHEDULE:
      debugger;
      newState = merge({},state);
      newState[action.schedule._id] = action.schedule;
      return newState;

    case RECEIVE_SCHEDULES:
      return merge({}, action.schedules);

    default:
      return state;
  }
};

export default scheduleReducer;
