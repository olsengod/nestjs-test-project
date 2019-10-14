import {
  NotifState,
  NotifActionTypes,
  SET_NOTIFICATION,
  CLEAR_NOTIFICATION
} from './types'

const initState: NotifState = {
  exists: false,
  title: '',
  description: [],
  level: 'warning'
}

export default function notificationReducer(
  state = initState,
  action: NotifActionTypes
): NotifState {
  switch (action.type) {
    case SET_NOTIFICATION: {
      return {
        ...state,
        exists: action.payload.exists,
        title: action.payload.title,
        description: action.payload.description,
        level: action.payload.level
      }
    }
    case CLEAR_NOTIFICATION: {
      return {
        ...initState,
        exists: initState.exists,
        title: initState.title,
        description: initState.description,
        level: initState.level
      }
    }
    default:
      return state
  }
}