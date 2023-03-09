import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

function App() {
  const [sushis, setSushis] = useState([]);
  const [sushiIndex, setSushiIndex] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3001/sushis")
    .then(res => res.json())
    .then((sushis) => {
      const updatedSushis = sushis.map((sushi) => {
        return {...sushi, eaten: false};
      });
      setSushis(updatedSushis);
    }
  )}, [])

  function handleSetSushiIndex() {
    setSushiIndex((sushiIndex) => sushiIndex + 4)
  }

  function handleEatSushi(eatenSushi) {
    const updatedSushis = sushis.map((sushi) => {
    if (eatenSushi.id === sushi.id) {
      return {...sushi, eaten: true};
    } else {
      console.log("No matching id!")
    }
    setSushis(updatedSushis);
  })
  }


  return (
    <div className="app">
      <SushiContainer 
        sushis={sushis}
        sushiIndex={sushiIndex}
        onSetSushiIndex={handleSetSushiIndex}
        onEatSushi={handleEatSushi}
      />
      <Table />
    </div>
  );
}

export default App;
