import * as THREE from "three";
// orbit controls gives the ability to move the object using mouse
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
// to load gltf models
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

//texture loader
let loader = new THREE.TextureLoader();
let colorloaded = loader.load("./boxTexture/color.jpg");
let roughnessloaded = loader.load("./boxTexture/roughness.jpg");
let normalloaded = loader.load("./boxTexture/normal.png");
let heightloaded = loader.load("./boxTexture/height.png");

//model loader
const gltfLoader = new GLTFLoader();
gltfLoader.load("./boxTexture/porsche911.glb", function (gltf) {
  scene.add(gltf.scene);
})

const geometry = new THREE.BoxGeometry(0, 0, 1); // Box Geometry

// const geometry = new THREE.SphereGeometry( 10, 32, 10 ); // Sphere Geometry

// Replace material to see lighting (wireframe ignores shading)
const material = new THREE.MeshStandardMaterial({
  map: colorloaded,
  roughnessMap: roughnessloaded,
  normalMap: normalloaded,
  wireframe: false
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);



camera.position.z = 3;

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("canvas"),
  antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);

// Studio/render settings
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.5;
if ('outputColorSpace' in renderer) {
  renderer.outputColorSpace = THREE.SRGBColorSpace;
} else {
  renderer.outputEncoding = THREE.sRGBEncoding;
}

// Environment for subtle studio reflections
const pmrem = new THREE.PMREMGenerator(renderer);
const envMap = pmrem.fromScene(new RoomEnvironment(renderer), 0.04).texture;
scene.environment = envMap;

// Handle window resize, making every thinf responsive.
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  camera.aspect = window.innerWidth / window.innerHeight;// Update the aspect ratio
  camera.updateProjectionMatrix(); // when ever we change the camera properties, we need to update the projection matrix
})

const controls = new OrbitControls( camera, renderer.domElement );
controls.enableDamping = true; // for smooth movement
controls.dampingFactor = 0.01;

// GUI: mesh and material controls
const gui = new GUI({ title: 'Controls' });

// Mesh controls
const meshFolder = gui.addFolder('Mesh');
meshFolder.add(mesh, 'visible');
meshFolder.add(mesh, 'castShadow').name('castShadow');
meshFolder.add(mesh, 'receiveShadow').name('receiveShadow');

const posFolder = meshFolder.addFolder('Position');
posFolder.add(mesh.position, 'x', -10, 10, 0.01);
posFolder.add(mesh.position, 'y', -10, 10, 0.01);
posFolder.add(mesh.position, 'z', -10, 10, 0.01);

const rotFolder = meshFolder.addFolder('Rotation (rad)');
rotFolder.add(mesh.rotation, 'x', -Math.PI, Math.PI, 0.01);
rotFolder.add(mesh.rotation, 'y', -Math.PI, Math.PI, 0.01);
rotFolder.add(mesh.rotation, 'z', -Math.PI, Math.PI, 0.01);

const scaleFolder = meshFolder.addFolder('Scale');
scaleFolder.add(mesh.scale, 'x', 0.01, 10, 0.01);
scaleFolder.add(mesh.scale, 'y', 0.01, 10, 0.01);
scaleFolder.add(mesh.scale, 'z', 0.01, 10, 0.01);

meshFolder.open();

// Material controls
const matFolder = gui.addFolder('Material');
const matParams = {
  color: `#${material.color.getHexString()}`,
  emissive: `#${material.emissive.getHexString?.() || '000000'}`,
  side: material.side,
  transparent: material.transparent,
  opacity: material.opacity,
  wireframe: material.wireframe,
  metalness: material.metalness ?? 0,
  roughness: material.roughness ?? 1,
  envMapIntensity: material.envMapIntensity ?? 1,
  normalScaleX: material.normalScale ? material.normalScale.x : 1,
  normalScaleY: material.normalScale ? material.normalScale.y : 1,
  useColorMap: !!material.map,
  useRoughnessMap: !!material.roughnessMap,
  useNormalMap: !!material.normalMap
};

matFolder.addColor(matParams, 'color').onChange(v => material.color.set(v));
matFolder.add(material, 'wireframe');
matFolder.add(material, 'metalness', 0, 1, 0.01);
matFolder.add(material, 'roughness', 0, 1, 0.01);
matFolder.add(material, 'envMapIntensity', 0, 5, 0.01);

matFolder.addColor(matParams, 'emissive').onChange(v => material.emissive.set(v));
if ('emissiveIntensity' in material) {
  matFolder.add(material, 'emissiveIntensity', 0, 10, 0.01);
}

matFolder.add(matParams, 'side', {
  Front: THREE.FrontSide,
  Back: THREE.BackSide,
  Double: THREE.DoubleSide
}).onChange(v => {
  material.side = Number(v);
  material.needsUpdate = true;
});

matFolder.add(material, 'transparent').onChange(v => {
  material.transparent = v;
  material.needsUpdate = true;
});
matFolder.add(material, 'opacity', 0, 1, 0.01);

const normalFolder = matFolder.addFolder('Normal');
normalFolder.add(matParams, 'normalScaleX', -2, 2, 0.01).onChange(v => {
  if (material.normalScale) material.normalScale.x = v;
});
normalFolder.add(matParams, 'normalScaleY', -2, 2, 0.01).onChange(v => {
  if (material.normalScale) material.normalScale.y = v;
});

