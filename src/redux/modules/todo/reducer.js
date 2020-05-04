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
const filter = (state = FILTER_TYPE.SHOW_ALL, action) => {
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
      return [
        ...state,
        {
          id: 'ASDF1234', // 아이템 아이디
          title: action.title || '', // 할일 주제
          desc: action.desc || '', // 할일 설명
          progress: 'TODO', // 진행 상태 [TODO, DOING, DONE, +HOLD, CLOSED, ISSUE]
          boss: action.boss || null, // 보고자
          worker: action.worker || null, // 담당자
          createdAt: null, // DATE - 생성일 YYYY.MM.DD HH:MM
          updatedAt: null // DATE - 수정일 YYYY.MM.DD HH:MM
        }
      ];
    case UPDATE_TODO:
      return state.map((todo) =>
        todo.id === action.todo.id
          ? {
              todo,
              ...action.title,
              ...action.desc,
              ...action.boss,
              ...action.worker
            }
          : todo
      );
    case REMOVE_TODO:
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
