import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./07-Event_Handlers/exercises/01-Click_the_ball/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
