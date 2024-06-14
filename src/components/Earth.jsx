import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import worldMapImage from '../assets/world-map.png'; // Import the image

const Earth = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true }); // Transparent background
    renderer.setSize(200, 200); // Set canvas size

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 200 / 200, 0.1, 1000);
    camera.position.z = 5; // Adjust camera position

    const geometry = new THREE.SphereGeometry(2, 32, 32);

    // Load the world map image
    const loader = new THREE.TextureLoader();
    const texture = loader.load(worldMapImage); // Load the image

    const material = new THREE.MeshBasicMaterial({
      map: texture, // Apply the texture to the material
      transparent: true, // Allow transparency
    });

    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    function animate() {
      requestAnimationFrame(animate);
      sphere.rotation.y += 0.01; // Rotate sphere
      renderer.render(scene, camera);
    }

    animate();

    return () => {
      renderer.dispose(); // Clean up resources
    };
  }, []);

  return (
    <canvas ref={canvasRef} />
  );
};

export default Earth;