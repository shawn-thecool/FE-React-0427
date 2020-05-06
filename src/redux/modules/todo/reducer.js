import { combineReducers } from 'redux';
import {
  ADD_TODO,
  UPDATE_TODO,
  REMOVE_TODO,
  SET_FILTER,
  FILTER_TYPE
} from './action';

/**
 * filter
 */
const filter = (state = FILTER_TYPE.SHOW_DONE, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;
    default:
      return state;
  }
};

/**
 * contents
 */
const contents = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log('add', action);
      return [...state, { ...action.todo }];
    case UPDATE_TODO:
      console.log('updated', action);
      return state.map((todo) =>
        todo.id === action.todo.id ? { ...todo, ...action.todo } : todo
      );
    case REMOVE_TODO:
      console.log('remove', action);
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

/**
 * todo store model
 */
const todosModel = combineReducers({ filter, contents });

export default todosModel;
