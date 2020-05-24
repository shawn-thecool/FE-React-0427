/**
 * action types
 */
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST';
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
export const GET_TODOS_FAILURE = 'GET_TODOS_FAILURE';
export const CREATE_TODO_REQUEST = 'CREATE_TODO_REQUEST';
export const CREATE_TODO_SUCCESS = 'CREATE_TODO_SUCCESS';
export const CREATE_TODO_FAILURE = 'CREATE_TODO_FAILURE';
/**
 * action creators
 */
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
export const getTodos = () => ({
  type: GET_TODOS_REQUEST
});
export const createTodo = () => ({
  type: CREATE_TODO_REQUEST
});
