import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

import {persistor, store} from "./store/store";



import "./style.scss";
import NavbarComponent from "./Components/Navbar";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={'Loading...'} persistor={persistor}>
          <NavbarComponent />
          <h1 className="title">All Work Fine</h1>
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
