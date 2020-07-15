import React, { useState, useEffect } from "react";

import gridModule from "./JSFunctions/gridModule";
import fillGrid from "./JSFunctions/fillGrid";
import updateGrid from "./JSFunctions/updateGrid";

import Introduction from "./Components/Introduction/Introduction";
import Grid from "./Components/Grid/Grid";
import Footer from "./Components/Footer/Footer";
import Navigation from "./Components/Navigation/Navigation";

const gridComponent = new gridModule();
const gridDimension = 50;
const livingCells = 500;

function App() {
  const [status, setStatus] = useState(false);
  const statusHandler = (status) => {
    setStatus(!status);
  };

  const [counter, setCounter] = useState(0);
  const counterHandler = (counter) => {
    setCounter(counter + 1);
  };

  const [currentGrid, setCurrentGrid] = useState(gridComponent.grid);
  const gridHandler = (grid) => {
    setCurrentGrid(grid);
  };

  const resetHandler = () => {
    const gridComponent = new gridModule();
    gridComponent.getRandomGrid(gridDimension);
    fillGrid(gridComponent.grid, livingCells);
    setCurrentGrid(gridComponent.grid);
    setStatus(false);
    setCounter(0);
  };

  gridComponent.getRandomGrid(gridDimension);
  fillGrid(gridComponent.grid, livingCells);

  useEffect(() => {
    if (status) {
      const interval = setInterval(() => {
        updateGrid(currentGrid, gridHandler);
        counterHandler(counter);
      }, 100);

      return () => clearInterval(interval);
    }
  });

  return (
    <>
      <Introduction />
      <Navigation
        status={status}
        statusHandler={statusHandler}
        resetHandler={resetHandler}
        counter={counter}
      />
      <Grid grid={currentGrid} gridDimension={gridDimension}></Grid>
      <Footer />
    </>
  );
}

export default App;
