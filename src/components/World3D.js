import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ScrollControls, useScroll, Sky, Stars, Environment } from "@react-three/drei";
import * as THREE from "three";
import { useNavigate } from "react-router-dom";

// Components for the world
import Island from "./world/Island";
import Boat from "./world/Boat";
import BeachHouse from "./world/BeachHouse";
import InteractiveAssets from "./world/InteractiveAssets";
import { Waves } from "./Coastal3D";

function Scene({ isDark }) {
  const scroll = useScroll();
  const navigate = useNavigate();

  useFrame((state) => {
    const offset = scroll.offset;
    
    // Camera Path Logic - traveling across the coastline
    state.camera.position.z = THREE.MathUtils.lerp(25, -35, offset);
    state.camera.position.y = THREE.MathUtils.lerp(6, 4, offset);
    state.camera.position.x = THREE.MathUtils.lerp(-2, 8, offset);
    state.camera.lookAt(0, 0, state.camera.position.z - 15);
  });

  return (
    <>
      <ambientLight intensity={isDark ? 0.3 : 1} />
      <directionalLight 
        position={[10, 20, 10]} 
        intensity={isDark ? 0.5 : 2} 
        castShadow 
        color={isDark ? "#1e293b" : "#ffffff"}
      />
      
      <Sky 
        distance={450000} 
        sunPosition={isDark ? [0, -1, 0] : [1, 0.2, 1]} 
        inclination={0} 
        azimuth={0.25} 
      />
      {isDark && <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />}
      
      <Suspense fallback={null}>
        {/* Realistic Global Water */}
        <group position={[0, -0.5, 0]}>
          <Waves isDark={isDark} />
        </group>

        {/* 3D Gateways */}
        <Boat position={[6, -1.8, 18]} />
        <Island position={[0, -2, -5]} isDark={isDark} />
        <BeachHouse position={[12, -2, -28]} />
        <InteractiveAssets isDark={isDark} />
        
        <Environment preset={isDark ? "night" : "sunset"} />
      </Suspense>
      
      <fog attach="fog" args={[isDark ? "#020a13" : "#fef3c7", 5, 50]} />
    </>
  );
}

function World3D() {
  const [isDark, setIsDark] = useState(document.documentElement.getAttribute("data-theme") === "dark");

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.getAttribute("data-theme") === "dark");
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="world-3d-container">
      <Canvas shadows dpr={[1, 2]}>
        <ScrollControls pages={4} damping={0.3}>
          <Scene isDark={isDark} />
        </ScrollControls>
      </Canvas>
    </div>
  );
}

export default World3D;
