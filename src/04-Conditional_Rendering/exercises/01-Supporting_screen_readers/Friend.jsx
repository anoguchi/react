import "./App.css";
import VisuallyHidden from "./VisuallyHidden";

/* eslint-disable react/prop-types */
function Friend({ name, isOnline }) {
  return (
    <li className="friend">
      {isOnline && <div className="green-dot" />}
      {name}
      {isOnline && <VisuallyHidden>(Online)</VisuallyHidden>}
    </li>
  );
}

export default Friend;
