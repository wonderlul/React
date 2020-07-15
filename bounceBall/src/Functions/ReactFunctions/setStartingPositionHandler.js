const setStartingPositionHandler = (
  board,
  update,
  { updateHandler, startingPositionStatusHandler }
) => {
  update.setStartingPosition(board, { row: 1, column: 1 });

  board.bounceBoard.map((row, index) => {
    if (row.findIndex((element) => element === "Ball") !== -1) {
      board.ballPosition = {
        row: index,
        column: row.findIndex((element) => element === "Ball"),
      };
    }
  });
  updateHandler({ ...board });
  startingPositionStatusHandler(true);
};

export default setStartingPositionHandler;
