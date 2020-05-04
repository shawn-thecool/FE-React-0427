import { combineReducers } from 'redux';
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VIZ_FILTER,
  VIZ_FILTER_TYPE
} from './action';

/**
 * initial state
 */
const VIZ_FILTER_INIT_STATE = VIZ_FILTER_TYPE.SHOW_ALL;
const TODOS_INIT_STATE = [];

/**
 * visibility filter reducers
 */
const visibilityFilter = (state = VIZ_FILTER_INIT_STATE, action) => {
  switch (action.type) {
    case SET_VIZ_FILTER:
      return action.filter;
    default:
      return state;
  }
};

/**
 * todos reducers
 */
const list = (state = TODOS_INIT_STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: action.id, text: action.text, completed: false }];
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

/**
 * combine reducers
 */
const todoReducer = combineReducers({
  visibilityFilter,
  list
});

export default todoReducer;
