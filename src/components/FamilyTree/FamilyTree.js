import React from "react";
import { Tree } from "flow-ui-react";
import data from "./data";

const svgWidth = 400;
const svgHeight = 1000;

const svgAttributes = {
  width: svgWidth,
  height: svgHeight,
  style: { font: "10px sans-serif", stroke: "black", strokeWidth: 1 },
  userselect: "none"
};
const containerAttributes = {
  style: { border: "1px solid black", position: "absolute" }
};
const treeProps = {
  direction: "down",
  rootPosition: [svgWidth / 2, svgHeight / 2],
  spacing: {
    parentChild: 100,
    sibling: 20
  },
  nodeDiameter: 10,
  data
};

const FamilyTree = () => (
  <div {...containerAttributes}>
    <svg {...svgAttributes}>{<Tree {...treeProps} />}</svg>
  </div>
);

export default FamilyTree;
