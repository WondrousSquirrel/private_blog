import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  GET_USER_REQUEST,
  GET_USER_SUCCESS
} from "../types/types";

export const registerRequest = user => ({
  type: USER_REGISTER_REQUEST,
  payload: user
});

export const registerSuccess = user => ({
  type: USER_REGISTER_SUCCESS,
  payload: user
});

export const registerFailed = error => ({
  type: USER_REGISTER_FAIL,
  payload: error
});

export const loginRequest = user => ({
  type: LOGIN_REQUEST,
  payload: user
});

export const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  payload: user
});

export const loginFailed = error => ({
  type: LOGIN_FAIL,
  payload: error
});

export const logout = () => ({
  type: LOGOUT
});

export const getUserRequest = () => ({
  type: GET_USER_REQUEST
});

export const getUserSuccess = user => ({
  type: GET_USER_SUCCESS,
  payload: user
});

export const getUserFailed = error => ({
  type: GET_USER_REQUEST,
  payload: error
});