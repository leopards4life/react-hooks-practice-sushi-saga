import React from "react";

function MoreButton({ onSetSushiIndex }) {

  function handleClick() {
    onSetSushiIndex();
  }
  
  return <button onClick={handleClick}>More sushi!</button>;
}

export default MoreButton;
