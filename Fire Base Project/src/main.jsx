import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import TheemChanger from "./Components/ModeContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TheemChanger>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </TheemChanger>
);
