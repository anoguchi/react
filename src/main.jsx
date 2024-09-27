import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "../src/03-Iteration/exercises/01-Avatar/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
