/**
 * action types
 */
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREMENT_BY_AMOUNT = 'INCREMENT_BY_AMOUNT';
/**
 * other constants
 */

/**
 * action creators
 */
export const increaseCount = () => ({
  tpye: INCREMENT
});
export const decreaseCount = () => ({
  type: DECREMENT
});
export const increaseByAmount = (amount) => ({
  type: INCREMENT_BY_AMOUNT,
  payload: {
    amount
  }
});
