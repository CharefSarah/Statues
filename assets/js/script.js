/* ----------------------------- Creation Scene ----------------------------- */
const scene = new THREE.Scene();

/* ----------------------------- Creation Camera ---------------------------- */
const fov = 45;
// Variable pour changer le ratio plus facilement
const aspectRatio = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(fov, aspectRatio);
//TOUJOURS ajouter ce qu'on créé a la scene.
camera.position.y = -8.5;
camera.position.x = -2;
camera.position.z = 13.5;


// gui.add(camera.position, 'x', -100, 100).step(0.5)
// gui.add(camera.position, 'y', -100, 100).step(0.5)
// gui.add(camera.position, 'z', -100, 100).step(0.5)
// gui.add(camera.rotation, 'y', -2, 2).step(0.1)
// gui.add(camera.rotation, 'x', -2, 2).step(0.1)




scene.add(camera)


var gltfLoader = new THREE.GLTFLoader();
var global_ibex;

var mymodel = gltfLoader.load('assets/render/scene.gltf', function (gltf) {
    ibex = gltf.scene;
    global_ibex = ibex;
    scene.add(ibex)
});

/* ---------------------------- Création Renderer --------------------------- */
const renderer = new THREE.WebGLRenderer({
    alpha: 'true'
});

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.append(renderer.domElement);

const color = 0x0416B4;
const intensity = 2;
const light = new THREE.DirectionalLight(color, intensity);
light.target.position.set(-4, 2, 1.6);
scene.add(light);
scene.add(light.target);

const color2 = 0x28293A;
const intensity2 = 2;
const light2 = new THREE.DirectionalLight(color2, intensity2);
light2.target.position.set(4.7, -0.5, 1.5);
scene.add(light2);
scene.add(light2.target);




const color3 = 0x6CF6FF;
const intensity3 = 2;
const light3 = new THREE.DirectionalLight(color3, intensity3);
light3.target.position.set(-50, 50, 1.5);
scene.add(light3);
scene.add(light3.target);





renderer.gammaOutput = true

document.querySelector('.btn1').addEventListener("click", function () {
    var tl = gsap.timeline();
    tl.to(camera.rotation, {
        y: 0.5,
        x: 0,
        duration: 1
    }, 1);
    tl.to(camera.position, {
        x: -2,
        y: -9,
        z: 12, 
        duration: 3.5, // Durée
        ease: Power4.easeOut // Easing
    },1);
});


document.querySelector('.btn2').addEventListener("click", function () {
    var tl = gsap.timeline();
    tl.to(camera.rotation, {
        y:0.5,
        x: 0,
        duration: 1
    }, 1)
    tl.to(camera.position, {
        x: 0,
        y: -8.5,
        z: 13,
        duration: 3.5, // Durée
        ease: Power4.easeOut // Easing
    },1);
});

document.querySelector('.btn3').addEventListener("click", function () {
    var tl = gsap.timeline();
    tl.to(camera.rotation, {
        y: 1,
        x: 0,
        duration: 1
    },1)
    tl.to(camera.position, {
        x: 2,
        y: -9,
        z: 12,
        duration: 3.5, // Durée
        ease: Power4.easeOut // Easing
    },1);
});


const tick = () => {
    requestAnimationFrame(tick);
    // ibex.rotation.y += -0.01;
    renderer.gammaOutput = true
    renderer.render(scene, camera)
}

tick();