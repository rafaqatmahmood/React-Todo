import React from "react";
import ReactDOM from "react-dom";
import App from "./components/containers/App/App";
import { Store } from "./context/Store";
import "./index.css";

ReactDOM.render(
  <Store>
    <App />
  </Store>,
  document.getElementById("root")
);
