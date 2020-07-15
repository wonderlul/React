import React, { useState, useEffect, useMemo } from "react";

import NavigationModule from "./components/Navigation/Navigation";
import BoardModule from "./components/Board/Board";
import FooterModule from "./components/Footer/Footer";

import Board from "./Functions/JSFunctions/boardModule";
import Update from "./Functions/JSFunctions/updateModule";
import PositionChecker from "./Functions/JSFunctions/positionChecker";
import Vector from "./Functions/JSFunctions/vectorModule";

import moveHandler from "./Functions/ReactFunctions/moveHandler";
import setStartingPositionHandler from "./Functions/ReactFunctions/setStartingPositionHandler";
import resetHandler from "./Functions/ReactFunctions/resetHandler";

import StatusContext from "./Functions/ReactFunctions/StatusContext";

function App() {
  const initialVector = new Vector();
  const initialBoard = new Board();
  const initialPositionChecker = new PositionChecker();

  const board = new Board();
  const update = new Update();
  const vector = new Vector();
  const positionChecker = new PositionChecker();

  const [currentPositionChecker, updatePositionChecker] = useState(
    positionChecker
  );
  const positionCheckerHandler = (positionChecker) => {
    updatePositionChecker(positionChecker);
  };

  const [currentVector, updateVector] = useState(vector);
  const vectorHandler = (vector) => {
    updateVector(vector);
  };

  const [currentBoard, updateBoard] = useState(board);
  const updateHandler = (board) => {
    updateBoard(board);
  };

  const [counter, setCounter] = useState(0);
  const counterHandler = (counter) => {
    setCounter(counter);
  };

  const [status, setStatus] = useState(false);
  const statusHandler = (status) => {
    setStatus(status);
  };

  const [isStartingPosition, setIsStartingPosition] = useState(false);
  const startingPositionStatusHandler = (status) => {
    setIsStartingPosition(status);
  };

  const [trigger, setTrigger] = useState(false);
  const triggerHandler = (status) => {
    setTrigger(status);
  };

  const handlerPackage = {
    updateHandler,
    positionCheckerHandler,
    vectorHandler,
    counterHandler,
    statusHandler,
    triggerHandler,
    startingPositionStatusHandler,
  };

  const initialPackage = {
    initialBoard,
    initialVector,
    initialPositionChecker,
  };

  const currentPackage = useMemo(
    () => ({
      currentPositionChecker,
      currentVector,
      currentBoard,
      counter,
    }),
    [currentPositionChecker, currentVector, currentBoard, counter]
  );

  const providerValue = useMemo(
    () => ({
      status,
      isStartingPosition,
      trigger,
    }),
    [status, isStartingPosition, trigger]
  );

  useEffect(() => {
    if (status) {
      const interval = setInterval(
        () => moveHandler(currentPackage, handlerPackage, update),
        100
      );
      return () => clearInterval(interval);
    }
  });

  return (
    <StatusContext.Provider value={providerValue}>
      <NavigationModule
        counter={counter}
        setStartingPositionHandler={() =>
          setStartingPositionHandler(currentBoard, update, handlerPackage)
        }
        moveHandler={() => setStatus(!status)}
        resetHandler={() => resetHandler(initialPackage, handlerPackage)}
      ></NavigationModule>
      <BoardModule board={currentBoard.bounceBoard} />
      <FooterModule />
    </StatusContext.Provider>
  );
}

export default App;
