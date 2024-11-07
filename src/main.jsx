import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./13-Lifting_State_Up/exercises/02-Shopping_List/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
