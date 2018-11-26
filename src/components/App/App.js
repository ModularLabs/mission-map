import * as React from "react";
import Hello from "../Hello";
import Grid1 from "../Grid1";
import { Canvas } from "flow-ui-react";

const App = () => (
  <div>
    <Hello name="TypeScript" enthusiasmLevel={10} />
    <Canvas>
      <Grid1 />
    </Canvas>
  </div>
);

export default App;
