import * as APIUtilPackage from '../util/package_util';
import {receiveErrors} from './error_actions';

export const RECEIVE_PACKAGE = 'RECEIVE_PACKAGE';
export const receivePackage = (pac) => ({
  type: RECEIVE_PROPERTY,
  package: pac
});


export const createPackage = (payload) => dispatch => APIUtilPackage.createPackage(payload)
  .then(
    pac => dispatch(receivePackage(pac)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
