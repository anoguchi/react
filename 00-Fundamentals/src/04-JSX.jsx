import React from "react";
import { createRoot } from "react-dom/client";

// Only allowed to use expressions within our JSX.
// JSX doesn't compile to HTML, it compiles to JavaScript.

const shoppingList = ["apple", "banana", "cherry"];
const daysUntilSantaReturns = 123;

const element = (
  <>
    <h1 style={{ fontSize: "2rem" }}>Hello World!</h1>
    <div>Items left to purchase: {shoppingList.length}</div>
    <div>
      <strong>Days until Santa returns:</strong>
      {/* add space  */} {''}
      {daysUntilSantaReturns}
    </div>
  </>
);

const compiledElement = React.createElement(
  "div",
  {},
  "Items left to purchase: ",
  shoppingList.length
);

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(element);
// root.render(compiledElement);

export default shoppingList;
