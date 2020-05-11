import { generateAction } from '../../../utils/store';
/**
 * action types
 */
export const OPEN_ASIDE = 'OPEN_ASIDE';
export const CLOSE_ASIDE = 'CLOSE_ASIDE';
export const TOGGLE_ASIDE = 'TOGGLE_ASIDE';
/**
 * action types for api
 */
export const GET_GNB = generateAction('GET_GNB');
/**
 * action creators
 */
export const openAside = () => ({ type: OPEN_ASIDE });
export const closeAside = () => ({ type: CLOSE_ASIDE });
export const toggleAside = () => ({ type: TOGGLE_ASIDE });
/**
 * action creators for api
 */
export const getGnb = () => ({ type: GET_GNB.REQUEST });
