import { takeEvery, put, call, select } from "redux-saga/effects";

import { registerService } from "./services/authService";
import { registerSuccess, registerFailed } from "../actions/authActions";
import { USER_REGISTER_REQUEST, USER_REGISTER_FAIL } from "../types/types";
import { requestFailedNotifications } from "../actions/notificationActions";

export function* registerSaga() {
  yield takeEvery(USER_REGISTER_REQUEST, registerWorker);
}

export function* authFail() {
  yield takeEvery([USER_REGISTER_FAIL], authFailWorker);
}

/* Workers */
function* registerWorker(action) {
  try {
    const result = yield call(registerService, action.payload);
    yield put(registerSuccess(result));
  } catch (error) {
    yield put(registerFailed(error));
  }
}

function* authFailWorker() {
  const getError = state => state.auth.error;
  const error = yield select(getError);
  yield put(requestFailedNotifications(error));
}