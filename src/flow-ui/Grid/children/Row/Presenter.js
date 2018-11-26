import React from "react";
import Cell from "../Cell";

export default ({ cellProps, rowData, rootCoords }) => {
  const { length: cellLength } = cellProps;

  const array = [];
  for (let i = 0; i < rowData.length; i++) {
    array.push(null);
  }
  return (
    <g transform={`translate(${rootCoords[0]} ${rootCoords[1]})`}>
      {array.map((_, i) => {
        const newCellProps = {
          ...cellProps,
          coords: [cellLength * i, 0]
        };
        return <Cell {...newCellProps} key={i} />;
      })}
    </g>
  );
};
