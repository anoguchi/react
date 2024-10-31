import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./10-Props_Vs_State/01-Props/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
