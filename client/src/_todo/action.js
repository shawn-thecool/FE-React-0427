import { generateActions } from '../util/storeUtils';
/**
 * action types
 */
export const CREATE_TODO = 'CREATE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const CALL_TODOS_REQUEST = 'CALL_TODOS_REQUEST';
export const CALL_TODOS_SUCCESS = 'CALL_TODOS_SUCCESS';
export const CALL_TODOS_FAILURE = 'CALL_TODOS_FAILURE';
/**
 * action creators
 */
export const createTodo = ({ title, worker }) => ({
  type: CREATE_TODO,
  payload: {
    title,
    worker
  }
});
export const removeTodo = ({ id }) => ({
  type: REMOVE_TODO,
  payload: {
    id
  }
});
export const updateTodo = ({ title, worker, boss, desc }) => ({
  type: UPDATE_TODO,
  payload: {
    title,
    worker,
    boss,
    desc
  }
});
/**
 * action creators for saga
 */
export const callTodos = () => ({
  type: CALL_TODOS_REQUEST,
  payload: {
    method: 'get',
    url: '/todos'
  }
});
