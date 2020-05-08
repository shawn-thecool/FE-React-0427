import { delay, put, takeEvery } from 'redux-saga/effects';

import {
  INCREMENT,
  DECREMENT,
  INCREMENT_ASYNC,
  DECREMENT_ASYNC
} from './action.type';

function* increaseAsync() {
  yield delay(1000);
  yield put({ type: INCREMENT });
}

function* decreaseAsync() {
  yield delay(1000);
  yield put({ type: DECREMENT });
}

export default [
  takeEvery(INCREMENT_ASYNC, increaseAsync),
  takeEvery(DECREMENT_ASYNC, decreaseAsync)
];
