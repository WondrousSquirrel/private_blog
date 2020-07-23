import { NOTIFICATION_OPEN, NOTIFICATION_CLOSE } from "../types/types";

const initialState = {};

export default function (state=initialState, {type, payload}) {
  switch(type) {
  case NOTIFICATION_OPEN:
    return {...state, ...payload};
  case NOTIFICATION_CLOSE:
    return state = {};
  default: return state;
  }
}
