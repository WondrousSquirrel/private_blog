import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from "./store/store";

import "./style.scss";
import NavbarComponent from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer";
import routes from "./routes";

const App = () => {
  return (
    <div className='wrapper'>
      <Provider store={store}>
        <PersistGate loading={'Loading...'} persistor={persistor}>
          <NavbarComponent />
          <main>
            {routes}
          </main>
          <Footer />
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
