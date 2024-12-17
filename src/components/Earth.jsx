import { useRef, useEffect, useContext } from 'react';
import * as THREE from 'three';
import worldMapImage from '../assets/world-map.png';
import { UniversalContext } from '../context/UniversalContext';
import overrideConsoleWarn from '../hooks/overrideConsoleWarn'

const Earth = () => {
  
  const { getValue } = useContext(UniversalContext);
  const canvasRef = useRef(null);
  const primaryColor = getValue('primary');
  useEffect(() => {
    
    // Get the canvas element from the ref
    const canvas = canvasRef.current;

    // Create a WebGL renderer
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true }); // alpha: true for transparent background
    renderer.setSize(210, 210); // Set the size of the canvas

    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, 200 / 200, 0.1, 1000);
    camera.position.z = 5; // Position the camera

    // Create a sphere geometry
    const geometry = new THREE.SphereGeometry(2, 32, 32);

    // Load the texture
    const loader = new THREE.TextureLoader();
    const texture = loader.load(worldMapImage);

    // Create a material with the texture
    const material = new THREE.MeshPhongMaterial({
      map: texture,
      transparent: true,
      shininess: 10,
    });

    // Create a mesh (sphere)
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere); // Add the sphere to the scene

    // Add lights
    const ambientLight = new THREE.AmbientLight(0x404090); // Soft white light
    scene.add(ambientLight);
    // Convert hex color to integer
    const hexToInteger = (hex) => parseInt(hex.replace(/^#/, ''), 16);
    const primaryColorInt = hexToInteger(primaryColor);

    const directionalLight = new THREE.DirectionalLight(primaryColorInt, 10); 
    directionalLight.position.set(0, 0, 100); // Position the light to point towards the sphere
    directionalLight.target = sphere; // Set the light's target to the sphere
    directionalLight.castShadow = false; // Disable shadow mapping
    scene.add(directionalLight);

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      sphere.rotation.y += 0.01; // Rotate the sphere
      overrideConsoleWarn();
      
      // Make sure the material is used in the scene
      material.uniforms_need_update = true;
      
      renderer.render(scene, camera); // Render the scene
      
    }

    animate(); // Start the animation loop

    // Cleanup function
    return () => {
      renderer.dispose(); // Dispose of the renderer when the component unmounts
    };
    
  }, [getValue('primary')]);

  // Return the canvas element
  return <canvas ref={canvasRef} />;
};

export default Earth;