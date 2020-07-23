import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT
} from "../types/types";

const initialState = {};

export default function (state=initialState, {type, payload}) {
  switch(type) {
  case USER_REGISTER_REQUEST: return {loading: true};
  case USER_REGISTER_SUCCESS: 
    return {
      loading: false,
      ...payload
    };
  case USER_REGISTER_FAIL: 
    return {
      loading: false,
      error: payload
    };
  case LOGIN_REQUEST: return { loadgin: true};
  case LOGIN_SUCCESS: {
    return {
      loading: false,
      ...payload
    };
  }
  case LOGIN_FAIL: 
    return {
      loading: false,
      error: payload
    };
  case LOGOUT:
    return null;
  default: return state;
  }
}

