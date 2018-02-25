import * as APIUtilPackage from '../util/package_util';
import {receiveErrors} from './error_actions';

export const RECEIVE_PACKAGE = 'RECEIVE_PACKAGE';
export const CLEAR_PACKAGE = 'CLEAR_PACKAGE'

export const receivePackage = (pac) => ({
  type: RECEIVE_PACKAGE,
  pac: pac
});

export const clearPackage = () => ({
  type: CLEAR_PACKAGE
});


export const createPackage = (payload) => dispatch => APIUtilPackage.createPackage(payload)
  .then(
    pac => dispatch(receivePackage(pac)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );

export const fetchUserPackage = (userId) => dispatch => APIUtilPackage.fetchUserPackage(userId)
  .then(
    pac => dispatch(receivePackage(pac)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
