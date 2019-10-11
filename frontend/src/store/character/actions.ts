import { SET_CHAR_NAME, SET_CHAR_LIST, SET_CHAR_LOADER, SET_CHAR_OFFSET, ListInfo, CharState, CharActionTypes } from './types'

export function setCharName(name: string): CharActionTypes {
  return {
    type: SET_CHAR_NAME,
    payload: name
  }
}

export function setCharList(listInfo: ListInfo): CharActionTypes {
  return {
    type: SET_CHAR_LIST,
    payload: listInfo
  }
}

export function setCharOffset(offset: CharState['offset']): CharActionTypes {
  return {
    type: SET_CHAR_OFFSET,
    payload: offset
  }
}

export function setCharLoader(loader: CharState['loader']): CharActionTypes {
  return {
    type: SET_CHAR_LOADER,
    payload: loader
  }
}