import axios from 'axios';
import { put, takeLatest, call } from 'redux-saga/effects';
import {
  GET_TODOS_SUCCESS,
  GET_TODOS_FAILURE,
  GET_TODOS_REQUEST,
  CREATE_TODO_FAILURE,
  CREATE_TODO_SUCCESS,
  CREATE_TODO_REQUEST
} from './action';
/**
 * axios instance
 */
const instance = axios.create({
  baseURL: 'http://localhost:4000'
});
/**
 * saga generator functions (action creators)
 */
function* getTodos(action) {
  try {
    const result = yield call(instance, {
      method: 'get',
      url: '/api/v1/todos'
    });
    yield put({
      type: GET_TODOS_SUCCESS,
      payload: { result }
    });
  } catch (error) {
    yield put({
      type: GET_TODOS_FAILURE,
      payload: { error }
    });
  }
}
function* createTodo(action) {
  try {
    const result = yield call(instance, {
      method: 'post',
      url: '/api/v1/todos'
    });
    yield put({
      type: CREATE_TODO_SUCCESS,
      payload: { result }
    });

    const result = yield call(instance, {
      method: 'get',
      url: '/api/v1/todos'
    });
    yield put({
      type: CREATE_TODO_REQUEST
    });

    // 트랜젝션 1 - api 호출 - 액션 연동

    // 트랜젝션 2

    // 트랜젝션 3
  } catch (error) {
    yield put({
      type: CREATE_TODO_FAILURE,
      payload: { error }
    });
  }
}
/**
 * ation watcher(creator in action) for saga
 */
function* watchGetTodos() {
  yield takeLatest(GET_TODOS_REQUEST, getTodos);
}
function* watchCreateTodo() {
  yield takeLatest(CREATE_TODO_REQUEST, createTodo);
}

export default [watchGetTodos(), watchCreateTodo()];
