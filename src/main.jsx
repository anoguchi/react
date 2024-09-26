import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./02-Components/props/App";
import "./index.css";

const noguchi = <App name="Noguchi" />;
console.log(noguchi);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {console.log(<App name="Beto" />)}
    <App name="Julia" />
    <App name="Diego" />
    {noguchi}
    <App />
  </StrictMode>
);
