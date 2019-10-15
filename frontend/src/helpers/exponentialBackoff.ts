import { call, race, put, delay } from 'redux-saga/effects';
import { setNotification, clearNotification } from '../store/notification/actions';

const MAX_RETRIES: number = 10;
const MAX_WAIT_INTERVAL: number = 2000;

export default function* exponentialBackoff(request: any, requestArgs: object, successAction: any) {
  try {
    let retries: number = 0;
    let retry: boolean = false;

    do {
      let waitTime: number = yield Math.min(getWaitTimeExp(retries), MAX_WAIT_INTERVAL);
      console.log('[EXPONENTIAL BACKOFF] WAIT TIME:', waitTime);

      let { response } = yield race({
        response: call(request, requestArgs),
        timeOut: delay(waitTime)
      })

      if (response) {
        if (response.status === 200) {
          retry = false;
          yield successAction(response);

        } else if (response.clientErrorStatuses.includes(response.status)) {
          retry = false;
          yield put(setNotification({
            exists: true,
            title: 'Client error',
            description: response.data.data,
            level: 'warning'
          }))
          yield put(clearNotification());

        } else {
          console.log('[EXPONENTIAL BACKOFF] STATUS 500');
          retry = false;
          yield put(setNotification({
            exists: true,
            title: 'Server error',
            description: response.data,
            level: 'error'
          }))
          yield put(clearNotification());
        }

      } else {
        console.log('[EXPONENTIAL BACKOFF] TIME OUT');
        retry = true;
      }
    } while (retry && (retries++ < MAX_RETRIES))

  } catch(err) {
    console.log('[ERROR IN EXPONENTIAL BACKOFF]', err);
  }  
}

function getWaitTimeExp(retryCount: number) {
  let waitTime: number = Math.pow(2, retryCount) * 100;
  return waitTime;
}