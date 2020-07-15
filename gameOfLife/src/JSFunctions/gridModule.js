import getGrid from "./getGrid";

class Grid {
  constructor() {
    this.grid = undefined;
  }

  getRandomGrid(dimension) {
    this.grid = getGrid(dimension);
  }
}

export default Grid;
