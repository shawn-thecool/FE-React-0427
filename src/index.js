import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import { getStore } from './util/storeUtils';
import App from './App';

const sagaMiddleware = createSagaMiddleware();
const store = getStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
