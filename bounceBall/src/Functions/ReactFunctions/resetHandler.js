const resetHandler = (
  { initialBoard, initialVector, initialPositionChecker },
  {
    updateHandler,
    vectorHandler,
    positionCheckerHandler,
    counterHandler,
    statusHandler,
    startingPositionStatusHandler,
    triggerHandler,
  }
) => {
  updateHandler(initialBoard);
  vectorHandler(initialVector);
  positionCheckerHandler(initialPositionChecker);
  counterHandler(0);
  statusHandler(false);
  startingPositionStatusHandler(false);
  triggerHandler(false);
};

export default resetHandler;
