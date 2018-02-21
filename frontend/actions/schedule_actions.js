import * as APIUtilSchedule from '../util/schedule_util';
import {receiveErrors} from './error_actions';


export const RECEIVE_SCHEDULE = 'RECEIVE_SCHEDULE';

export const receiveSchedule = (payload) => ({
  type: RECEIVE_SCHEDULE,
  property: payload.property,
  packages: payload.packages
});
