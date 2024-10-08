import "./App.css";
import { range } from "./utils";

// eslint-disable-next-line react/prop-types
function Graph({ from, to }) {
  return (
    <div className="graph">
      {range(from, to + 1, 10).map((num) => (
        <div key={num} className="peg">
          {num}
        </div>
      ))}
    </div>
  );
}

export default Graph;
