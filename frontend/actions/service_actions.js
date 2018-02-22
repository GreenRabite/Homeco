import * as APIUtilService from '../util/service_utils';
import {receiveErrors} from './error_actions';


export const RECEIVE_SERVICE = 'RECEIVE_SERVICE';

export const receiveService = (service) => ({
  type: RECEIVE_SERVICE,
  service
});

// export const fetchService = (id) => dispatch => (
//
// )
