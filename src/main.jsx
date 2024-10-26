import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./08-The_useState_hook/01-Asynchronous_updates/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
