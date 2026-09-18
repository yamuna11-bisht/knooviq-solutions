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
  { name: 'North America Hub', region: 'New York & San Jose', lat: 40.7128, lon: -74.006, metric: '99.99% SLA', color: '#00D2FF' },
  { name: 'EMEA Enterprise Center', region: 'Frankfurt & London', lat: 50.1109, lon: 8.6821, metric: '<5ms Latency', color: '#38BDF8' },
  { name: 'Middle East Tech Hub', region: 'Dubai & Riyadh', lat: 25.2048, lon: 55.2708, metric: 'SAP BTP Live', color: '#818CF8' },
  { name: 'India Innovation Center', region: 'Mumbai & Bangalore', lat: 19.076, lon: 72.8777, metric: '24/7 AMS Ops', color: '#34D399' },
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
}> = ({ activeMode, onSelectHub, selectedHub }) => {
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
      const nextIdx = (i + 1) % GLOBAL_HUBS.length;
      const startVec = latLonToVector3(GLOBAL_HUBS[i].lat, GLOBAL_HUBS[i].lon, radius);
      const endVec = latLonToVector3(GLOBAL_HUBS[nextIdx].lat, GLOBAL_HUBS[nextIdx].lon, radius);

      // Arc mid-point elevated above sphere
      const midVec = startVec.clone().add(endVec).multiplyScalar(0.5);
      const distance = startVec.distanceTo(endVec);
      midVec.setLength(radius + distance * 0.28);

      const curve = new THREE.QuadraticBezierCurve3(startVec, midVec, endVec);
      const geom = new THREE.TubeGeometry(curve, 24, 0.012, 6, false);

      curves.push({ geometry: geom, color: GLOBAL_HUBS[i].color });
    }

    return curves;
  }, [radius]);

  // Frame animation: continuous rotation + subtle wobble
  useFrame((_, delta) => {
    if (globeGroupRef.current) {
      globeGroupRef.current.rotation.y += delta * 0.12;
    }
    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y -= delta * 0.05;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.08;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z -= delta * 0.06;
    }
  });

  return (
    <group ref={globeGroupRef}>
      
      {/* 1. Inner Core Plasma Sphere */}
      <mesh>
        <sphereGeometry args={[radius * 0.94, 36, 36]} />
        <meshStandardMaterial
          color="#061226"
          emissive="#003566"
          emissiveIntensity={1.8}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* 2. Shimmering Digital Matrix Point Lattice */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={colors.length / 3}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.065}
          vertexColors
          transparent
          opacity={0.85}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* 3. Luminous Outer Atmosphere Halo */}
      <mesh ref={atmosphereRef}>
        <sphereGeometry args={[radius * 1.03, 32, 32]} />
        <meshStandardMaterial
          color="#00A3E0"
          transparent
          opacity={0.12}
          side={THREE.BackSide}
        />
      </mesh>

      {/* 4. Precision Equatorial & Polar Orbit Gyro Rings */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 2 + 0.3, 0.2, 0]}>
        <torusGeometry args={[radius * 1.35, 0.012, 16, 100]} />
        <meshBasicMaterial color="#00D2FF" transparent opacity={0.4} />
      </mesh>

      <mesh ref={ring2Ref} rotation={[Math.PI / 3, -0.4, 0.3]}>
        <torusGeometry args={[radius * 1.55, 0.01, 16, 100]} />
        <meshBasicMaterial color="#38BDF8" transparent opacity={0.25} />
      </mesh>

      {/* 5. Inter-Hub Data Light Arcs */}
      {flightArcs.map((arc, idx) => (
        <mesh key={idx} geometry={arc.geometry}>
          <meshBasicMaterial color={arc.color} transparent opacity={0.55} />
        </mesh>
      ))}

      {/* 6. Global Enterprise Hub Beacons */}
      {GLOBAL_HUBS.map((hub, idx) => {
        const pos = latLonToVector3(hub.lat, hub.lon, radius);
        const isSelected = selectedHub?.name === hub.name;

        return (
          <group key={idx} position={pos}>
            {/* Beacon Glowing Sphere */}
            <mesh
              onClick={(e) => {
                e.stopPropagation();
                onSelectHub(hub);
              }}
              scale={isSelected ? 1.8 : 1.2}
            >
              <sphereGeometry args={[0.07, 16, 16]} />
              <meshStandardMaterial
                color={hub.color}
                emissive={hub.color}
                emissiveIntensity={isSelected ? 4 : 2}
              />
            </mesh>

            {/* Pulsing Beacon Halo Ring */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <ringGeometry args={[0.09, 0.16, 20]} />
              <meshBasicMaterial
                color={hub.color}
                transparent
                opacity={isSelected ? 0.9 : 0.6}
                side={THREE.DoubleSide}
              />
            </mesh>

            {/* Vertical Holographic Light Pillar */}
            <mesh position={[0, 0.25, 0]}>
              <cylinderGeometry args={[0.008, 0.008, 0.5, 8]} />
              <meshBasicMaterial color={hub.color} transparent opacity={0.5} />
            </mesh>

            {/* 3D Micro Label */}
            <Html distanceFactor={10} center position={[0, 0.45, 0]}>
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

// 2. Floating Luxury 3D Holographic Micro-Widgets (Live Cloud Telemetry)
const FloatingHolographicCards: React.FC<{
  activeMode: string;
}> = ({ activeMode }) => {
  return (
    <>
      {/* Top Right: Clean Core Status */}
      <Float speed={1.8} rotationIntensity={0.15} floatIntensity={0.6} position={[4.2, 2.2, 0]}>
        <Html distanceFactor={8} center>
          <div className="select-none rounded-2xl border border-emerald-500/30 bg-slate-950/85 p-3.5 backdrop-blur-2xl shadow-2xl shadow-emerald-950/40 text-left w-52">
            <div className="flex items-center justify-between mb-1.5">
              <span className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-400">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>CLEAN CORE READY</span>
              </span>
              <span className="text-[9px] font-mono text-slate-400">SAP 2026</span>
            </div>
            <div className="text-sm font-black text-white">0% Technical Debt</div>
            <p className="text-[10px] text-slate-300 mt-0.5">BTP Side-by-Side Extensibility</p>
          </div>
        </Html>
      </Float>

      {/* Bottom Left: SAP Joule AI Copilot */}
      <Float speed={2.2} rotationIntensity={0.2} floatIntensity={0.8} position={[-4.4, -1.8, 0.5]}>
        <Html distanceFactor={8} center>
          <div className="select-none rounded-2xl border border-sky-500/40 bg-slate-950/85 p-3.5 backdrop-blur-2xl shadow-2xl shadow-sky-950/40 text-left w-56">
            <div className="flex items-center justify-between mb-1.5">
              <span className="flex items-center gap-1.5 text-[10px] font-bold text-[#00D2FF]">
                <Cpu className="h-3.5 w-3.5 animate-spin-slow" />
                <span>SAP JOULE COPILOT</span>
              </span>
              <span className="text-[9px] font-mono bg-[#00D2FF]/15 text-cyan-300 px-1.5 py-0.5 rounded font-bold">GEN AI</span>
            </div>
            <div className="text-sm font-black text-white">Autonomous Workflows</div>
            <p className="text-[10px] text-slate-300 mt-0.5">Predictive Supply Chain & Finance</p>
          </div>
        </Html>
      </Float>

      {/* Top Left: SLA Guarantee */}
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.5} position={[-4.5, 2.0, -1]}>
        <Html distanceFactor={8} center>
          <div className="select-none rounded-2xl border border-purple-500/30 bg-slate-950/85 p-3.5 backdrop-blur-2xl shadow-2xl shadow-purple-950/40 text-left w-48">
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-purple-400 mb-1">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>24/7 AMS SLA</span>
            </div>
            <div className="text-sm font-black text-white">99.99% Uptime</div>
            <p className="text-[10px] text-slate-300 mt-0.5">Near-Zero Downtime Operations</p>
          </div>
        </Html>
      </Float>
    </>
  );
};

// 3. Deep Ambient Starfield & Particle Atmosphere
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

// 4. Smooth Damped Camera Controller with Mouse Interaction
const CameraRig: React.FC<{ selectedHub: GlobalHub | null }> = ({ selectedHub }) => {
  const { camera } = useThree();

  useFrame((state) => {
    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;

    if (selectedHub) {
      const hubVec = latLonToVector3(selectedHub.lat, selectedHub.lon, 6.2);
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, hubVec.x + mouseX * 0.8, 0.04);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, hubVec.y + mouseY * 0.8, 0.04);
      camera.position.z = THREE.MathUtils.lerp(camera.position.z, hubVec.z + 5.5, 0.04);
    } else {
      const targetX = mouseX * 2.0;
      const targetY = mouseY * 1.5;
      const targetZ = 7.8;
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.035);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.035);
      camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.035);
    }

    camera.lookAt(0, 0, 0);
  });

  return null;
};

