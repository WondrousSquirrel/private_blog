/*
  Хранилище состояний для react`a.
  Здесь создается и подключаются все остальное, что должно взаимодействовать 
  с хранилищем.
 */

import Cookie from 'js-cookie';
import createSagaMiddleware from "redux-saga";
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { createStore, applyMiddleware, compose } from "redux";

import rootSaga from "./rootSaga";
import rootReducer from "./rootReducer";
import userReducer from "../reducers/userReducer";
import ENVIRONMENT from "../config/environment";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'primary',
  storage,
  whitelist: [userReducer] // список редьюсеров которые необходимо хранить
};

const user = Cookie.getJSON('user_data') || {};

const initialStore = {
  user
};

const devTools = ENVIRONMENT === 'production' ?
  applyMiddleware(sagaMiddleware) :
  compose(applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const pReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  pReducer, initialStore, devTools  
);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export {persistor, store};