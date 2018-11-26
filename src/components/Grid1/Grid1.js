import React from "react";
import { Grid } from "flow-ui-react";

const gridProps = {
  cellProps: {
    length: 40,
    color: "green"
  },
  gridSize: [10, 20],
  dotsVisible: true,
  dotProps: {
    color: "blue",
    diameter: 5
  },
  numbering: false,
  rootCoords: [15, 25],
  data: [
    [{}, {}, {}, {}], // row 1
    [{}, {}, {}, {}], // row 2
    [{}, {}, {}, {}] // row 3
  ]
};

const Grid1 = () => <Grid {...gridProps} />;

export default Grid1;
