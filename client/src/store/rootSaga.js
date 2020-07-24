/*  
  Главная сага или корневая, объединяющая все остальные в одну.
  Саги нужны для сайд-эффектов, к примеру запросы апи.
*/

import { all, fork } from "redux-saga/effects";

import * as userSaga from '../sagas/userSaga';
import * as notificationSaga from '../sagas/notificationSaga';

export default function* rootSaga() {
  yield all([...Object.values(userSaga)].map(fork));
  yield all([...Object.values(notificationSaga)].map(fork));
}
