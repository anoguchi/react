import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./09-Forms/01-Data_Binding/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
