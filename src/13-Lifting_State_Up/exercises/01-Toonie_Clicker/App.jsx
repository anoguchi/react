import "./App.css";
import React from "react";

import BigCoin from "./BigCoin";

function App() {
  const [numOfCoins, setNumOfCoins] = React.useState(0);
  console.log(typeof numOfCoins);
  console.log(typeof setNumOfCoins);
  return (
    <div className="wrapper">
      <main>
        <BigCoin numOfCoins={numOfCoins} setNumOfCoins={setNumOfCoins} />
      </main>
      <footer>
        Your coin balance:
        <strong>{numOfCoins}</strong>
      </footer>
    </div>
  );
}

export default App;
