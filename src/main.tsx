import ReactDOM from "react-dom/client";
import "./index.css";
import { Box } from "./App";
import { Canvas } from "@react-three/fiber";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Box position={[-1.2, 0, 0]} />
    <Box position={[1.2, 0, 0]} />
  </Canvas>,
);
