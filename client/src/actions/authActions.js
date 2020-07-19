import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL
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