import * as APIUtilSchedule from '../util/schedule_utils';
import {receiveErrors} from './error_actions';


export const RECEIVE_SCHEDULE = 'RECEIVE_SCHEDULE';
export const RECEIVE_ONE_SCHEDULE = 'RECEIVE_ONE_SCHEDULE';
export const RECEIVE_SCHEDULES = 'RECEIVE_SCHEDULES';

export const receiveSchedule = (schedule) => ({
  type: RECEIVE_SCHEDULE,
  schedule
});

export const receiveOneSchedule = (schedule) => ({
  type: RECEIVE_ONE_SCHEDULE,
  schedule
});

export const receiveSchedules = (schedules) => ({
  type: RECEIVE_SCHEDULES,
  schedules
});


export const fetchContractorSchedules = (category) => (dispatch) => {
  return APIUtilSchedule.fetchContractorSchedules(category).then(
    (schedules)=> (dispatch(receiveSchedules(schedules)))),
    (errors) => (dispatch(receiveErrors(errors.responseJSON)));
};

export const updateWorkSchedule = (schedule) => (dispatch) => {
  console.log(schedule);
  return APIUtilSchedule.updateWorkSchedule(schedule).then(
    (updatedSchedule)=> {
      console.log(updatedSchedule);
      return dispatch(receiveOneSchedule(updatedSchedule));}),
    (errors) => (dispatch(receiveErrors(errors.responseJSON)));
};

export const fetchUserSchedules = (userId, completed) => dispatch => (
  APIUtilSchedule.fetchUserSchedules(userId, completed)
    .then(
      (schedules) => (dispatch(receiveSchedules(schedules)))),
      (errors) => (dispatch(receiveErrors(errors.responseJSON)))
);

export const createSchedule = payload => dispatch => APIUtilSchedule.createSchedule(payload)
  .then(
    schedules => dispatch(receiveSchedules(schedules)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );

export const reschedule = (id, workDate) => dispatch => APIUtilSchedule.reschedule(id, workDate)
  .then(
    schedule => dispatch(receiveSchedule(schedule)),
    errors => dispatch(receiveErrors(errors))
  );

export const fetchFinishSchedules = (category) => (dispatch) => {
  return APIUtilSchedule.fetchFinishSchedules(category).then(
    (schedules)=> (dispatch(receiveSchedules(schedules)))),
    (errors) => (dispatch(receiveErrors(errors.responseJSON)));
};
