import * as THREE from "three";

const scene = new THREE.Scene();

const geomtery = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red" });
const mesh = new THREE.Mesh(geomtery, material);

scene.add(mesh);
const size = {
  width: 800,
  height: 600,
};

const camera = new THREE.PerspectiveCamera(90, size.width, size.height);

scene.add(camera);

export { scene, size, camera };
