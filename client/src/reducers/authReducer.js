import { USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL } from "../types/types";

const initialState = {};

export default function (state=initialState, {type, payload}) {
  switch(type) {
  case USER_REGISTER_REQUEST: return {loading: true};
  case USER_REGISTER_SUCCESS: 
    return {
      loading: false,
      user: payload
    };
  case USER_REGISTER_FAIL: 
    return {
      loading: false,
      error: payload
    };
  default: return state;
  }
}

