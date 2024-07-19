import { getIsLactoseTolerant } from "./utils";

// Ternary Rendering

function LactoseIntolerant() {
  return (
    <h1>
      <span role="img" aria-label="broccoli and strawberry">
        🥦🍓
      </span>
    </h1>
  );
}

function LactoseTolerant() {
  return (
    <h1>
      <span role="img" aria-label="milk and cheese">
        🥛🧀
      </span>
    </h1>
  );
}

export default function Lactose() {
  const isLactoseTolerant = getIsLactoseTolerant();
  // if (isLactoseTolerant) {
  //   return <LactoseTolerant />;
  // } 
  //   return <LactoseIntolerant />;

  return isLactoseTolerant ? <LactoseTolerant /> : <LactoseIntolerant />;
}