/*
 Главный редьюсер или root ( корневой ),
 который объединяет все остальные в один единственный.
 Отображает что происходит со store при определенном экшене.
*/

import { combineReducers } from "redux";
import userReducer from "../reducers/userReducer";
import notificationReducer from "../reducers/notificationReducer";

const rootReducer = combineReducers({
  user: userReducer,
  notification: notificationReducer
});

export default rootReducer;
