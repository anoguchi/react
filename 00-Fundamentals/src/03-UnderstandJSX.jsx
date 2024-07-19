import React from 'react';
import { createRoot } from "react-dom/client";

function UnderstandJSX() {
  const element = <p id="hello">Hello Master!!!</p>;
  const container = document.querySelector("#root");
  const root = createRoot(container);
  root.render(element);
}

export default UnderstandJSX;
