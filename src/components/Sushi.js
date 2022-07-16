import React, { useState } from "react";

function Sushi({ sushi, sushiBought, onBuyClick, moneyRemaining }) {
  // const [sushiBought, setSushiBought] = useState(false);

  function handleClick() {
    if (moneyRemaining > sushi.price && sushiBought === false) {
      setSushiBought(true);
      onBuyClick(sushi.price)
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {/* Tell me if this sushi has been eaten! */}
        {sushiBought ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
        {/* {sushiBought ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )} */}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
