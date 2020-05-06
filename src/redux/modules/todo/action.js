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
let nextTodoId = 0
export const addTodo = ({ title, desc, boss, worker }) => {
  const todo = {
    id: ++nextTodoId,
    progress: PROGRESS_TYPE.TODO,
    createdAt: new Date().toUTCString(),
    updatedAt: null
  };
  if (title) todo.title = title;
  if (desc) todo.desc = desc;
  if (boss) todo.boss = boss;
  if (worker) todo.worker = worker;
  return { type: ADD_TODO, todo };
};
export const updateTodo = ({ id, title, progress, desc, boss, worker }) => {
  if (!id) return console.log('id must need to update todo');
  const todo = {
    id,
    updatedAt: new Date().toUTCString()
  };
  if (title) todo.title = title;
  if (desc) todo.desc = desc;
  if (progress) todo.progress = progress;
  if (boss) todo.boss = boss;
  if (worker) todo.worker = worker;
  return { type: UPDATE_TODO, todo };
};
export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id
});
export const setFilter = (filter) => ({
  type: SET_FILTER,
  filter
});
