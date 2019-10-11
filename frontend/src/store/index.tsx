import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import characterReducer from './character/reducers';
import notificationReducer from './notification/reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  character: characterReducer,
  notification: notificationReducer
});

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(sagas);

export type AppState = ReturnType<typeof rootReducer>;