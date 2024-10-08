import "./App.css";
import { range } from "./utils";

// eslint-disable-next-line react/prop-types
function Grid({ numRows, numCols }) {
  return (
    <div className="grid">
      {range(numRows).map((rowIndex) => (
        <div key={rowIndex} className="row">
          {range(numCols).map((colIndex) => (
            <div key={colIndex} className="cell" />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Grid;
