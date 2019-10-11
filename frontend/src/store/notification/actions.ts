import { SET_NOTIFICATION, CLEAR_NOTIFICATION, NotifState, NotifActionTypes } from './types'

export function setNotification(notificationObj: NotifState): NotifActionTypes {
  return {
    type: SET_NOTIFICATION,
    payload: notificationObj
  }
}

export function clearNotification(): NotifActionTypes {
  return {
    type: CLEAR_NOTIFICATION
  }
}