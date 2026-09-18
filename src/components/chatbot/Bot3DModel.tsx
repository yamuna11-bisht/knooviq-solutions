import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

interface BotHeadProps {
  isThinking?: boolean;
  isSpeaking?: boolean;
}

const CyberBotAvatar: React.FC<BotHeadProps> = ({ isThinking = false, isSpeaking = false }) => {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Mesh>(null);
  const visorRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const sat1Ref = useRef<THREE.Mesh>(null);
  const sat2Ref = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    // 1. Smooth cursor tracking (look-at target)
    const targetX = (state.pointer.x * Math.PI) / 4.5;
    const targetY = (-state.pointer.y * Math.PI) / 4.5;

    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, 0.08);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetY, 0.08);
    }

    // 2. Multi-tier Counter-Rotating Holographic Rings
    const ringSpeed = isThinking ? 4.5 : 1.2;
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * ringSpeed;
      ring1Ref.current.rotation.x += delta * (ringSpeed * 0.5);
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z -= delta * (ringSpeed * 0.8);
      ring2Ref.current.rotation.y += delta * (ringSpeed * 0.6);
    }

    // 3. Orbiting Satellite Energy Nodes
    const time = state.clock.elapsedTime * (isThinking ? 3 : 1.2);
    if (sat1Ref.current) {
      sat1Ref.current.position.x = Math.cos(time) * 1.6;
      sat1Ref.current.position.z = Math.sin(time) * 1.6;
      sat1Ref.current.position.y = Math.sin(time * 2) * 0.35;
      sat1Ref.current.rotation.y += delta * 2;
    }
    if (sat2Ref.current) {
      sat2Ref.current.position.x = Math.cos(time + Math.PI) * 1.6;
      sat2Ref.current.position.z = Math.sin(time + Math.PI) * 1.6;
      sat2Ref.current.position.y = Math.cos(time * 2) * 0.35;
      sat2Ref.current.rotation.y -= delta * 2;
    }

    // 4. Speaking & Thinking Visor Wave Pulse
    if (visorRef.current) {
      if (isSpeaking) {
        const pulse = 1 + Math.sin(state.clock.elapsedTime * 18) * 0.3;
        visorRef.current.scale.set(1, pulse, 1);
      } else if (isThinking) {
        const pulse = 1 + Math.sin(state.clock.elapsedTime * 10) * 0.15;
        visorRef.current.scale.set(1, pulse, 1);
      } else {
        visorRef.current.scale.set(1, 1, 1);
      }
    }

    // 5. Core Power Pulse
    if (coreRef.current) {
      const corePulse = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.1;
      coreRef.current.scale.set(corePulse, corePulse, corePulse);
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.1, 0]}>
      <Float speed={2.5} rotationIntensity={0.15} floatIntensity={0.4}>
        
        {/* === 1. MAIN TITANIUM HELMET HEAD === */}
        <mesh ref={headRef}>
          <sphereGeometry args={[0.9, 32, 32]} />
          <meshStandardMaterial
            color="#080E1E"
            roughness={0.15}
            metalness={0.95}
          />
        </mesh>

        {/* Crown Helmet Plates (Cobalt Blue Armor) */}
        <mesh position={[0, 0.28, -0.15]}>
          <torusGeometry args={[0.92, 0.14, 16, 48, Math.PI * 0.9]} />
          <meshStandardMaterial color="#046BD2" metalness={0.85} roughness={0.2} />
        </mesh>

        {/* === 2. GLOWING CYBER VISOR & EYES === */}
        <mesh ref={visorRef} position={[0, 0.05, 0.65]} scale={[1, 0.45, 0.4]}>
          <boxGeometry args={[1.05, 0.6, 0.4]} />
          <meshStandardMaterial
            color="#00D2FF"
            emissive="#00D2FF"
            emissiveIntensity={isThinking ? 4 : 2.2}
            roughness={0.05}
          />
        </mesh>

        {/* Dual Animated Eye Beacons */}
        <mesh position={[-0.25, 0.05, 0.86]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshBasicMaterial color="#FFFFFF" />
        </mesh>
        <mesh position={[0.25, 0.05, 0.86]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshBasicMaterial color="#FFFFFF" />
        </mesh>

        {/* Visor Cyber Grid Edge Line */}
        <mesh position={[0, -0.15, 0.72]}>
          <boxGeometry args={[0.9, 0.03, 0.1]} />
          <meshBasicMaterial color="#38BDF8" />
        </mesh>

        {/* === 3. FLOATING CYBERNETIC CHASSIS (SHOULDERS / COLLAR) === */}
        <group position={[0, -1.05, 0]}>
          {/* Central Power Core */}
          <mesh ref={coreRef} position={[0, 0.1, 0.2]}>
            <octahedronGeometry args={[0.22, 0]} />
            <meshStandardMaterial
              color="#00D2FF"
              emissive="#00D2FF"
              emissiveIntensity={isThinking ? 4 : 2.5}
            />
          </mesh>

          {/* Torso Armor Wing Collar */}
          <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.25, 0.75, 1.4, 32]} />
            <meshStandardMaterial color="#0B132B" metalness={0.9} roughness={0.2} />
          </mesh>
          <mesh position={[0, 0, -0.1]}>
            <torusGeometry args={[0.7, 0.08, 16, 32, Math.PI]} />
            <meshStandardMaterial color="#046BD2" metalness={0.8} />
          </mesh>
        </group>

        {/* === 4. COUNTER-ROTATING HOLOGRAPHIC GIMBAL RINGS === */}
        {/* Ring 1 */}
        <mesh ref={ring1Ref} rotation={[Math.PI / 3, 0.2, 0]}>
          <torusGeometry args={[1.35, 0.02, 16, 64]} />
          <meshStandardMaterial
            color="#38BDF8"
            emissive="#00D2FF"
            emissiveIntensity={isThinking ? 3 : 1.5}
            transparent
            opacity={0.85}
          />
        </mesh>

        {/* Ring 2 */}
        <mesh ref={ring2Ref} rotation={[-Math.PI / 4, 0.4, 0.3]}>
          <torusGeometry args={[1.5, 0.015, 16, 64]} />
          <meshStandardMaterial
            color="#046BD2"
            emissive="#38BDF8"
            emissiveIntensity={isThinking ? 2.5 : 1.2}
            transparent
            opacity={0.7}
          />
        </mesh>

        {/* === 5. DUAL ORBITING DATA CRYSTALS === */}
        <mesh ref={sat1Ref}>
          <octahedronGeometry args={[0.13, 0]} />
          <meshStandardMaterial
            color="#00D2FF"
            emissive="#00D2FF"
            emissiveIntensity={3}
            roughness={0.1}
          />
        </mesh>

        <mesh ref={sat2Ref}>
          <octahedronGeometry args={[0.13, 0]} />
          <meshStandardMaterial
            color="#38BDF8"
            emissive="#38BDF8"
            emissiveIntensity={3}
            roughness={0.1}
          />
        </mesh>

        {/* === 6. EARS & ANTENNA SENSORS === */}
        <mesh position={[-0.95, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.22, 0.22, 0.18, 24]} />
          <meshStandardMaterial color="#046BD2" metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[0.95, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.22, 0.22, 0.18, 24]} />
          <meshStandardMaterial color="#046BD2" metalness={0.9} roughness={0.2} />
        </mesh>

        {/* Crown Antenna */}
        <mesh position={[0, 1.15, 0]}>
          <cylinderGeometry args={[0.025, 0.025, 0.4, 16]} />
          <meshStandardMaterial color="#046BD2" metalness={0.8} />
        </mesh>
        <mesh position={[0, 1.38, 0]}>
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshStandardMaterial
            color="#00D2FF"
            emissive="#00D2FF"
            emissiveIntensity={isThinking ? 4 : 2.5}
          />
        </mesh>

        {/* Ambient Sparkles around Bot */}
        <Sparkles count={35} scale={3.5} size={2.5} speed={0.4} color="#00D2FF" opacity={0.6} />

      </Float>
    </group>
  );
};

export const Bot3DModel: React.FC<BotHeadProps & { className?: string }> = ({
  isThinking = false,
  isSpeaking = false,
  className = 'h-36 w-36'
}) => {
  return (
    <div className={`relative select-none ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[6, 6, 6]} intensity={2.5} color="#FFFFFF" />
        <pointLight position={[-6, -4, 4]} intensity={1.5} color="#00D2FF" />
        <pointLight position={[0, -2, -3]} intensity={2} color="#046BD2" />
        
        <CyberBotAvatar isThinking={isThinking} isSpeaking={isSpeaking} />
      </Canvas>
    </div>
  );
};
