import { take, put, delay, fork, cancel, call, race, select } from 'redux-saga/effects';

import { SET_CHAR_NAME, SET_CHAR_OFFSET, CharState,  } from '../character/types';
import { getCharacters } from '../../api/requests';
import { Data, Result, RequestArgs } from '../../api/types';
import { setCharList, setCharLoader } from '../character/actions';
import { setNotification, clearNotification } from '../notification/actions';

const MAX_RETRIES: number = 10;
const MAX_WAIT_INTERVAL: number = 2000;

function* exponentialBackoff(input: string, debounce: boolean) {
  try {
    yield put(setCharLoader(true));
    if (debounce) yield delay(500);

    if (!input) {
      yield put(setCharList({
        list: [],
        total: 0
      }));
      yield put(setCharLoader(false));
      return;
    }

    let retries: number = 0;
    let retry: boolean = false;

    do {
      let waitTime: number = yield Math.min(getWaitTimeExp(retries), MAX_WAIT_INTERVAL);
      console.log('[SAGA] WAIT TIME:', waitTime);

      const charState = yield select(state => state.character);
      let getCharactersArgs: RequestArgs = {
        nameStartsWith: input,
        offset: charState.offset,
        limit: charState.limit
      };

      let { response } = yield race({
        response: call(getCharacters, getCharactersArgs),
        timeOut: delay(waitTime)
      })

      if (response) {
        if (response.status === 200) {
          retry = false;
          let characters: Data['results'] = response.data.data.results;
          let charList: CharState['list'] = yield characters.map((char: Result) => {
            return {
              id: char.id,
              name: char.name,
              description: char.description
            };
          });

          let total: CharState['total'] = response.data.data.total;
          yield put(setCharList({
            list: charList,
            total,
          }));
          yield put(setCharLoader(false));

        } else if (response.status === (401 || 409)) {
          retry = false;
          yield put(setNotification({
            exists: true,
            title: 'Client error',
            description: response.data.message,
            level: 'warning'
          }))
          yield put(clearNotification());
          yield put(setCharLoader(false));

        } else {
          console.log('[SAGA] STATUS 500');
          retry = true;
        }

      } else {
        console.log('[SAGA] TIME OUT');
        retry = true;
      }
    } while (retry && (retries++ < MAX_RETRIES))

  } catch(err) {
    console.log('[ERROR IN SAGA]', err);
  }  
}

function getWaitTimeExp(retryCount: number) {
  let waitTime: number = Math.pow(2, retryCount) * 100;
  return waitTime;
}

function* watchSearchInput() {
  let task: any;
  while (true) {
    const { payload } = yield take(SET_CHAR_NAME);
    if (task) {
      yield cancel(task)
    }
    task = yield fork(exponentialBackoff, payload, true);
  }
}

function* watchOffsetChange() {
  let task: any;
  while (true) {
    yield take(SET_CHAR_OFFSET);
    const searchName: CharState['searchName'] = yield select(state => state.character.searchName)
    if (task) {
      yield cancel(task)
    }
    task = yield fork(exponentialBackoff, searchName, false);
  }
}

export default [
  watchSearchInput(),
  watchOffsetChange()
]