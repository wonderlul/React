const moveHandler = (
  { currentPositionChecker, currentVector, currentBoard, counter },
  { updateHandler, counterHandler, statusHandler, triggerHandler },
  update
) => {
  currentPositionChecker.obstacleCheck(currentBoard, currentVector);
  currentVector.setVector(currentBoard, currentPositionChecker);

  if (currentVector.directionChange) {
    currentPositionChecker.moveAfter(currentBoard, currentVector);
  }

  update.updateBoard(currentBoard, currentVector, currentPositionChecker);

  updateHandler({ ...currentBoard });

  if (counter > 0) {
    counterHandler(++counter);
    currentPositionChecker.check(currentBoard, counter);
    if (currentPositionChecker.isStartingPosition) {
      statusHandler(false);
      triggerHandler(true);
      alert(
        `Ball has returned to its starting position in ${counter} moves. Press "Reset" to play again.`
      );
    } else if (currentPositionChecker.isHundred) {
      statusHandler(false);
      triggerHandler(true);
      alert(
        `Ball moved ${counter} times and never returned to its starting position. Press "Reset" to play again.`
      );
    }
  } else {
    counterHandler(++counter);
  }
};

export default moveHandler;
