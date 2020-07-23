import { takeEvery, put, call, select, takeLatest } from "redux-saga/effects";
import Cookie from 'js-cookie';

import { registerService, loginService, getUserService } from "./services/userService";
import { registerSuccess, registerFailed, loginFailed, loginSuccess, getUserSuccess, getUserFailed } from "../actions/userActions";
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAIL,
  USER_REGISTER_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  GET_USER_REQUEST,
  GET_USER_FAIL
} from "../types/types";
import {
  requestFailedNotifications,
  requestSuccesNotification
} from "../actions/notificationActions";

export function* registerSaga() {
  yield takeEvery(USER_REGISTER_REQUEST, registerWorker);
}

export function* authFail() {
  yield takeEvery([USER_REGISTER_FAIL, LOGIN_FAIL, GET_USER_FAIL], authFailWorker);
}

export function* authSuccess() {
  yield takeEvery([USER_REGISTER_SUCCESS, LOGIN_SUCCESS], authSuccessWorker);
}

export function* loginSaga() {
  yield takeEvery(LOGIN_REQUEST, loginWorker);
}

export function* logoutSaga() {
  yield takeLatest(LOGOUT, logoutWorker);
}

export function* getUserSaga() {
  yield takeEvery(GET_USER_REQUEST, getUserWorker);
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

function* logoutWorker() {
  yield Cookie.remove('user_data');
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

function* getUserWorker() {
  const getUser = state => state.user;
  const user = yield select(getUser);
  try {
    const result = yield call(getUserService, user.id, user.token);
    yield put(getUserSuccess(result));
  } catch (error) {
    yield put(getUserFailed(error));
  }
}