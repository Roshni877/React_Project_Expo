import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text, MeshDistortMaterial } from "@react-three/drei";

function LogoMesh() {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.y = time * 0.5;
    meshRef.current.rotation.x = Math.sin(time) * 0.2;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <MeshDistortMaterial
        color="#00d4ff"
        speed={2}
        distort={0.4}
        radius={1}
        wireframe
      />
      <Float speed={5} rotationIntensity={2} floatIntensity={2}>
        <Text
          position={[0, 0, 0.6]}
          fontSize={0.8}
          color="#ffffff"
          font="https://fonts.gstatic.com/s/syncopate/v12/pe0pMIuPIYBCpEV5eFdKvtKqbp5u.woff"
        >
          R
        </Text>
      </Float>
    </mesh>
  );
}

function ThreeLogo() {
  return (
    <div className="three-logo-container">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <LogoMesh />
      </Canvas>
    </div>
  );
}

export default ThreeLogo;
