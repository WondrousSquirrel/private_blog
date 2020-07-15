/*
  Хранилище состояний для react`a.
  Здесь создается и подключаются все остальное, что должно взаимодействовать 
  с хранилищем.
 */

import createSagaMiddleware from "redux-saga";
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { createStore, applyMiddleware, compose } from "redux";

import rootSaga from "./rootSaga";
import rootReducer from "./rootReducer";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'primary',
  storage,
  whitelist: [''] // список редьюсеров которые необходимо хранить
};

const pReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  pReducer,
  compose(applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export {persistor, store};