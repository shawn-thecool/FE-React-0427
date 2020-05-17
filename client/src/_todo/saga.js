import axios from 'axios';
import { put, takeLatest, call } from 'redux-saga/effects';
import {
  CALL_TODOS_SUCCESS,
  CALL_TODOS_FAILURE,
  CALL_TODOS_REQUEST
} from './action';

const instance = axios.create({
  baseURL: 'http://localhost:4000'
});

function* callTodos(action) {
  try {
    const result = yield call(instance, action.payload);
    yield put({
      type: CALL_TODOS_SUCCESS,
      payload: { result }
    });
  } catch (error) {
    yield put({
      type: CALL_TODOS_FAILURE,
      payload: { error }
    });
  }
}
/**
 * ation watcher(creator in action) for saga
 */
function* watchCallTodos() {
  yield takeLatest(CALL_TODOS_REQUEST, callTodos);
}

export default [watchCallTodos()];
