import { takeEvery, put, call, delay } from "redux-saga/effects";
import { NOTIFICATION_OPEN } from "../types/types";
import { closeNotification } from "../actions/notificationActions";


export function* registerSaga() {
  yield takeEvery(NOTIFICATION_OPEN, notificationWorker);
}

/* Workers */
function* notificationWorker() {
  yield delay(2000);
  yield put(closeNotification());
}
