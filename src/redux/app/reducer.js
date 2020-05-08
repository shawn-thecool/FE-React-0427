import { combineReducers } from 'redux';

import { LOG_MSG } from './action.type';

const initial = {
  msg: 'Hello React -Redux -Saga'
};

const msgReducer = (state = initial.msg, action) => {
  switch (action.type) {
    case LOG_MSG:
      return { ...state, msg: action.msg };
    default:
      return state;
  }
};

export default combineReducers({
  msg: msgReducer
});
