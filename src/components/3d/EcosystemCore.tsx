import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Html } from '@react-three/drei';
import * as THREE from 'three';

interface OrbitNodeProps {
  label: string;
  radius: number;
  speed: number;
  initialAngle: number;
  color: string;
  size: number;
}

const OrbitNode: React.FC<OrbitNodeProps> = ({ label, radius, speed, initialAngle, color, size }) => {
  const meshRef = useRef<THREE.Group>(null);
  const angleRef = useRef(initialAngle);

  useFrame((_, delta) => {
    if (meshRef.current) {
      angleRef.current += speed * delta;
      const x = Math.cos(angleRef.current) * radius;
      const z = Math.sin(angleRef.current) * radius;
      meshRef.current.position.set(x, Math.sin(angleRef.current * 2) * 0.4, z);
    }
  });

  return (
    <group ref={meshRef}>
      {/* Node Sphere */}
      <mesh>
        <sphereGeometry args={[size, 16, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.5}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Orbiting Beacon Glow Ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[size * 1.3, size * 1.6, 24]} />
        <meshBasicMaterial color={color} transparent opacity={0.4} side={THREE.DoubleSide} />
      </mesh>

      {/* Interactive Micro Label */}
      <Html distanceFactor={12} center position={[0, size + 0.35, 0]}>
        <div className="pointer-events-none select-none whitespace-nowrap rounded-md border border-sky-400/30 bg-navy-950/80 px-2 py-0.5 text-[10px] font-medium tracking-wide text-sky-200 backdrop-blur-md shadow-lg shadow-sky-950/50">
          {label}
        </div>
      </Html>
    </group>
  );
};

export const EcosystemCore: React.FC = () => {
  const coreRef = useRef<THREE.Group>(null);
  const shellRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<any>(null);
  const ring2Ref = useRef<any>(null);
  const ring3Ref = useRef<any>(null);

  // Orbit Rings geometry lines
  const orbit1Points = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 64; i++) {
      const theta = (i / 64) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(theta) * 2.2, 0, Math.sin(theta) * 2.2));
    }
    return new THREE.BufferGeometry().setFromPoints(pts);
  }, []);

  const orbit2Points = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 64; i++) {
      const theta = (i / 64) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(theta) * 3.4, 0, Math.sin(theta) * 3.4));
    }
    return new THREE.BufferGeometry().setFromPoints(pts);
  }, []);

  const orbit3Points = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 64; i++) {
      const theta = (i / 64) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(theta) * 4.6, 0, Math.sin(theta) * 4.6));
    }
    return new THREE.BufferGeometry().setFromPoints(pts);
  }, []);

  useFrame((state, delta) => {
    // Gentle continuous rotation
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.15;
    }
    if (shellRef.current) {
      shellRef.current.rotation.x += delta * 0.1;
      shellRef.current.rotation.y -= delta * 0.2;
    }
    if (ring1Ref.current) ring1Ref.current.rotation.z += delta * 0.08;
    if (ring2Ref.current) ring2Ref.current.rotation.z -= delta * 0.06;
    if (ring3Ref.current) ring3Ref.current.rotation.x += delta * 0.05;

    // Smooth subtle mouse parallax
    const targetX = (state.pointer.x * Math.PI) / 8;
    const targetY = (state.pointer.y * Math.PI) / 8;
    if (coreRef.current) {
      coreRef.current.rotation.x = THREE.MathUtils.lerp(coreRef.current.rotation.x, targetY, 0.05);
      coreRef.current.rotation.z = THREE.MathUtils.lerp(coreRef.current.rotation.z, -targetX, 0.05);
    }
  });

  return (
    <group ref={coreRef}>
      {/* 1. CENTRAL SAP NUCLEUS */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <group>
          {/* Inner Glowing Core */}
          <mesh>
            <sphereGeometry args={[0.9, 32, 32]} />
            <meshStandardMaterial
              color="#046BD2"
              emissive="#0085FF"
              emissiveIntensity={2.5}
              roughness={0.1}
              metalness={0.9}
            />
          </mesh>

          {/* Icosahedron Wireframe Shell */}
          <mesh ref={shellRef}>
            <icosahedronGeometry args={[1.25, 1]} />
            <meshStandardMaterial
              color="#00D2FF"
              wireframe
              emissive="#00D2FF"
              emissiveIntensity={1.2}
              transparent
              opacity={0.7}
            />
          </mesh>

          {/* Central Core Label */}
          <Html distanceFactor={10} center position={[0, 0, 0]}>
            <div className="pointer-events-none flex flex-col items-center justify-center">
              <span className="text-[11px] font-extrabold tracking-widest text-white drop-shadow-[0_0_8px_rgba(0,210,255,0.9)]">
                SAP S/4HANA
              </span>
              <span className="text-[8px] font-semibold tracking-wider text-cyan-200">
                INTELLIGENT CORE
              </span>
            </div>
          </Html>
        </group>
      </Float>

      {/* 2. GLOWING 3D ORBIT TRACK RINGS */}
      {/* Track 1 */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 2 + 0.2, 0.1, 0]}>
        <torusGeometry args={[2.2, 0.015, 16, 80]} />
        <meshBasicMaterial color="#0284C7" transparent opacity={0.4} />
      </mesh>
      {/* Track 2 */}
      <mesh ref={ring2Ref} rotation={[Math.PI / 2 - 0.3, 0.2, 0.1]}>
        <torusGeometry args={[3.4, 0.015, 16, 80]} />
        <meshBasicMaterial color="#38BDF8" transparent opacity={0.35} />
      </mesh>
      {/* Track 3 */}
      <mesh ref={ring3Ref} rotation={[Math.PI / 2 + 0.15, -0.25, 0.2]}>
        <torusGeometry args={[4.6, 0.015, 16, 80]} />
        <meshBasicMaterial color="#60A5FA" transparent opacity={0.3} />
      </mesh>

      {/* 3. ORBITING ECOSYSTEM NODES */}
      {/* Node 1: Cloud & BTP */}
      <OrbitNode
        label="SAP BTP & Cloud"
        radius={2.2}
        speed={0.4}
        initialAngle={0}
        color="#00D2FF"
        size={0.18}
      />
      {/* Node 2: Analytics & HANA */}
      <OrbitNode
        label="Real-Time Analytics"
        radius={2.2}
        speed={0.4}
        initialAngle={Math.PI}
        color="#38BDF8"
        size={0.16}
      />

      {/* Node 3: Integration & APIs */}
      <OrbitNode
        label="Integration Suite (CPI)"
        radius={3.4}
        speed={0.28}
        initialAngle={Math.PI / 3}
        color="#60A5FA"
        size={0.17}
      />
      {/* Node 4: Supply Chain & Operations */}
      <OrbitNode
        label="Supply Chain (SCM)"
        radius={3.4}
        speed={0.28}
        initialAngle={(4 * Math.PI) / 3}
        color="#046BD2"
        size={0.16}
      />

      {/* Node 5: Enterprise Mobility & Fiori */}
      <OrbitNode
        label="SAP Fiori Mobility"
        radius={4.6}
        speed={0.18}
        initialAngle={Math.PI / 2}
        color="#38BDF8"
        size={0.18}
      />
      {/* Node 6: Application Management (AMS) */}
      <OrbitNode
        label="24/7 Managed AMS"
        radius={4.6}
        speed={0.18}
        initialAngle={(3 * Math.PI) / 2}
        color="#00D2FF"
        size={0.17}
      />
    </group>
  );
};
