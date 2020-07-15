class Board {
  constructor() {
    this.bounceBoard = [
      ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
      ["X", "0", "0", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
      ["X", "0", "0", "0", "X", "X", "X", "X", "X", "X", "X", "X"],
      ["X", "0", "0", "0", "0", "X", "X", "X", "X", "X", "X", "X"],
      ["X", "0", "0", "0", "0", "0", "X", "X", "X", "X", "X", "X"],
      ["X", "0", "0", "0", "0", "0", "0", "X", "X", "X", "X", "X"],
      ["X", "0", "0", "0", "0", "0", "0", "0", "X", "X", "X", "X"],
      ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
      ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
      ["X", "0", "0", "0", "X", "0", "0", "0", "0", "Y", "0", "X"],
      ["X", "0", "0", "X", "X", "X", "0", "0", "0", "0", "0", "X"],
      ["X", "0", "0", "0", "X", "0", "0", "0", "0", "0", "0", "X"],
      ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
      ["X", "0", "0", "Y", "0", "0", "0", "0", "0", "0", "0", "X"],
      ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
      ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
    ];
    this.startingPosition = undefined;
    this.ballPosition = undefined;
  }
}

export default Board;
