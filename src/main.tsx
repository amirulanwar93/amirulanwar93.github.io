import React from "react";
import ReactDOM from "react-dom/client";
import Navigtion from "./components/Nav";
import Home from "./page/Home";
import "./style/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navigtion />
    <Home />
  </React.StrictMode>
);
