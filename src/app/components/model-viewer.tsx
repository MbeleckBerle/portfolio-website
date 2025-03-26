"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useEffect, useState, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Component to rotate the camera slowly
const RotatingCamera: React.FC = () => {
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  useFrame(({ camera }) => {
    if (camera instanceof THREE.PerspectiveCamera) {
      camera.position.x = Math.sin(Date.now() * 0.0001) * 12; // Rotate further
      camera.position.z = Math.cos(Date.now() * 0.0001) * 14; // Increased Z distance for more zoom-out
      camera.lookAt(0, 0, 0); // Keep looking at the model
      cameraRef.current = camera;
    }
  });

  return null;
};

export const ModelViewer: React.FC = () => {
  const [modelUrl, setModelUrl] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setModelUrl(
        new URL("/models/desktop.glb", window.location.origin).toString()
      );
    }
  }, []);

  const myModel = modelUrl ? useLoader(GLTFLoader, modelUrl) : null;

  if (!myModel) {
    return <div>Loading...</div>;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full z-0">
      <Canvas
        className="w-full h-full"
        camera={{ position: [0, 10, 50] }} // Adjusted camera position to zoom out further
      >
        <ambientLight intensity={0.5} />
        <pointLight
          position={[-10, -10, -10]}
          color="#48cc90"
          intensity={5000}
        />
        <pointLight position={[10, 10, 10]} color="#36e2e2" intensity={5000} />
        {/* Auto-Rotating Camera */}
        <RotatingCamera />
        {/* Load 3D Model */}
        <primitive object={myModel.scene} scale={[1.5, 1.5, 1.5]} />
        {/* Orbit Controls (Enable Zoom) */}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};
