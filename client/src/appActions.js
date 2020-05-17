import { generateActions } from './util/storeUtils';
/**
 * action types
 */
export const OPEN_DRAWER = 'OPEN_DRAWER';
export const CLOSE_DRAWER = 'CLOSE_DRAWER';
export const TOGGLE_DRAWER = 'TOGGLE_DRAWER';
export const SHOW_POPUP = 'SHOW_POPUP';
export const HIDE_POPUP = 'HIDE_POPUP';
export const SHOW_CONFIRM = 'SHOW_CONFIRM';
export const HIDE_CONFIRM = 'HIDE_CONFIRM';
export const CLEAR_BALANCE = 'CLEAR_BALANCE';
export const GET_BALANCE = generateActions('GET_BALANCE');
export const GET_SETTINGS = generateActions('GET_SETTINGS');
/**
 * action creators
 */
export const openDrawer = () => ({
  type: OPEN_DRAWER
});
export const closeDrawer = () => ({
  type: CLOSE_DRAWER
});
export const toggleDrawer = () => ({
  type: TOGGLE_DRAWER
});
export const showPopup = ({ msg = '', hndr = {} }) => ({
  type: SHOW_POPUP,
  payload: { msg, hndr }
});
export const hidePopup = () => ({
  type: HIDE_POPUP
});
export const showConfirm = ({ msg = '', hndr = {} }) => ({
  type: SHOW_CONFIRM,
  payload: { msg, hndr }
});
export const hideConfirm = () => ({
  type: HIDE_CONFIRM
});
export const clearBalance = () => ({
  type: CLEAR_BALANCE
});
export const getBalance = () => ({
  type: GET_BALANCE.REQUEST
});
export const getSettings = () => ({
  type: GET_SETTINGS.REQUEST
});
