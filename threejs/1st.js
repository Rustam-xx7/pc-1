const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "violet" });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#canvas"), antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);

let clock = new THREE.Clock();
function animate() {
  window.requestAnimationFrame(animate);
  renderer.render(scene, camera); // this line actually renders the scene
  mesh.rotation.y = clock.getElapsedTime()*2;
  // mesh.rotation.y += 0.01; // all rotation angles are in radians
}
animate();