import merge from 'lodash/merge';
<<<<<<< HEAD
import { RECEIVE_SCHEDULE, RECEIVE_SCHEDULES, RECEIVE_ONE_SCHEDULE } from '../actions/schedule_actions';
=======
import { RECEIVE_SCHEDULE, RECEIVE_SCHEDULES } from '../actions/schedule_actions';
import {RECEIVE_BUNDLE_USER} from '../actions/session_actions';
>>>>>>> 3f3d21b7da880ac84cb43578d7673057b3160978

const scheduleReducer = (state={}, action) => {
  let newState={};
  switch (action.type) {

    case RECEIVE_SCHEDULE:
      newState = merge({},state);
      newState[action.schedule._id] = action.schedule;
      return newState;

    case RECEIVE_ONE_SCHEDULE:
      newState = merge({},state);
      for(let id in newState ){
        if (newState[id]._id === action.schedule._id) {
           newState[id] = action.schedule;
        }
      }
      return newState;

    case RECEIVE_SCHEDULES:
      return merge({}, action.schedules);

    case RECEIVE_BUNDLE_USER:
      return merge({}, action.schedules);

    default:
      return state;
  }
};

export default scheduleReducer;
