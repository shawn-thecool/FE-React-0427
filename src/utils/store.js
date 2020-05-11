import { createStore } from 'redux';

let store = null;
export const getStore = (reducer, enhancer) => {
  if (!store) {
    store = createStore(reducer, enhancer);
  }
  return store;
};

export const generateAction = name => ({
  REQUEST: name + '_REQUEST',
  SUCCESS: name + '_SUCCESS',
  FAILURE: name + '_FAILURE'
});
