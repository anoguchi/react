import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./01-Understanding_JSX/critter/App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
