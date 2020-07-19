/*  
  Главная сага или корневая, объединяющая все остальные в одну.
  Саги нужны для сайд-эффектов, к примеру запросы апи.
*/

import { all, fork } from "redux-saga/effects";

import * as authSaga from '../sagas/authSaga';

export default function* rootSaga() {
  yield all([...Object.values(authSaga)].map(fork));
}
