import * as APIUtilSchedule from '../util/schedule_utils';
import {receiveErrors} from './error_actions';


export const RECEIVE_SCHEDULE = 'RECEIVE_SCHEDULE';

export const receiveSchedule = (schedule) => ({
  type: RECEIVE_SCHEDULE,
  schedule
});

export const createSchedule = (payload) => (dispatch) => (
  APIUtilSchedule.createSchedule(payload).then(
    (newSchedule)=> (dispatch(receiveSchedule(newSchedule)))),
    (errors) => (dispatch(receiveErrors(errors.responseJSON)))
);
