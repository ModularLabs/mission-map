interface CellArgs {
  isHighlighted?: boolean;
}

export function Cell({ isHighlighted = false }: CellArgs) {
  return { isHighlighted };
}

interface RowArgs {
  width?: number;
}

export function Row({ width = 0 }: RowArgs) {
  const row = [];
  for (let i = 0; i < width; i++) {
    const cell = Cell({});
    row.push(cell);
  }
  return row;
}

interface RowArgs {
  height?: number;
  width?: number;
}

export function Grid({ height = 0, width = 0 }) {
  const grid = [];
  for (let i = 0; i < height; i++) {
    const row = Row({ width });
    grid.push(row);
  }
  return grid;
}

export default {};
