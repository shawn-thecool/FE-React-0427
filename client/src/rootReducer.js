import { combineReducers } from 'redux';

import appReducer from './appReducer';
import todoReducer from './_todo/reducer';

export default combineReducers({
  app: appReducer,
  todo: todoReducer
});
