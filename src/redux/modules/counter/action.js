/**
 * action types
 */
export const INCREMENT_BY_AMOUNT = 'INCREMENT_BY_AMOUNT';
export const DECREMENT_BY_AMOUNT = 'DECREMENT_BY_AMOUNT';
export const INCREMENT_BY_AMOUNT_ASYNC = 'INCREMENT_BY_AMOUNT_ASYNC';
export const DECREMENT_BY_AMOUNT_ASYNC = 'DECREMENT_BY_AMOUNT_ASYNC';


/**
 * other constants
 */

/**
 * action creators
 */
export const increaseByAmount = (amount) => ({
  type: INCREMENT_BY_AMOUNT,
  amount
});
export const decreaseByAmount = (amount) => ({
  type: DECREMENT_BY_AMOUNT,
  amount
});
export const increaseAsync = (amount, delay) => ({
  type: INCREMENT_BY_AMOUNT_ASYNC,
  amount,
  delay
});
export const decreaseAsnc = (amount, delay) => ({
  type: DECREMENT_BY_AMOUNT_ASYNC,
  amount,
  delay
});

