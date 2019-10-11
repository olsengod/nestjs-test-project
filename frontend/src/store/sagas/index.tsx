import { all } from 'redux-saga/effects'

import character from './character'

export default function* rootSaga() {
  yield all([
    ...character
  ])
}