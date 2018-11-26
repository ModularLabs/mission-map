interface CellArgs {
  isHighlighted: boolean;
}

export function Cell(cellArgs: CellArgs) {
  return { isHighlighted: cellArgs.isHighlighted };
}

// export function Row({ width = 2 }) {
//   const row = [];
//   for (let i = 0; i < width; i++) {
//     const cell = new Cell({});
//     row.push(cell);
//   }
//   return row;
// }

// export function Grid({ height = 2, width = 3 }) {
//   const grid = [];
//   for (let i = 0; i < height; i++) {
//     const row = new Row({ width });
//     grid.push(row);
//   }
//   return grid;
// }

export default {};
