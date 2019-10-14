import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import characterReducer from './character/reducers';
import notificationReducer from './notification/reducers';
import characterSaga from './character/saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  character: characterReducer,
  notification: notificationReducer
});

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

function* rootSaga() {
  yield all([
    ...characterSaga,
  ])
}

sagaMiddleware.run(rootSaga);

export type AppState = ReturnType<typeof rootReducer>;