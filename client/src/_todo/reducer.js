import { combineReducers } from 'redux';
import {
  REMOVE_TODO,
  UPDATE_TODO,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAILURE,
  CREATE_TODO_SUCCESS,
  CREATE_TODO_FAILURE
} from './action';
import initial from './initial';
/**
 * reducers
 */
function fitler() {}
function contents(state = initial.contents, action) {
  console.log('type', action.type);
  
  switch (action.type) {
    case CREATE_TODO_SUCCESS:
      return state;
    case CREATE_TODO_FAILURE:
      return action.payload.error;
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
    case GET_TODOS_SUCCESS:
      return action.payload.result.data.data;
    case GET_TODOS_FAILURE:
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
