import React from "react";
import Grid from "../../flow-ui/Grid";
import { Grid as GridFactory } from "../../factories/grid";

const data = GridFactory({ height: 10, width: 3 });

const gridProps = {
  cellProps: {
    length: 40,
    color: "green"
  },
  dotsVisible: true,
  dotProps: {
    color: "blue",
    diameter: 5
  },
  numbering: false,
  rootCoords: [15, 25],
  data
};

const Grid1 = () => <Grid {...gridProps} />;

export default Grid1;
