import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, onSetSushiIndex, sushiIndex, onEatSushi }) {
  const sushiCards = sushis
  .slice(sushiIndex, sushiIndex + 4)
  .map((sushi) => (
    <Sushi 
      key={sushi.id}
      sushi={sushi}
      onEatSushi={onEatSushi}
    />
  ))
  return (
    <div className="belt">
      {sushiCards}
      <MoreButton 
        onSetSushiIndex={onSetSushiIndex}
      />
    </div>
  );
}

export default SushiContainer;
