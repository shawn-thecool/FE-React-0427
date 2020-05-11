import { combineReducers } from 'redux';

import asideReducer from './components/system/aside/_reducer';

export default combineReducers({
  aside: asideReducer
});
