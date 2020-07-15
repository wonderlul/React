// function fillRandom(grid) {
//   for (var j = 0; j < grid.length - 1; j++) {
//     for (var k = 0; k < grid.length - 1; k++) {
//       let randomNumber = Math.round(Math.random());
//       if (randomNumber === 1) {
//         grid[j][k] = 1;
//       }
//     }
//   }
// }

// function fillRandom(grid1D, grid2D) {
//   grid1D.map((square) => {
//     let randomNumber = Math.round(Math.random());
//     if (randomNumber === 1) {
//       grid2D[square.row][square.column] = 1;
//     }
//   });
// }

function fillGrid(grid, quantity) {
  let alreadyPicked = {};

  for (let counter = 1; counter <= quantity; ) {
    let randomCell = [Math.floor(Math.random() * grid.length)];

    if (!alreadyPicked[randomCell]) {
      grid[randomCell].value = 1;
      counter++;
    }
    alreadyPicked[randomCell] = true;
  }
}

export default fillGrid;
