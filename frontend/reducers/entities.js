import { combineReducers } from 'redux';
import packagesReducer from './packages';
import propertyReducer from './property';
import scheduleReducer from './schedule';
import serviceReducer from './service';
import paymentReducer from './payment';
import complainReducer from './complain';


const entitiesReducer = combineReducers({
  property: propertyReducer,
  packages: packagesReducer,
  schedules: scheduleReducer,
  services: serviceReducer,
  payment: paymentReducer,
  complains: complainReducer
});

export default entitiesReducer;
