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
import authReducer from "../reducers/authReducer";
import { ENVIRONMENT } from "../config/environment";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'primary',
  storage,
  whitelist: [authReducer] // список редьюсеров которые необходимо хранить
};

const devTools = ENVIRONMENT === 'production' ?
  applyMiddleware(sagaMiddleware) :
  compose(applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const pReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  pReducer, devTools  
);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export {persistor, store};