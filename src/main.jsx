import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./09-Forms/exercises/01-Controlled_Country_Picker/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
