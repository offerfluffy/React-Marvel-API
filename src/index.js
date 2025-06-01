import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { AppStyled } from "./components/app/app-styled";
import App from "./components/app/app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppStyled>
      <App />
    </AppStyled>
  </React.StrictMode>
);
