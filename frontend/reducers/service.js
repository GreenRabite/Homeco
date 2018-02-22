import merge from 'lodash/merge';
import { RECEIVE_SERVICE, RECEIVE_SERVICES } from '../actions/service_actions';

const serviceReducer = (state={}, action) => {
  let newState={};
  switch (action.type) {

    case RECEIVE_SERVICE:
      newState = merge({},state);
      newState[action.service._id] = action.service;
      return newState;

    case RECEIVE_SERVICES:
      return action.services;

    default:
      return state;
  }
};

export default serviceReducer;
