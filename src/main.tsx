import React from "react";
import ReactDOM from "react-dom/client";
import Navigtion from "./components/Nav";
import App from "./App";
import "./style/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navigtion />
    <App />
  </React.StrictMode>
);
