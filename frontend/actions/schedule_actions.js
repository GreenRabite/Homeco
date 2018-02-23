import * as APIUtilSchedule from '../util/schedule_utils';
import {receiveErrors} from './error_actions';


export const RECEIVE_SCHEDULE = 'RECEIVE_SCHEDULE';
export const RECEIVE_SCHEDULES = 'RECEIVE_SCHEDULES';

export const receiveSchedule = (schedule) => ({
  type: RECEIVE_SCHEDULE,
  schedule
});

export const receiveSchedules = (schedules) => ({
  type: RECEIVE_SCHEDULES,
  schedules
});


export const fetchContractorSchedules = (category) => (dispatch) => (
  APIUtilSchedule.fetchContractorSchedules(category).then(
    (schedules)=> (dispatch(receiveSchedules(schedules)))),
    (errors) => (dispatch(receiveErrors(errors.responseJSON)))
);

export const fetchUserSchedules = userId => dispatch => (
  APIUtilSchedule.fetchUserSchedules(userId)
    .then(
      (schedules) => (dispatch(receiveSchedules(schedules)))),
      (errors) => (dispatch(receiveErrors(errors.responseJSON)))
);

export const createSchedule = (payload) => (dispatch) => (
  APIUtilSchedule.createSchedule(payload).then(
    (schedules)=> (dispatch(receiveSchedules(schedules)))),
    (errors) => (dispatch(receiveErrors(errors.responseJSON)))
);
