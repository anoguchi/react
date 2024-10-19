import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./06-CSS_Modules/01-Sidenote/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
