import {
    Scene,
    Color,
    PerspectiveCamera,
    WebGLRenderer,
} from 'https://unpkg.com/three/build/three.module.js';
import { OBJLoader } from 'https://cdn.jsdelivr.net/npm/three@0.132.2/examples/jsm/loaders/OBJLoader.js';     //https://cdn.jsdelivr.net/npm/three@0.132.2/examples/jsm/loaders/OBJLoader.js

const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new Scene();
scene.background = new Color(0xdddddd);

const camera = new PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    2000
);
camera.rotation.y = (45 / 180) * Math.PI;
camera.position.x = 800;
camera.position.y = 100;
camera.position.z = 1000;

const objloader = new OBJLoader();
objloader.setPath('../img/');
objloader.load('Bumbo.obj', (object) => {
    object.scale.set(50, 50, 50);
    scene.add(object);
}, (xhr) => {
    console.log(
        `Carregando Objeto: ${(xhr.loaded / xhr.total) * 100}% carregados.`
    );
}, (err) => {
    console.log(`Aconteceu um erro: ${err}`);
});

const animate = function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
};

animate();