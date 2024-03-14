import React from "react";
import ReactDOM from "react-dom/client";
import "./Style/index.css";

import "./Layout/App";
import App from "./Layout/App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
