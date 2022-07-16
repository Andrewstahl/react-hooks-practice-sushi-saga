import React, { useEffect, useState } from "react";
import Sushi from "./Sushi";
import MoreButton from "./MoreButton";

function SushiContainer({ API, onBuyClick, moneyRemaining }) {
  const [sushiList, setSushiList] = useState([]);
  const [arrayElements, setArrayElements] = useState({
    startingNumber: 0,
    endingNumber: 4
  });
  const [sushiBought, setSushiBought] = useState(false);

  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(data => setSushiList(data))
  }, []);

  function handleMoreButtonClick() {
    setArrayElements({
      startingNumber: arrayElements.startingNumber + 4,
      endingNumber: arrayElements.endingNumber + 4
    })
  }

  const visibleListArray = sushiList
    .slice(
      arrayElements.startingNumber, 
      arrayElements.endingNumber
    )
    .map(sushi => 
      <Sushi 
        sushi={sushi} 
        sushiBought={sushiBought}
        onBuyClick={onBuyClick} 
        moneyRemaining={moneyRemaining} 
      />
    )
  
  return (
    <div className="belt">
      {visibleListArray}
      <MoreButton onMoreButtonClick={handleMoreButtonClick}/>
    </div>
  );
}

export default SushiContainer;
