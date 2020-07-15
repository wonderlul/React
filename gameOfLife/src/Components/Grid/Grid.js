import React from "react";

import { Grid, Cell } from "./Grid.styles.js";

function GridModule({ grid, gridDimension }) {
  let id = 0;
  return (
    <Grid gridDimension={gridDimension}>
      {grid.map((cell) => (
        <Cell key={++id} type={cell.value}></Cell>
      ))}
    </Grid>
  );
}

export default GridModule;
