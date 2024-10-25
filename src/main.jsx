import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./07-Event_Handlers/exercises/02-Click_the_ball_v2/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
