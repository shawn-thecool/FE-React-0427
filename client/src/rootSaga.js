import { all } from 'redux-saga/effects';

import todoSagas from './_todo/saga';

export default function* rootSaga() {
  yield all([...todoSagas]);
}
