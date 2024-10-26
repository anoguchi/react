import "./App.css";
import React from "react";
import {
  ChevronUp,
  ChevronsUp,
  ChevronDown,
  ChevronsDown,
  RotateCcw,
  Hash,
} from "react-feather";

function Counter({ initialValue = 10 }) {
  const [count, setCount] = React.useState(initialValue);

  function triggerPlusOne() {
    // const nextCount = count + 1;
    setCount(count + 1);
  }

  function triggerPlusTen() {
    // const nextCount = count + 10;
    setCount(count + 10);
  }

  function triggerReset() {
    setCount(initialValue);
  }

  function triggerRandom() {
    // const nextCount = Math.floor(Math.random() * 100) + 1;
    setCount(Math.floor(Math.random() * 100) + 1);
  }

  function triggerMinusTen() {
    // const nextCount = count - 10;
    setCount(count - 10);
  }

  function triggerMinusOne() {
    // const nextCount = count - 1;
    setCount(count - 1);
  }

  return (
    <div className="wrapper">
      <p>
        <span>Current value:</span>
        <span className="count">{count}</span>
      </p>
      <div className="button-row">
        <button onClick={triggerPlusOne}>
          <ChevronUp />
          <span className="visually-hidden">Increase slightly</span>
        </button>
        <button onClick={triggerPlusTen}>
          <ChevronsUp />
          <span className="visually-hidden">Increase a lot</span>
        </button>
        <button onClick={triggerReset}>
          <RotateCcw />
          <span className="visually-hidden">Reset</span>
        </button>
        <button onClick={triggerRandom}>
          <Hash />
          <span className="visually-hidden">Set to random value</span>
        </button>
        <button onClick={triggerMinusTen}>
          <ChevronsDown />
          <span className="visually-hidden">Decrease a lot</span>
        </button>
        <button onClick={triggerMinusOne}>
          <ChevronDown />
          <span className="visually-hidden">Decrease slightly</span>
        </button>
      </div>
    </div>
  );
}

export default Counter;
