import React from "react";
import Row from "./children/Row";

export default ({ rootCoords, cellProps, data }) => {
  const gridHeight = data.length;
  const gridWidth = data[0].length;

  const cellLength = cellProps.length;

  return (
    <g transform={`translate(${rootCoords[0]} ${rootCoords[1]})`}>
      <rect
        className="background"
        height={cellLength * gridHeight}
        width={cellLength * gridWidth}
        fill="red"
      />
      {data.map((rowData, i) => {
        const yRootCoord = cellLength * i;
        return (
          <Row
            key={i}
            rowData={rowData}
            rootCoords={[0, yRootCoord]}
            cellProps={cellProps}
          />
        );
      })}
    </g>
  );
};
