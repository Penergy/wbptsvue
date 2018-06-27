import * as THREE from 'three';
console.log("Hello, This is the Vue Project built by Webpack and Typescript");
// global variables
var renderer;
var scene;
var camera;

function component() {
   // create a scene, that will hold all our elements such as objects, cameras and lights.
   scene = new THREE.Scene();
   // create a camera, which defines where we're looking at.
   camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
   // position and point the camera to the center of the scene
   camera.position.x = 0;
   camera.position.y = 0;
   camera.position.z = 30;
   camera.lookAt(scene.position);

   // create a render, sets the background color and the size
   renderer = new THREE.WebGLRenderer();
   renderer.setClearColor(0xffffff, 1.0);
   renderer.setSize(window.innerWidth, window.innerHeight);

  // create a triangle and add to scene
  var triangleGeometry = new THREE.Geometry();
  //vertices
  triangleGeometry.vertices.push(new THREE.Vector3(5,5,0));
  triangleGeometry.vertices.push(new THREE.Vector3(-5,5,0));
  triangleGeometry.vertices.push(new THREE.Vector3(5,-5,0));
  
  // face
  triangleGeometry.faces.push(new THREE.Face3(0,1,2));
  // triangleGeometry.faces.push(new THREE.Face3(2,1,0));
  var triangleMaterial = new THREE.MeshBasicMaterial({
      color: 0x2685AA,
      // side: THREE.DoubleSide
      side: THREE.FrontSide
  });
  var triangleMesh = new THREE.Mesh(triangleGeometry, triangleMaterial);
  scene.add(triangleMesh);

  var element = document.createElement("div");
  renderer.render(scene, camera);
  element.appendChild(renderer.domElement);
    
  return element;
}

document.body.appendChild(component());

