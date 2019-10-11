export interface CharState {
  searchName: string
  limit: number
  offset: number
  total: number
  list: Char[]
  loader: boolean
}

export interface Char {
  id: number
	name: string
  description: string
}

export interface ListInfo {
  total: CharState['total']
  list: CharState['list']
}

export const SET_CHAR_NAME = 'SET_CHAR_NAME'
export const SET_CHAR_LIMIT = 'SET_CHAR_LIMIT'
export const SET_CHAR_OFFSET = 'SET_CHAR_OFFSET'
export const SET_CHAR_LIST = 'SET_CHAR_LIST'
export const SET_CHAR_LOADER = 'SET_CHAR_LOADER'

interface SetCharNameAction {
  type: typeof SET_CHAR_NAME
  payload: CharState['searchName']
}

interface SetCharLimitAction {
  type: typeof SET_CHAR_LIMIT
  payload: CharState['limit']
}

interface SetCharOffsetAction {
  type: typeof SET_CHAR_OFFSET
  payload: CharState['offset']
}

interface SetCharListAction {
  type: typeof SET_CHAR_LIST
  payload: ListInfo
}

interface SetCharLoaderAction {
  type: typeof SET_CHAR_LOADER
  payload: CharState['loader']
}

export type CharActionTypes = (SetCharNameAction | SetCharLimitAction | SetCharOffsetAction | 
                               SetCharListAction | SetCharLoaderAction);