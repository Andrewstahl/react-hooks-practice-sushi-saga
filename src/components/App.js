import React, { useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [tableVariables, setTableVariables] = useState({
    moneyRemaining: 100,
    plates: []
  })
  
  function handleOnBuyClick(sushiPrice) {
    setTableVariables({
      moneyRemaining: tableVariables.moneyRemaining - sushiPrice,
      plates: [...tableVariables.plates, sushiPrice]
    })
  }
  
  return (
    <div className="app">
      <SushiContainer 
        API={API} 
        onBuyClick={handleOnBuyClick} 
        moneyRemaining={tableVariables.moneyRemaining}
      />
      <Table moneyRemaining={tableVariables.moneyRemaining} plates={tableVariables.plates}/>
    </div>
  );
}

export default App;
