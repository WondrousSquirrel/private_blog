import { takeEvery, put, call } from "redux-saga/effects";

import { registerService } from "./services/authService";
import { registerSuccess, registerFailed } from "../actions/authActions";
import { USER_REGISTER_REQUEST } from "../types/types";

export function* registerSaga() {
  yield takeEvery(USER_REGISTER_REQUEST, registerWorker);
}

/* Workers */
function* registerWorker(action) {
  try {
    const result = yield call(registerService, action.payload);
    yield put(registerSuccess(result));
  } catch (error) {
    yield put(registerFailed(error.message));
  }
}