const mapsFolder = matFolder.addFolder('Maps');
mapsFolder.add(matParams, 'useColorMap').name('colorMap').onChange(v => {
  material.map = v ? colorloaded : null;
  material.needsUpdate = true;
});
mapsFolder.add(matParams, 'useRoughnessMap').onChange(v => {
  material.roughnessMap = v ? roughnessloaded : null;
  material.needsUpdate = true;
});
mapsFolder.add(matParams, 'useNormalMap').onChange(v => {
  material.normalMap = v ? normalloaded : null;
  material.needsUpdate = true;
});

matFolder.open();

// Light helpers (declared here so animate() can reference them)
let keyHelper, fillHelper, rimHelper, keyShadowHelper;

function animate() {
  window.requestAnimationFrame(animate);

  controls.update(); // for orbit controls

  // Update light helpers if they exist
  if (keyHelper) keyHelper.update();
  if (fillHelper) fillHelper.update();
  if (rimHelper) rimHelper.update();
  if (keyShadowHelper) keyShadowHelper.update();

  renderer.render(scene, camera);
  //   mesh.rotation.y += 0.01;
}

animate();

// Studio lights: key, fill, rim, plus soft ambient
const ambient = new THREE.AmbientLight("yellow", 0.2);
scene.add(ambient);

const keyLight = new THREE.DirectionalLight("yellow", 2.0);
keyLight.position.set(10, 10, 10);
keyLight.castShadow = true;
keyLight.shadow.mapSize.set(2048, 2048);
keyLight.shadow.camera.near = 1;
keyLight.shadow.camera.far = 60;
keyLight.shadow.radius = 4;
scene.add(keyLight);

const fillLight = new THREE.DirectionalLight("yellow", 0.8);
fillLight.position.set(-10, 5, 10);
scene.add(fillLight);

const rimLight = new THREE.DirectionalLight("yellow", 1.2);
rimLight.position.set(-5, 10, -10);
scene.add(rimLight);

// Light helpers (ambient lights have no direction/position, so no helper)
keyHelper = new THREE.DirectionalLightHelper(keyLight, 0.75);
scene.add(keyHelper);

// Visualize the shadow frustum of the key light
keyShadowHelper = new THREE.CameraHelper(keyLight.shadow.camera);
scene.add(keyShadowHelper);

fillHelper = new THREE.DirectionalLightHelper(fillLight, 0.75);
scene.add(fillHelper);

rimHelper = new THREE.DirectionalLightHelper(rimLight, 0.75);
scene.add(rimHelper);

// Lights GUI
const lightFolder = gui.addFolder('Lights');

// Ambient
const ambientParams = { color: `#${ambient.color.getHexString()}` };
const ambientFolder = lightFolder.addFolder('Ambient');
ambientFolder.add(ambient, 'visible');
ambientFolder.add(ambient, 'intensity', 0, 5, 0.01);
ambientFolder.addColor(ambientParams, 'color').onChange(v => ambient.color.set(v));

// Key
const keyParams = { color: `#${keyLight.color.getHexString()}` };
const keyFolder = lightFolder.addFolder('Key');
keyFolder.add(keyLight, 'visible');
keyFolder.add(keyLight, 'intensity', 0, 10, 0.01);
keyFolder.addColor(keyParams, 'color').onChange(v => keyLight.color.set(v));
keyFolder.add(keyLight.position, 'x', -20, 20, 0.1);
keyFolder.add(keyLight.position, 'y', -20, 20, 0.1);
keyFolder.add(keyLight.position, 'z', -20, 20, 0.1);
keyFolder.add(keyLight, 'castShadow');
keyFolder.add(keyLight.shadow, 'bias', -0.01, 0.01, 0.0001).name('shadowBias');
keyFolder.add(keyLight.shadow, 'radius', 0, 10, 0.1).name('shadowRadius');
keyFolder.add(keyHelper, 'visible').name('helper');
keyFolder.add(keyShadowHelper, 'visible').name('shadowFrustum');

// Fill
const fillParams = { color: `#${fillLight.color.getHexString()}` };
const fillFolder = lightFolder.addFolder('Fill');
fillFolder.add(fillLight, 'visible');
fillFolder.add(fillLight, 'intensity', 0, 5, 0.01);
fillFolder.addColor(fillParams, 'color').onChange(v => fillLight.color.set(v));
fillFolder.add(fillLight.position, 'x', -20, 20, 0.1);
fillFolder.add(fillLight.position, 'y', -20, 20, 0.1);
fillFolder.add(fillLight.position, 'z', -20, 20, 0.1);
fillFolder.add(fillHelper, 'visible').name('helper');

// Rim
const rimParams = { color: `#${rimLight.color.getHexString()}` };
const rimFolder = lightFolder.addFolder('Rim');
rimFolder.add(rimLight, 'visible');
rimFolder.add(rimLight, 'intensity', 0, 5, 0.01);
rimFolder.addColor(rimParams, 'color').onChange(v => rimLight.color.set(v));
rimFolder.add(rimLight.position, 'x', -20, 20, 0.1);
rimFolder.add(rimLight.position, 'y', -20, 20, 0.1);
rimFolder.add(rimLight.position, 'z', -20, 20, 0.1);
rimFolder.add(rimHelper, 'visible').name('helper');