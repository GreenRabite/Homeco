import {RECEIVE_PAYMENT} from '../actions/payment_actions';

const paymentReducer = (state={}, action)=>{
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case paymentReducer:
      return Object.assign({}, action.payment);
    default:
      return state;

  }
};

export default paymentReducer;
