import { Cell, Row, Grid } from "./grid";

describe("grid factory functions", () => {
  describe("Cell", () => {
    it("creates a cell", () => {
      const cell1 = Cell({ isHighlighted: true });
      expect(cell1).toHaveProperty("isHighlighted", true);
    });

    it("has defaults", () => {
      const cell2 = Cell({});
      expect(cell2).toHaveProperty("isHighlighted", false);
    });
  });

  describe("Row", () => {
    it("creates an array of cells", () => {
      const row1 = Row({ width: 4 });
      expect(row1).toHaveLength(4);
    });

    it("has defaults", () => {
      const row2 = Row({});
      expect(row2).toHaveLength(0);
    });
  });

  describe("Grid", () => {
    it("creates an array of rows", () => {
      const grid1 = Grid({ height: 2, width: 4 });
      expect(grid1).toHaveLength(2);
    });

    it("has defaults", () => {
      const grid2 = Grid({});
      expect(grid2).toHaveLength(0);
    });
  });
});
