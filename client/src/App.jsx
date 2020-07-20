import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from "./store/store";

import "./style.scss";
import Footer from "./Components/Footer/Footer";
import NavbarComponent from "./Components/Navbar/Navbar.jsx";
import Notification from "./Components/Notification/Notification";
import routes from "./routes";

const App = () => {
  return (
    <div className='wrapper'>
      <Provider store={store}>
        <PersistGate loading={'Loading...'} persistor={persistor}>
          <NavbarComponent />
          <main>
            <Notification />
            {routes}
          </main>
          <Footer />
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
