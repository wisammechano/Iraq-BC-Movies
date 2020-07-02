import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "./ContextProvider";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
