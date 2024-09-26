import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Button from "../src/02-Components/exercises/02-Button/App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Button status="cancel">Cancel</Button>
    <Button status="confirm">Confirm</Button>
    <Button status="accept">Accept</Button>
  </StrictMode>
);
