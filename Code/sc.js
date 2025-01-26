console.log("puta");
// Create the scene and camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
scene.background = new THREE.Color(0xffffff);
// Create the WebGL renderer and add it to the DOM
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true; // Enable shadow map
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Use soft shadows
document.body.appendChild(renderer.domElement);

// Create a plane to receive shadows
const planeGeometry = new THREE.PlaneGeometry(500, 500);
const planeMaterial = new THREE.ShadowMaterial({ opacity: 0.5 });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = - Math.PI / 2; // Rotate the plane to be horizontal
plane.position.y = -2; // Lower the plane
plane.receiveShadow = true; // Enable receiving shadows
scene.add(plane);

// Create a cube to cast shadows
const cubeGeometry = new THREE.BoxGeometry();
const cubeMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.y = 2; // Place the cube above the plane
cube.castShadow = true; // Enable casting shadows
scene.add(cube);

// Add a directional light with shadow
const directionalLight = new THREE.DirectionalLight(0xCDBA6, 10);
directionalLight.position.set(5, 5, 5); // Position the light above and to the right
directionalLight.castShadow = true; // Enable shadow casting
scene.add(directionalLight);

// Set up camera position
camera.position.z = 5;

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate the cube for effect
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // Render the scene
    renderer.render(scene, camera);
}

animate();
