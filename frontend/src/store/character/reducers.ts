import {
  CharState,
  CharActionTypes,
  SET_CHAR_NAME,
  SET_CHAR_LIST,
  SET_CHAR_OFFSET,
  SET_CHAR_LOADER
} from './types'

const initState: CharState = {
  searchName: '',
  limit: 5,
  offset: 0,
  total: 0,
  list: [],
  loader: false
}

export default function characterReducer(
  state = initState,
  action: CharActionTypes
): CharState {
  switch (action.type) {
    case SET_CHAR_NAME: {
      return {
        ...state,
        searchName: action.payload,
        offset: 0
      }
    }
    case SET_CHAR_LIST: {
      return {
        ...state,
        list: [...action.payload.list],
        total: action.payload.total
      }
    }
    case SET_CHAR_OFFSET: {
      return {
        ...state,
        offset: action.payload
      }
    }
    case SET_CHAR_LOADER: {
      return {
        ...state,
        loader: action.payload
      }
    }
    default:
      return state
  }
}