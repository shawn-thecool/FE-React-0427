import { all } from 'redux-saga/effects';

import { asideSagas } from './components/system/aside/_saga';

export default function* rootSaga() {
  yield all([...asideSagas]);
}
