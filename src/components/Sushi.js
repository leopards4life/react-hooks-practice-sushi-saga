import React from "react";

function Sushi({ sushi, onEatSushi }) {
  const { name, price, img_url, eaten } = sushi;

  function handleEatSushiClick() {
    onEatSushi(sushi);
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleEatSushiClick}>
        {eaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
