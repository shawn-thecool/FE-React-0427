import {
  INCREMENT,
  DECREMENT,
  INCREMENT_ASYNC,
  DECREMENT_ASYNC
} from './action.type';

// reducers
export const increase = () => ({
  type: INCREMENT
});
export const decrease = () => ({
  type: DECREMENT
});

// sagas
export const increaseAsync = () => ({
  type: INCREMENT_ASYNC
});
export const decreaseAsync = () => ({
  type: DECREMENT_ASYNC
});
