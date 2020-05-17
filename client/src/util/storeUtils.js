import { useState, useEffect } from 'react';
import path from 'ramda/src/path';
import defaultTo from 'ramda/src/defaultTo';
import { createStore } from 'redux';
/**
 * initial states
 */
// prettier-ignore
export const createInitialState = (data = null, status = {}) => ({
  get data() {return data;},
  get status() {return status;},
  get isInitial() {return true;},
  get isLoading() {return false;},
  get hasSucceeded() {return false;},
  get hasFailed() {return false;}
});
// prettier-ignore
export const createLoadingState = (data, status = {}) => ({
  get data() {return data;},
  get status() {return status;},
  get isInitial() {return false;},
  get isLoading() {return true;},
  get hasSucceeded() {return false;},
  get hasFailed() {return false;}
});
// prettier-ignore
export const createSuccessState = (data, status = {}) => ({
  get data() {return data;},
  get status() {return status;},
  get isInitial() {return false;},
  get isLoading() {return false;},
  get hasSucceeded() {return true;},
  get hasFailed() {return false;}
});
// prettier-ignore
export const createFailureState = (error = {}, status = {}) => ({
  get data() {return error;},
  get status() {return status;},
  get isInitial() {return false;},
  get isLoading() {return false;},
  get hasSucceeded() {return false;},
  get hasFailed() {return true;}
});
/**
 * reducers
 */
// 초기화 리듀서
const clearReducer = initialValue => actionKey => (state, action) =>
  action.type === actionKey ? createInitialState(initialValue) : state;
// 목록 초기화 리듀서
export const clearListReducer = clearReducer([]);
// 오브젝트 초기화 리듀서
export const clearObjectReducer = clearReducer({});
// fetch 리듀서
export const fetchReducer = (actionObj, key) => initialValue => (
  state = createInitialState(initialValue),
  action
) => {
  switch (action.type) {
    case actionObj.REQUEST:
      return createLoadingState(state.data);
    case actionObj.SUCCESS:
      return createSuccessState(
        key ? path(['result', key])(action) : action.result
      );
    case actionObj.FAILURE:
      return createFailureState(action.error);
    default:
      return state;
  }
};
// 무한 스크롤 용 fetch 리듀서
export const infiniteFetchReducer = (actionObj, key) => initialValue => (
  state = createInitialState(initialValue),
  action
) => {
  switch (action.type) {
    case actionObj.REQUEST:
      return createLoadingState(state.data);

    case actionObj.SUCCESS:
      const list = [
        ...defaultTo([])(state.data),
        ...path(['result', key])(action)
      ];
      const status = {
        isDone: path(['result', key])(action).length === 0,
        lastId: action.result[key + '_last_id']
      };
      return createSuccessState(list, status);
    case actionObj.FAILURE:
      return createFailureState(action.error);
    default:
      return state;
  }
};
/**
 * others
 */
export const generateActions = name => ({
  REQUEST: name + '_REQUEST',
  SUCCESS: name + '_SUCCESS',
  FAILURE: name + '_FAILURE'
});
export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debouncedValue;
};
let store = null;
export const getStore = (reducer, enhancer) => {
  if (!store) {
    store = createStore(reducer, enhancer);
  }
  return store;
};
