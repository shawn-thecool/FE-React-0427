import { combineReducers } from 'redux';
import {
  CREATE_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  CALL_TODOS_SUCCESS,
  CALL_TODOS_FAILURE
} from './action';
import initial from './initial';
/**
 * reducers
 */
function fitler() {}
function contents(state = initial.contents, action) {
  switch (action.type) {
    case CREATE_TODO:
      return [
        ...state,
        {
          id: 'todo-1', // required todo-{number}
          title: '', // required {string}
          worker: 'shawn.thecool', // required {string}
          boss: null,
          desc: null,
          createdAt: null, // {date} format YYYY-MM-DD
          updatedAt: null // {date} format YYYY-MM-DD
        }
      ];
    case REMOVE_TODO:
      return state.filter(({ id }) => id !== action.payload.id);
    case UPDATE_TODO:
      return state.map(content => {
        if (content.id !== action.payload.id) return content;
        const { title, worker, boss, desc } = action.payload;
        const newContent = {};
        if (title) newContent['title'] = title;
        if (worker) newContent['worker'] = worker;
        if (boss) newContent['boss'] = boss;
        if (desc) newContent['desc'] = desc;
        return { ...content, ...newContent };
      });
    case CALL_TODOS_SUCCESS:
      return action.payload.result.data.contents;
    case CALL_TODOS_FAILURE:
      return action.payload.error;
    default:
      return state;
  }
}
function page() {}

export default combineReducers({
  // filter,
  contents
  // page
});
