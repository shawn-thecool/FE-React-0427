import reduceReducers from 'reduce-reducers';
import { combineReducers } from 'redux';
import { createInitialState, fetchReducer } from './util/storeUtils';
import {
  OPEN_DRAWER,
  CLOSE_DRAWER,
  TOGGLE_DRAWER,
  SHOW_CONFIRM,
  HIDE_CONFIRM,
  CLEAR_BALANCE,
  GET_BALANCE,
  GET_SETTINGS
} from './appActions';
/**
 * initial
 */
const defaultState = {
  isDrawerOpen: false
};
/**
 * app reducers
 */
// prettier-ignore
const auxReducer = (state= defaultState, action) => {
  switch (action.type) {
    case OPEN_DRAWER:   return {...state, isDrawerOpen:true};
    case CLOSE_DRAWER:  return {...state, isDrawerOpen:false};
    case TOGGLE_DRAWER: return {...state, isDrawerOpen:!state.isDrawerOpen};
    case SHOW_CONFIRM:  return {...state, isConfirmOpen:true};
    case HIDE_CONFIRM:  return {...state, isConfirmOpen:false};
    default: return state;
  }
};
const clearBalanceReducer = (state, action) =>
  action.type === CLEAR_BALANCE ? createInitialState({}) : state;
const balanceReducer = reduceReducers(
  createInitialState({}),
  fetchReducer(GET_BALANCE)(),
  clearBalanceReducer
);
const settingsReducer = fetchReducer(GET_SETTINGS)({});
export const isDrawerOpenSelector = state => state.app.aux.isDrawerOpen;
export const isConfirmOpenSelector = state => state.app.aux.isConfirmOpen;
export const balanceSelector = state => state.app.balance;
export const settingsSelector = state => state.app.settings;
export default combineReducers({
  aux: auxReducer,
  balance: balanceReducer,
  // popup:popupReducer
  settings: settingsReducer
});
