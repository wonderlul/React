class positionChecker {
  constructor() {
    this.isStartingPosition = undefined;
    this.isHundred = undefined;
    this.isY = false;
    this.isX = false;
    this.isXorYagain = false;
  }
  check({ startingPosition, ballPosition }, moves) {
    if (
      ballPosition.row === startingPosition.row &&
      ballPosition.column === startingPosition.column
    ) {
      this.isStartingPosition = true;
    } else if (moves === 100) {
      this.isHundred = true;
    }
  }
  obstacleCheck({ bounceBoard, ballPosition }, { currentCoordinates }) {
    this.isY = false;
    this.isX = false;

    switch (true) {
      case bounceBoard[ballPosition.row + currentCoordinates.row][
        ballPosition.column + currentCoordinates.column
      ] === "Y":
        this.isY = true;
        break;
      case bounceBoard[ballPosition.row + currentCoordinates.row][
        ballPosition.column + currentCoordinates.column
      ] === "X":
        this.isX = true;
    }
  }

  moveAfter(
    { bounceBoard, ballPosition },
    { previousCoordinates, currentCoordinates }
  ) {
    this.previousBallPosition = {};
    this.isXorYagain = false;

    if (
      bounceBoard[
        ballPosition.row + previousCoordinates.row + currentCoordinates.row
      ][
        ballPosition.column +
          previousCoordinates.column +
          currentCoordinates.column
      ] === "X" ||
      bounceBoard[
        ballPosition.row + previousCoordinates.row + currentCoordinates.row
      ][
        ballPosition.column +
          previousCoordinates.column +
          currentCoordinates.column
      ] === "Y"
    ) {
      this.isXorYagain = true;
    }
  }
}

export default positionChecker;
