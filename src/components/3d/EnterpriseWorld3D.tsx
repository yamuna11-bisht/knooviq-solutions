import React, { Suspense, useRef, useState, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Html, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  Globe2, 
  Zap, 
  Activity, 
  CheckCircle2,
  TrendingUp,
  Layers
} from 'lucide-react';
import { Fallback2D } from './Fallback2D';

// Global Enterprise Hub Locations on the 3D Sphere (lat, lon)
interface GlobalHub {
  name: string;
  region: string;
  lat: number;
  lon: number;
  metric: string;
  color: string;
}

const GLOBAL_HUBS: GlobalHub[] = [
  { name: 'North America Hub', region: 'New York & San Jose', lat: 40.7128, lon: -74.006, metric: 'Enterprise Delivery', color: '#00D2FF' },
  { name: 'EMEA Enterprise Center', region: 'Frankfurt & London', lat: 50.1109, lon: 8.6821, metric: 'Low Latency Operations', color: '#38BDF8' },
  { name: 'Middle East Tech Hub', region: 'Dubai & Riyadh', lat: 25.2048, lon: 55.2708, metric: 'SAP BTP Cloud', color: '#818CF8' },
  { name: 'India Innovation Center', region: 'Mumbai & Bangalore', lat: 19.076, lon: 72.8777, metric: 'Global Delivery Operations', color: '#34D399' },
  { name: 'APAC Gateway', region: 'Singapore', lat: 1.3521, lon: 103.8198, metric: 'Joule AI Copilot', color: '#F472B6' },
  { name: 'Oceania Delivery Hub', region: 'Sydney', lat: -33.8688, lon: 151.2093, metric: 'Active Cloud', color: '#FBBF24' }
];

// Helper: Convert Latitude & Longitude to 3D Cartesian Vector3
const latLonToVector3 = (lat: number, lon: number, radius: number): THREE.Vector3 => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
};

