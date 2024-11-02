import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./13-Lifting_State_Up/01-Search_fruits/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
