import { combineReducers } from 'redux';

import appReducer from './app/reducer';
import counterReducer from './counter/reducer';

export default combineReducers({
  app: appReducer,
  counter: counterReducer
});
