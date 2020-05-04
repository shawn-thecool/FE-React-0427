/**
 * shorten wards
 * visiblity - viz
 * initial - init
 */

/**
 * action types
 */
export const ADD_TODO       = 'ADD_TODO';
export const REMOVE_TODO    = 'REMOVE_TODO';
export const TOGGLE_TODO    = 'TOGGLE_TODO';
export const SET_VIZ_FILTER = 'SET_VIZ_FILTER';

/**
 * other constants
 */
export const VIZ_FILTER_TYPE = {
  SHOW_ALL:       'SHOW_ALL',
  SHOW_ACTIVE:    'SHOW_ACTIVE',
  SHOW_COMPLETED: 'SHOW_COMPLETED'
};

/**
 * action creators
 */
export const addTodo = (id, text) => ({
  type: ADD_TODO,
  id,
  text
});
export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id
});
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id
});
export const setVizFilter = (filter) => ({
  type: SET_VIZ_FILTER,
  filter
});