// 1. Digital Matrix Holographic Globe
const HolographicGlobe: React.FC<{
  activeMode: 'global' | 'ai' | 'clean-core';
  onSelectHub: (hub: GlobalHub) => void;
  selectedHub: GlobalHub | null;
  isRotating?: boolean;
}> = ({ activeMode, onSelectHub, selectedHub, isRotating = true }) => {
  const globeGroupRef = useRef<THREE.Group>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  const radius = 2.4;

  // Generate 1200+ Fibonacci Spherical Dot Lattice
  const { positions, colors } = useMemo(() => {
    const count = 1400;
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);

    const baseColor = activeMode === 'ai' 
      ? new THREE.Color('#38BDF8') 
      : activeMode === 'clean-core' 
      ? new THREE.Color('#34D399') 
      : new THREE.Color('#00D2FF');

    const secondColor = new THREE.Color('#0055AA');

    for (let i = 0; i < count; i++) {
      // Golden Spiral distribution
      const phi = Math.acos(1 - 2 * (i + 0.5) / count);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.cos(phi);
      const z = radius * Math.sin(phi) * Math.sin(theta);

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      // Color gradient from pole to equator
      const mixed = baseColor.clone().lerp(secondColor, Math.abs(y) / radius * 0.7);
      cols[i * 3] = mixed.r;
      cols[i * 3 + 1] = mixed.g;
      cols[i * 3 + 2] = mixed.b;
    }

    return { positions: pos, colors: cols };
  }, [activeMode, radius]);

  // Compute 3D Great-Circle Flight Paths between Hubs
  const flightArcs = useMemo(() => {
    const curves: { geometry: THREE.TubeGeometry; color: string }[] = [];

    for (let i = 0; i < GLOBAL_HUBS.length; i++) {
      for (let j = i + 1; j < GLOBAL_HUBS.length; j++) {
        const start = latLonToVector3(GLOBAL_HUBS[i].lat, GLOBAL_HUBS[i].lon, radius);
        const end = latLonToVector3(GLOBAL_HUBS[j].lat, GLOBAL_HUBS[j].lon, radius);

        const mid = start.clone().add(end).multiplyScalar(0.5);
        const distance = start.distanceTo(end);
        mid.normalize().multiplyScalar(radius + distance * 0.28);

        const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
        const geometry = new THREE.TubeGeometry(curve, 32, 0.015, 6, false);
        curves.push({ geometry, color: GLOBAL_HUBS[i].color });
      }
    }
    return curves;
  }, [radius]);

  // Frame animation: continuous rotation + subtle wobble
  useFrame((_, delta) => {
    if (globeGroupRef.current && isRotating) {
      globeGroupRef.current.rotation.y += delta * 0.08;
    }
    if (atmosphereRef.current && isRotating) {
      atmosphereRef.current.rotation.y -= delta * 0.04;
    }
    if (ring1Ref.current && isRotating) {
      ring1Ref.current.rotation.z += delta * 0.05;
    }
    if (ring2Ref.current && isRotating) {
      ring2Ref.current.rotation.x -= delta * 0.06;
    }
  });

  return (
    <group ref={globeGroupRef}>
      
      {/* 1. Fibonacci Point Lattice Sphere */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
          <bufferAttribute attach="attributes-color" count={colors.length / 3} array={colors} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.055} vertexColors transparent opacity={0.85} blending={THREE.AdditiveBlending} />
      </points>

      {/* 2. Inner Translucent Wireframe Core */}
      <mesh>
        <sphereGeometry args={[radius * 0.98, 28, 28]} />
        <meshBasicMaterial color="#002244" wireframe transparent opacity={0.25} />
      </mesh>

      {/* 3. Glowing Atmospheric Halo Shield */}
      <mesh ref={atmosphereRef}>
        <sphereGeometry args={[radius * 1.08, 32, 32]} />
        <meshStandardMaterial
          color="#00D2FF"
          emissive="#0055AA"
          emissiveIntensity={0.8}
          transparent
          opacity={0.12}
          side={THREE.BackSide}
        />
      </mesh>

      {/* 4. Orbital Cyber Rings */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 2.5, 0.2, 0]}>
        <torusGeometry args={[radius * 1.45, 0.015, 16, 80]} />
        <meshBasicMaterial color="#00D2FF" transparent opacity={0.4} />
      </mesh>

      <mesh ref={ring2Ref} rotation={[-Math.PI / 3, 0.3, 0]}>
        <torusGeometry args={[radius * 1.6, 0.012, 16, 80]} />
        <meshBasicMaterial color="#818CF8" transparent opacity={0.3} />
      </mesh>

      {/* 5. 3D Great-Circle Flight Arcs */}
      {flightArcs.map((arc, idx) => (
        <mesh key={idx} geometry={arc.geometry}>
          <meshBasicMaterial color={arc.color} transparent opacity={0.35} />
        </mesh>
      ))}

      {/* 6. Interactive Delivery Hub Pins on Globe */}
      {GLOBAL_HUBS.map((hub, idx) => {
        const pinPos = latLonToVector3(hub.lat, hub.lon, radius);
        const isSelected = selectedHub?.name === hub.name;

        return (
          <group key={idx} position={pinPos}>
            {/* Glowing Beacon Core */}
            <mesh
              onClick={(e) => {
                e.stopPropagation();
                onSelectHub(hub);
              }}
              scale={isSelected ? 1.8 : 1}
            >
              <sphereGeometry args={[0.07, 16, 16]} />
              <meshStandardMaterial
                color={hub.color}
                emissive={hub.color}
                emissiveIntensity={isSelected ? 3.5 : 2}
              />
            </mesh>

            {/* Ripple Halo */}
            <mesh>
              <ringGeometry args={[0.09, 0.15, 24]} />
              <meshBasicMaterial color={hub.color} transparent opacity={0.5} side={THREE.DoubleSide} />
            </mesh>

            {/* 3D Floating Hub Label */}
            <Html distanceFactor={8} center position={[0, 0.22, 0]}>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectHub(hub);
                }}
                className={`cursor-pointer transition-all duration-300 rounded-lg px-2 py-0.5 border text-[9px] font-bold tracking-wide whitespace-nowrap shadow-xl flex items-center gap-1 ${
                  isSelected
                    ? 'bg-slate-950/95 border-cyan-400 text-white shadow-[0_0_15px_rgba(0,210,255,0.6)] scale-110'
                    : 'bg-slate-900/80 border-sky-400/30 text-sky-200 hover:scale-105 hover:bg-slate-900'
                }`}
              >
                <span className="h-1.5 w-1.5 rounded-full animate-ping" style={{ backgroundColor: hub.color }} />
                <span>{hub.name}</span>
              </div>
            </Html>
          </group>
        );
      })}

    </group>
  );
};

