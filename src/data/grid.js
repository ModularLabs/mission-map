import { Cell } from "../factories/grid";

const gridHeight = 2;
const gridWidth = 3;

const grid = [];
for (let i = 0; i < gridHeight; i++) {
  const row = [];
  for (let i = 0; i < gridHeight; i++) {
    row.push(new Cell({}));
  }
  grid.push(row);
}

export default grid;
