import React from "react";
import ReactDOM from "react-dom/client";
import Hello from "./01-PureJS.jsx";
import OwnReact from "./02-OwnReact.jsx";
import UnderstandJSX from "./03-UnderstandJSX.jsx";
import ShoppingList from "./04-JSX.jsx";
import Teste from "./05-JSXExample.jsx";
import Lactose from "./06-TernaryExample.jsx";
import FriendsList from "./07-RenderingListsExample.jsx";
import Greeting from "./08-Props.jsx";
import FriendGreeting from "./08-Props.jsx";
import RedButton from "./09-ChildrenProp.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <FriendGreeting name="Beto" />
    <FriendGreeting/>
    <RedButton>Click me!</RedButton>
  </div>
);
