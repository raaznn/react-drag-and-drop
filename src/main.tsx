import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { GridProvider } from "./hooks/useGrid";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GridProvider>
      <App />
    </GridProvider>
  </React.StrictMode>
);
