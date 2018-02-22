import * as APIUtilProperty from '../util/property_util';
import {receiveErrors} from './error_actions';


export const RECEIVE_PROPERTY = 'RECEIVE_PROPERTY';
export const receiveProperty = (payload) => ({
  type: RECEIVE_PROPERTY,
  property: payload.property,
  packages: payload.packages
});

export const propertyRequire = (address) => dispatch => APIUtilProperty.propertyRequire(address)
  .then(
    payload => dispatch(receiveProperty(payload)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );

export const fetchProperty = (userId) => dispatch => APIUtilProperty.fetchProperty(userId)
  .then(
    payload => dispatch(receiveProperty(payload)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
