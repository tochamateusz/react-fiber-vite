import ReactDOM from "react-dom/client";
import "./index.css";
import { Box } from "./App";
import { Canvas } from "@react-three/fiber";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <div
    style={{
      width: "50vw",
      height: "75vh",
      margin: "0 25vw",
    }}
  >
    <Canvas flat linear>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  </div>,
);
