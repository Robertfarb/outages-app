import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import errorsReducer from './errors_reducer';
import outageReducer from './outage_reducer';

export default combineReducers({
  auth: authReducer,
  errors: errorsReducer,
  outages: outageReducer
});