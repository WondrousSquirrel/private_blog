/*  
  Главная сага или корневая, объединяющая все остальные в одну.
  Саги нужны для сайд-эффектов, к примеру запросы апи.
*/

// import { all, fork } from "redux-saga";

export default function* rootSaga() {
  // yield all([...Object.values(someSaga)].map(fork))
  yield console.log("Delete this when start developing sagas");
}
