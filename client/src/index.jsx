import "regenerator-runtime/runtime";

import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const root_element = document.getElementById('root');

const render = () => {
  if (root_element) {
    // eslint-disable-next-line react/no-render-return-value
    return ReactDOM.render(<App />, root_element);
  }

  throw new Error('React failed to mount, becuase mount element is missing');
};

render();