// Main Exported Component
export const EnterpriseWorld3D: React.FC<{
  activeMode: 'global' | 'ai' | 'clean-core';
  onModeChange: (mode: 'global' | 'ai' | 'clean-core') => void;
  selectedHub: GlobalHub | null;
  onSelectHub: (hub: GlobalHub | null) => void;
}> = ({ activeMode, onModeChange, selectedHub, onSelectHub }) => {
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
    <div className="absolute inset-0 w-full h-full select-none overflow-hidden">
      
      {/* 3D WebGL Canvas */}
      <Suspense fallback={<Fallback2D />}>
        <Canvas
          camera={{ position: [0, 0, 7.8], fov: 46 }}
          dpr={[1, 2]}
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

          {/* 3D Digital Globe */}
          <HolographicGlobe
            activeMode={activeMode}
            onSelectHub={onSelectHub}
            selectedHub={selectedHub}
          />

          {/* Floating Luxury Glass Holograms */}
          <FloatingHolographicCards activeMode={activeMode} />

          {/* Starfield Particles */}
          <StarfieldAtmosphere />
        </Canvas>
      </Suspense>

      {/* 3D Mode Selector Tabs (Top Right Floating HUD) */}
      <div className="absolute top-24 right-6 z-20 hidden md:flex items-center gap-1.5 rounded-2xl border border-slate-300 dark:border-sky-500/30 bg-white/85 dark:bg-[#070E1C]/90 p-1.5 backdrop-blur-2xl shadow-xl">
        <button
          onClick={() => onModeChange('global')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
            activeMode === 'global'
              ? 'bg-[#00A3E0] text-white shadow-md'
              : 'text-slate-700 dark:text-slate-300 hover:text-[#00A3E0] dark:hover:text-white'
          }`}
        >
          <Globe2 className="h-3.5 w-3.5" />
          <span>Global Network</span>
        </button>

        <button
          onClick={() => onModeChange('ai')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
            activeMode === 'ai'
              ? 'bg-[#00A3E0] text-white shadow-md'
              : 'text-slate-700 dark:text-slate-300 hover:text-[#00A3E0] dark:hover:text-white'
          }`}
        >
          <Cpu className="h-3.5 w-3.5" />
          <span>Joule AI Core</span>
        </button>

        <button
          onClick={() => onModeChange('clean-core')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
            activeMode === 'clean-core'
              ? 'bg-[#00A3E0] text-white shadow-md'
              : 'text-slate-700 dark:text-slate-300 hover:text-[#00A3E0] dark:hover:text-white'
          }`}
        >
          <Layers className="h-3.5 w-3.5" />
          <span>Clean Core</span>
        </button>
      </div>

    </div>
  );
};
export { GLOBAL_HUBS };
export type { GlobalHub };