// 2. Deep Ambient Starfield & Particle Atmosphere
const StarfieldAtmosphere: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const count = 350;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [
      new THREE.Color('#00D2FF'),
      new THREE.Color('#0077B6'),
      new THREE.Color('#38BDF8'),
      new THREE.Color('#818CF8'),
      new THREE.Color('#FFFFFF')
    ];

    for (let i = 0; i < count; i++) {
      const radius = 3.5 + Math.random() * 8.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.75;
      pos[i * 3 + 2] = radius * Math.cos(phi);

      const color = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }

    return [pos, col];
  }, []);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={colors.length / 3} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.06} vertexColors transparent opacity={0.7} blending={THREE.AdditiveBlending} />
    </points>
  );
};

// Responsive World Group for Globe (Shifted gently to right on desktop for left-aligned content)
const ResponsiveGlobeGroup: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { size } = useThree();
  const isDesktop = size.width > 1024;
  const isTablet = size.width > 768 && size.width <= 1024;
  const scale = isDesktop ? 1.08 : isTablet ? 0.9 : 0.76;
  const posX = isDesktop ? 1.35 : 0;

  return (
    <group position={[posX, 0, 0]} scale={scale}>
      {children}
    </group>
  );
};

// 4. Smooth Damped Camera Controller with Mouse Interaction
const CameraRig: React.FC<{ selectedHub: GlobalHub | null }> = ({ selectedHub }) => {
  const { camera, size } = useThree();
  const isDesktop = size.width > 1024;
  const posX = isDesktop ? 1.35 : 0;

  useFrame((state) => {
    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;

    if (selectedHub) {
      const hubVec = latLonToVector3(selectedHub.lat, selectedHub.lon, 6.2);
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, hubVec.x + posX + mouseX * 0.8, 0.04);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, hubVec.y + mouseY * 0.8, 0.04);
      camera.position.z = THREE.MathUtils.lerp(camera.position.z, hubVec.z + 5.5, 0.04);
      camera.lookAt(posX, 0, 0);
    } else {
      const targetX = mouseX * 1.5;
      const targetY = mouseY * 1.0;
      const targetZ = isDesktop ? 8.4 : 9.6;
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.035);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.035);
      camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.035);
      camera.lookAt(posX * 0.35, 0, 0);
    }
  });

  return null;
};

// Main Exported Component
export const EnterpriseWorld3D: React.FC<{
  activeMode: 'global' | 'ai' | 'clean-core';
  onModeChange?: (mode: 'global' | 'ai' | 'clean-core') => void;
  selectedHub: GlobalHub | null;
  onSelectHub: (hub: GlobalHub | null) => void;
  isRotating?: boolean;
  showModeTabs?: boolean;
}> = ({ activeMode, onModeChange, selectedHub, onSelectHub, isRotating = true, showModeTabs = false }) => {
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
    <div className="absolute inset-0 w-full h-full select-none overflow-hidden pointer-events-auto">
      
      {/* 3D WebGL Canvas */}
      <Suspense fallback={<Fallback2D />}>
        <Canvas
          camera={{ position: [0, 0, 8.2], fov: 46 }}
          dpr={[1, 1.8]}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          className="h-full w-full"
          onPointerDown={() => onSelectHub(null)}
        >
          {/* Studio Lighting */}
          <ambientLight intensity={0.9} />
          <directionalLight position={[10, 12, 10]} intensity={2.2} color="#FFFFFF" />
          <directionalLight position={[-10, -10, -8]} intensity={1.0} color="#00D2FF" />
          <pointLight position={[0, 5, 5]} intensity={2.5} color="#00A3E0" distance={15} />
          <pointLight position={[0, -5, -5]} intensity={1.5} color="#6366F1" distance={15} />

          {/* Camera Rig */}
          <CameraRig selectedHub={selectedHub} />

          {/* Responsive World Anchor */}
          <ResponsiveGlobeGroup>
            {/* 3D Digital Globe */}
            <HolographicGlobe
              activeMode={activeMode}
              onSelectHub={onSelectHub}
              selectedHub={selectedHub}
              isRotating={isRotating}
            />
          </ResponsiveGlobeGroup>

          {/* Starfield Particles */}
          <StarfieldAtmosphere />
        </Canvas>
      </Suspense>



    </div>
  );
};
export { GLOBAL_HUBS };
export type { GlobalHub };
