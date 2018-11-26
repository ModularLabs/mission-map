import React from "react";

const Canvas = ({ children }) => (
  <svg style={{ height: 500, width: 500 }}>{children}</svg>
);

export default Canvas;
