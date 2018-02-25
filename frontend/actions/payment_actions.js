import * as APIUtilPayment from '../util/payment_util';
import {receiveErrors} from './error_actions';


export const RECEIVE_PAYMENT = 'RECEIVE_PAYMENT';

export const fetchPayment = userId => dispatch => APIUtilPayment.fetchPayment(userId)
  .then(
    paymet => dispatch(receivePayment(payment)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
