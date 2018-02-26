import * as APIUtilComplain from '../util/complain_util';
import {receiveErrors} from './error_actions';


export const RECEIVE_COMPLAINS = 'RECEIVE_COMPLAINS';
export const RECEIVE_COMPLAIN = 'RECEIVE_COMPLAIN';

export const receiveComplain = (complain) => ({
  type: RECEIVE_COMPLAIN,
  complain: complain
});

export const receiveComplains = (complains) => ({
  type: RECEIVE_COMPLAINs,
  complain: complains
});

export const fetchComplains = userId => dispatch => APIUtilComplain.fetchComplains(userId)
  .then(
    complains => dispatch(receiveComplains(complains)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );

export const createComplain = complain => dispatch => APIUtilComplain.createComplain(complain)
  .then(
    complain => dispatch(receiveComplain(complain)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
