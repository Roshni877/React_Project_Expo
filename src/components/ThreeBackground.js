import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ActiveParticles() {
  const ref = useRef();
  const { mouse, viewport } = useThree();
  
  const count = 10000;
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 20;
      p[i * 3 + 1] = (Math.random() - 0.5) * 20;
      p[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return p;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Smoothly follow mouse
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, mouse.y * 0.2, 0.1);
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, mouse.x * 0.2, 0.1);
    
    // Constant drift
    ref.current.rotation.z += 0.001;
    
    // Pulsing effect
    ref.current.scale.setScalar(1 + Math.sin(time * 0.5) * 0.05);
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00f2ff"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.5}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function ThreeBackground() {
  return (
    <div className="three-bg-container">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <color attach="background" args={["#00050a"]} />
        <ActiveParticles />
        <fog attach="fog" args={["#00050a", 1, 5]} />
      </Canvas>
    </div>
  );
}

export default ThreeBackground;
