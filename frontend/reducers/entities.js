import { combineReducers } from 'redux';
import packagesReducer from './packages';
import propertyReducer from './property';

const entitiesReducer = combineReducers({
  property: propertyReducer,
  packages: packagesReducer
});

export default entitiesReducer;
