/*
 Главный редьюсер или root ( корневой ),
 который объединяет все остальные в один единственный.
 Отображает что происходит со store при определенном экшене.
*/

import { combineReducers } from "redux";
import authReducer from "../reducers/authReducer";

const rootReducer = combineReducers({
  auth: authReducer
});

export default rootReducer;
