import "./App.css";

/* eslint-disable react/prop-types */
function Friend({ name, isOnline }) {
  return (
    <li className="friend">
      {isOnline && <div className="green-dot" />}
      {name}
    </li>
  );
}

export default Friend;
