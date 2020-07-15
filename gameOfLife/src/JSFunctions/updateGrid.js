import updateNeighbours from "./updateNeighbours";
import updateCell from "./updateCell";

function updateGrid(grid, gridHandler) {
  let updatedGrid = JSON.parse(JSON.stringify(grid));

  grid.forEach((cell) => {
    let { row, column, value } = cell;

    const neighbours = updateNeighbours(row, column, grid);
    updatedGrid = updateCell(neighbours, value, row, column, updatedGrid);
  });

  gridHandler(updatedGrid);
}
export default updateGrid;
