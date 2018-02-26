import * as APIUtilPayment from '../util/payment_util';
import {receiveErrors} from './error_actions';


export const RECEIVE_PAYMENT = 'RECEIVE_PAYMENT';

export const receivePayment = (payment) => ({
  type: RECEIVE_PAYMENT,
  payment: payment
});

export const fetchPayment = userId => dispatch => APIUtilPayment.fetchPayment(userId)
  .then(
    payment => dispatch(receivePayment(payment)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );

export const createPayment = payment => dispatch => APIUtilPayment.createPayment(payment)
  .then(
    payment => dispatch(receivePayment(payment)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
