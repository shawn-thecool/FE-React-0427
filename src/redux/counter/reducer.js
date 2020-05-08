import { combineReducers } from 'redux';

import { INCREMENT, DECREMENT } from './action.type';

const initial = {
  count: 0
};

const counterReducer = (count = initial.count, action) => {
  switch (action.type) {
    case INCREMENT:
      return count + 1;
    case DECREMENT:
      return count - 1;
    default:
      return count;
  }
};

export default combineReducers({
  count: counterReducer
});
