import React from "react";

export default ({ length = 10, color = "black", coords = [0, 0] }) => (
  <rect
    className="cell"
    height={length}
    width={length}
    fill={color}
    transform={`translate(${coords[0]} ${coords[1]})`}
    style={{ stroke: "black", strokeWidth: 1, rx: "10", ry: "10" }}
  />
);
