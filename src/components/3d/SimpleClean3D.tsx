import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { Fallback2D } from './Fallback2D';

// Minimalist, Elegant 3D Orb with Gentle Floating Rings & Subtle Particles
const CleanOrb: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    // Gentle continuous rotation
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }
    if (coreRef.current) {
      coreRef.current.rotation.x += delta * 0.1;
      coreRef.current.rotation.y -= delta * 0.15;
    }
    if (ring1Ref.current) ring1Ref.current.rotation.z += delta * 0.12;
    if (ring2Ref.current) ring2Ref.current.rotation.x += delta * 0.08;
    if (ring3Ref.current) ring3Ref.current.rotation.y += delta * 0.1;

    // Smooth subtle mouse parallax
    const mouseX = (state.pointer.x * Math.PI) / 10;
    const mouseY = (state.pointer.y * Math.PI) / 10;
    if (groupRef.current) {
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, mouseY, 0.05);
      groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, -mouseX, 0.05);
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.4}>
        
        {/* 1. Core Glowing Sphere */}
        <mesh>
          <sphereGeometry args={[1.3, 32, 32]} />
          <meshStandardMaterial
            color="#0077B6"
            emissive="#00A3E0"
            emissiveIntensity={1.8}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>

        {/* 2. Delicate Wireframe Shell */}
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[1.65, 1]} />
          <meshStandardMaterial
            color="#00D2FF"
            wireframe
            emissive="#00D2FF"
            emissiveIntensity={1.2}
            transparent
            opacity={0.6}
          />
        </mesh>

        {/* 3. Sleek Precision Orbital Rings */}
        <mesh ref={ring1Ref} rotation={[Math.PI / 2 + 0.2, 0.1, 0]}>
          <torusGeometry args={[2.2, 0.018, 16, 80]} />
          <meshBasicMaterial color="#00D2FF" transparent opacity={0.7} />
        </mesh>

        <mesh ref={ring2Ref} rotation={[Math.PI / 3, -0.2, 0.2]}>
          <torusGeometry args={[2.5, 0.015, 16, 80]} />
          <meshBasicMaterial color="#38BDF8" transparent opacity={0.5} />
        </mesh>

        <mesh ref={ring3Ref} rotation={[-Math.PI / 4, 0.3, 0]}>
          <torusGeometry args={[2.8, 0.012, 16, 80]} />
          <meshBasicMaterial color="#818CF8" transparent opacity={0.4} />
        </mesh>

        {/* 4. Small Satellite Nodes (Clean & Minimal) */}
        <group rotation={[0.4, 0, 0]}>
          <mesh position={[2.2, 0, 0]}>
            <sphereGeometry args={[0.12, 16, 16]} />
            <meshStandardMaterial color="#00D2FF" emissive="#00D2FF" emissiveIntensity={2} />
          </mesh>
          <mesh position={[-2.5, 0.5, 0]}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial color="#38BDF8" emissive="#38BDF8" emissiveIntensity={2} />
          </mesh>
          <mesh position={[0, -2.8, 0.5]}>
            <sphereGeometry args={[0.11, 16, 16]} />
            <meshStandardMaterial color="#818CF8" emissive="#818CF8" emissiveIntensity={2} />
          </mesh>
        </group>

      </Float>
    </group>
  );
};

// Subtle ambient particle dust (Very light & non-distracting)
const SubtleParticles: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = React.useMemo(() => {
    const count = 70;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [new THREE.Color('#00D2FF'), new THREE.Color('#38BDF8'), new THREE.Color('#FFFFFF')];

    for (let i = 0; i < count; i++) {
      const r = 2.0 + Math.random() * 3.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);

      const chosen = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = chosen.r;
      col[i * 3 + 1] = chosen.g;
      col[i * 3 + 2] = chosen.b;
    }

    return [pos, col];
  }, []);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.03;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={colors.length / 3} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.05} vertexColors transparent opacity={0.6} blending={THREE.AdditiveBlending} />
    </points>
  );
};

export const SimpleClean3D: React.FC = () => {
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setUseFallback(true);
    } catch {
      setUseFallback(true);
    }
  }, []);

  if (useFallback) {
    return <Fallback2D />;
  }

  return (
    <div className="relative h-[420px] sm:h-[480px] lg:h-[540px] w-full select-none flex items-center justify-center">
      <Suspense fallback={<Fallback2D />}>
        <Canvas
          camera={{ position: [0, 0, 6.8], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          className="h-full w-full"
        >
          <ambientLight intensity={0.8} />
          <directionalLight position={[10, 10, 10]} intensity={1.8} color="#FFFFFF" />
          <pointLight position={[-8, -8, -8]} intensity={0.6} color="#00D2FF" />
          <pointLight position={[0, 0, 0]} intensity={2.0} color="#0077B6" distance={8} />

          <CleanOrb />
          <SubtleParticles />
        </Canvas>
      </Suspense>
    </div>
  );
};
