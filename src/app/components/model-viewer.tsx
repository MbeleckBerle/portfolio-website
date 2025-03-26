"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useEffect, useState, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Component to rotate the camera slowly
const RotatingCamera: React.FC = () => {
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  useFrame(({ camera }) => {
    if (camera instanceof THREE.PerspectiveCamera) {
      camera.position.x = Math.sin(Date.now() * 0.0001) * 12;
      camera.position.z = Math.cos(Date.now() * 0.0001) * 14;
      camera.lookAt(0, 0, 0);
      cameraRef.current = camera;
    }
  });

  return null;
};

export const ModelViewer: React.FC = () => {
  const [model, setModel] = useState<THREE.Group | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Load model only on client side
      const gltf = new GLTFLoader();
      gltf.load("/models/desktop.glb", (gltfData) => {
        setModel(gltfData.scene);
      });
    }
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-0">
      <Canvas className="w-full h-full" camera={{ position: [0, 10, 50] }}>
        <ambientLight intensity={0.5} />
        <pointLight
          position={[-10, -10, -10]}
          color="#48cc90"
          intensity={5000}
        />
        <pointLight position={[10, 10, 10]} color="#36e2e2" intensity={5000} />
        <RotatingCamera />
        {model && <primitive object={model} scale={[1.5, 1.5, 1.5]} />}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};
