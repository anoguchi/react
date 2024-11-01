import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./11-Complex_state/01-Mutation_Bugs/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
