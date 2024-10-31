import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./09-Forms/exercises/02-Two_Factor_Authentication/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
