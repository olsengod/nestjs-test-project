export interface NotifState {
  exists: boolean
  title: string
  description: string | undefined
  level: Level
}

type Level = 'warning' | 'error';

export const SET_NOTIFICATION = 'SET_NOTIFICATION'
export const CLEAR_NOTIFICATION = 'CLEAR_NOTIFICATION'

interface SetNotification {
  type: typeof SET_NOTIFICATION
  payload: NotifState
}

interface ClearNotification {
  type: typeof CLEAR_NOTIFICATION
}

export type NotifActionTypes = SetNotification | ClearNotification;