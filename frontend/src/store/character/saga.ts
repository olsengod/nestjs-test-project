import { take, put, delay, fork, cancel, select } from 'redux-saga/effects';

import { SET_CHAR_NAME, SET_CHAR_OFFSET, CharState,  } from '../character/types';
import { getCharacters } from '../../api/requests';
import { Data, RequestArgs } from '../../api/types';
import { setCharList, setCharLoader } from '../character/actions';
import { clearNotification } from '../notification/actions';
import exponentialBackoff from '../../helpers/exponentialBackoff';

function* handleGetCharactersSuccess(response: any) {
  let characters: Data['results'] = response.data.results;

  let total: CharState['total'] = response.data.total;
  yield put(setCharList({
    list: characters,
    total,
  }));  
}

function* handleCharactersSearch(input: string, debounce: boolean) {
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

    const charState = yield select(state => state.character);
    let getCharactersArgs: RequestArgs = {
      nameStartsWith: input,
      offset: charState.offset,
      limit: charState.limit
    };

    yield exponentialBackoff(getCharacters, getCharactersArgs, handleGetCharactersSuccess);

    yield put(setCharLoader(false));
    yield put(clearNotification());

  } catch(err) {
    console.log('[ERROR IN SAGA]', err);
  }  
}

function* watchSearchInput() {
  let task: any;
  while (true) {
    const { payload } = yield take(SET_CHAR_NAME);
    if (task) {
      yield cancel(task)
    }
    task = yield fork(handleCharactersSearch, payload, true);
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
    task = yield fork(handleCharactersSearch, searchName, false);
  }
}

export default [
  watchSearchInput(),
  watchOffsetChange()
]