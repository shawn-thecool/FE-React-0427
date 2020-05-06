import { combineReducers } from 'redux';
import {
  INCREMENT_BY_AMOUNT,
  DECREMENT_BY_AMOUNT,
  INCREMENT_BY_AMOUNT_ASYNC,
  DECREMENT_BY_AMOUNT_ASYNC
} from './action';

/**
 * initial states
 */
const INITITIAL_COUNT = 0;

/**
 * count
 */
const count = (state = INITITIAL_COUNT, action) => {
  switch (action.type) {
    case INCREMENT_BY_AMOUNT:
      return state + action.amount;
    case DECREMENT_BY_AMOUNT:
      return state - action.amount;
    default:
      return state;
  }
};

/**
 * counter store model
 */
const counterModel = combineReducers({ count });

export default counterModel;
