import { all } from 'redux-saga/effects';

import { helloSaga } from './app/saga';
import counterSaga from './counter/saga';

export default function* () {
  yield all([helloSaga, ...counterSaga]);
}
