import { takeEvery, put, call, select } from "redux-saga/effects";

import { registerService, loginService } from "./services/userService";
import { registerSuccess, registerFailed, loginFailed, loginSuccess } from "../actions/userActions";
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAIL,
  USER_REGISTER_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS
} from "../types/types";
import {
  requestFailedNotifications,
  requestSuccesNotification
} from "../actions/notificationActions";

export function* registerSaga() {
  yield takeEvery(USER_REGISTER_REQUEST, registerWorker);
}

export function* authFail() {
  yield takeEvery([USER_REGISTER_FAIL, LOGIN_FAIL], authFailWorker);
}

export function* authSuccess() {
  yield takeEvery([USER_REGISTER_SUCCESS, LOGIN_SUCCESS], authSuccessWorker);
}

export function* loginSaga() {
  yield takeEvery(LOGIN_REQUEST, loginWorker);
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

function* loginWorker(action) {
  try {
    const result = yield call(loginService, action.payload);
    yield put(loginSuccess(result));
  } catch (error) {
    yield put(loginFailed(error));
  }
}

function* authSuccessWorker(action) {
  let message = '';
  switch(action.type) {
  case USER_REGISTER_SUCCESS:
    message = 'Регистрация прошла успешно';
    break;
  case LOGIN_SUCCESS: 
    message = 'Вход произошел успешно';
    break;
  } 

  yield put(requestSuccesNotification(message));
}

function* authFailWorker() {
  const getError = state => state.user.error;
  const error = yield select(getError);
  yield put(requestFailedNotifications(error));
}