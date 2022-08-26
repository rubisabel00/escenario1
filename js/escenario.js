
const scene = new THREE.Scene();
scene.background = new THREE.Color('skyblue');
scene.fog = new THREE.Fog( 'black', 2, 7 ); 

var loader = new THREE.TextureLoader();
loader.load('../imagenes/background.jpg', function(texture){
    scene.background = texture;
});



const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement);

//geometrias


const geometry = new THREE.BoxGeometry(1,1,1);
//MesBasicMaterial
//const material = new THREE.MeshBasicMaterial( { color: 0x00ff00} ); 
/*
// MeshNormalMaterial
const material = new THREE.MeshNormalMaterial();
material.flatShading = true;
material.wireframe = false;
material. transparent = true;
material.opacity = 0.2;*/

// MeshMatcapMaterial
const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load('../imagenes/background.jpg');
const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flatShading = true;

//
const cube = new THREE.Mesh(geometry, material );
scene.add(cube);
 

camera.position.z = 4;


//animacion
function animate(){
    requestAnimationFrame( animate);
    cube.rotation.y += 0.01;
    cube.rotation.x += 0.01;
    renderer.render(scene, camera);
}
animate();
