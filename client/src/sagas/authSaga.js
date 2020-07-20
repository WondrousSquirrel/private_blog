import { takeEvery, put, call, select } from "redux-saga/effects";

import { registerService } from "./services/authService";
import { registerSuccess, registerFailed } from "../actions/authActions";
import { USER_REGISTER_REQUEST, USER_REGISTER_FAIL, USER_REGISTER_SUCCESS } from "../types/types";
import {
  requestFailedNotifications,
  requestSuccesNotification
} from "../actions/notificationActions";

export function* registerSaga() {
  yield takeEvery(USER_REGISTER_REQUEST, registerWorker);
}

export function* authFail() {
  yield takeEvery([USER_REGISTER_FAIL], authFailWorker);
}

export function* authSuccess() {
  yield takeEvery([USER_REGISTER_SUCCESS], authSuccessWorker);
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

function* authSuccessWorker(action) {
  let message = '';
  switch(action.type) {
  case USER_REGISTER_SUCCESS:
    message = 'Регистрация прошла успешно';
  }
  yield put(requestSuccesNotification(message));
}

function* authFailWorker() {
  const getError = state => state.auth.error;
  const error = yield select(getError);
  yield put(requestFailedNotifications(error));
}