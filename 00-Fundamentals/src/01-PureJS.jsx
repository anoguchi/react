import React from "react";
import { createRoot } from 'react-dom';
import "./App.css";

// “hello world” React application, using pure JavaScript.

function Hello() {
  const element = React.createElement("p", { id: "hello" }, "Hello World!");

  const domNode = document.getElementById('root');
  const root = createRoot(domNode);
  console.log(element);
  root.render(element);
}

export default Hello;
