import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./14-Component_Instances/02-Toggle_Footer/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
