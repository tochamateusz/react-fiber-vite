import ReactDOM from "react-dom/client";

import * as THREE from "three";
import "./index.css";
import { Canvas } from "@react-three/fiber";

import "./exercise/geometry";
import { camera, scene, size } from "./exercise/geometry";
import { Box } from "./App";

const pos = new THREE.Vector3(0, 1, -0.5);
console.debug(pos);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <div
    style={{
      width: "75vw",
      height: "75vh",
      margin: "0 25vw",
    }}
  >
    <Canvas>
      {/* <ambientLight /> */}
      <pointLight position={pos} />
      <Box position={pos} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  </div>,
);

const canvas = document.getElementById("root");
console.debug({ canvas });
if (canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(size.width, size.height);

  renderer.render(scene, camera);
}
