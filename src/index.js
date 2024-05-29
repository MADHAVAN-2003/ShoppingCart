import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Data from "./Data";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Data>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Data>
);
