// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // Import Provider
import App from "./App";
import { store } from "./store"; // Import your Redux store
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      {" "}
      <div>
        <App />
      </div>
    </Provider>
  </React.StrictMode>,
);
