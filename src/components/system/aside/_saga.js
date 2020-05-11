import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_GNB } from './_action';

export function* getGnb() {
  try {
    yield put({
      type: GET_GNB.SUCCESS
    });
  } catch (err) {
    yield put({
      type: GET_GNB.FAILURE
    });
  }
  
}

export const asideSagas = [takeLatest(GET_GNB.REQUEST, getGnb)];
