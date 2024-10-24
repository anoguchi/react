import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./06-CSS_Modules/exercises/02-Movie_rating_animation/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
