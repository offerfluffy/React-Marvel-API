import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { AppWrapper } from "./components/app/app-styled";
import App from "./components/app/app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppWrapper>
      <App />
    </AppWrapper>
  </React.StrictMode>
);
 