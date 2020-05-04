/**
 * action types
 */
export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const SET_FILTER = 'SET_FILTER';

/**
 * other constants
 */
export const PROGRESS_TYPE = {
  TODO: 'TODO',
  DOING: 'DOING',
  DONE: 'DONE',
  HOLD: 'HOLD',
  CLOSED: 'CLOSED',
  ISSUE: 'ISSUE'
};
export const FILTER_TYPE = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_TODO: 'SHOW_TODO',
  SHOW_DOING: 'SHOW_DOING',
  SHOW_DONE: 'SHOW_DONE'
};

/**
 * action creators
 */
export const addTodo = ({ title, desc, boss, worker }) => ({
  type: ADD_TODO,
  title,
  desc,
  boss,
  worker
});
export const updateTodo = ({ title, desc, boss, worker }) => ({
  type: UPDATE_TODO,
  title,
  desc,
  boss,
  worker
});
export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id
});
export const setFilter = (filter) => ({
  type: SET_FILTER,
  filter
});
