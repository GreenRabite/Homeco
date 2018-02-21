import { combineReducers } from 'redux';
import packagesReducer from './packages';
import propertyReducer from './property';
import scheduleReducer from './schdule';

const entitiesReducer = combineReducers({
  property: propertyReducer,
  packages: packagesReducer,
  schedules: scheduleReducer
});

export default entitiesReducer;
