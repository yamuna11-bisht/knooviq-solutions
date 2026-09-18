import React, { Suspense, useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Html } from '@react-three/drei';
import * as THREE from 'three';
import { 
  Sparkles, 
  Layers, 
  Cpu, 
  Share2, 
  Database, 
  Users, 
  Boxes, 
  Leaf, 
  Activity, 
  Maximize2, 
  RotateCw,
  Eye,
  CheckCircle2
} from 'lucide-react';
import { Fallback2D } from './Fallback2D';

// Interface for 3D Node data
export interface NodeInfo {
  id: string;
  name: string;
  category: string;
  color: string;
  radius: number;
  speed: number;
  inclination: number;
  initialAngle: number;
  size: number;
  status: string;
  metric: string;
  description: string;
}

export const NODES_DATA: NodeInfo[] = [
  {
    id: 's4hana',
    name: 'SAP S/4HANA Cloud',
    category: 'Intelligent ERP',
    color: '#00D2FF',
    radius: 3.2,
    speed: 0.35,
    inclination: 0.15,
    initialAngle: 0,
    size: 0.28,
    status: '99.99% Uptime',
    metric: 'Real-Time In-Memory',
    description: 'Next-Gen Intelligent ERP with GROW & RISE Cloud deployments.'
  },
  {
    id: 'joule-ai',
    name: 'SAP Business AI & Joule',
    category: 'GenAI Copilot',
    color: '#38BDF8',
    radius: 4.6,
    speed: 0.28,
    inclination: -0.35,
    initialAngle: Math.PI * 0.3,
    size: 0.26,
    status: 'Active Copilot',
    metric: '10x Speed',
    description: 'Embedded GenAI & conversational business intelligence across workflows.'
  },
  {
    id: 'btp-cpi',
    name: 'SAP BTP & CPI Suite',
    category: 'Integration Cloud',
    color: '#818CF8',
    radius: 3.8,
    speed: 0.32,
    inclination: 0.45,
    initialAngle: Math.PI * 0.75,
    size: 0.25,
    status: '500+ Connectors',
    metric: '<10ms Latency',
    description: 'Clean Core extensions, low-code BuildApps, and enterprise API hub.'
  },
  {
    id: 'datasphere',
    name: 'SAP Datasphere & SAC',
    category: 'Data & Analytics',
    color: '#34D399',
    radius: 5.4,
    speed: 0.22,
    inclination: -0.2,
    initialAngle: Math.PI * 1.1,
    size: 0.27,
    status: 'Unified Fabric',
    metric: 'Instant SAC Planning',
    description: 'Business data fabric with multi-cloud federated data warehouse.'
  },
  {
    id: 'successfactors',
    name: 'SAP SuccessFactors',
    category: 'HXM & Workforce',
    color: '#F472B6',
    radius: 4.2,
    speed: 0.3,
    inclination: 0.3,
    initialAngle: Math.PI * 1.5,
    size: 0.24,
    status: 'Global Payroll',
    metric: 'AI Talent Match',
    description: 'End-to-end human experience management and workforce analytics.'
  },
  {
    id: 'supply-chain',
    name: 'Digital Supply Chain',
    category: 'IBP, EWM & TM',
    color: '#FB923C',
    radius: 5.8,
    speed: 0.19,
    inclination: -0.4,
    initialAngle: Math.PI * 1.85,
    size: 0.26,
    status: 'Zero-Bottleneck',
    metric: 'Predictive Routing',
    description: 'Integrated Business Planning, Extended Warehouse & Ariba guided spend.'
  },
  {
    id: 'clean-core',
    name: 'Clean Core Architecture',
    category: 'Modernization',
    color: '#06B6D4',
    radius: 4.8,
    speed: 0.25,
    inclination: 0.1,
    initialAngle: Math.PI * 0.5,
    size: 0.23,
    status: 'Zero Technical Debt',
    metric: 'Automated Upgrades',
    description: 'Decoupled side-by-side extensibility preserving standard SAP core.'
  },
  {
    id: 'green-ledger',
    name: 'Sustainability & ESG',
    category: 'Green Ledger',
    color: '#10B981',
    radius: 5.0,
    speed: 0.21,
    inclination: -0.25,
    initialAngle: Math.PI * 0.9,
    size: 0.24,
    status: 'Carbon Accounting',
    metric: 'Audit Ready',
    description: 'Transactional greenhouse gas emission tracking aligned with financial data.'
  }
];

// Single Orbit Node with connecting energy beam and 3D floating tag
const InteractiveOrbitNode: React.FC<{
  node: NodeInfo;
  selectedId: string | null;
  onSelect: (id: string) => void;
  speedMultiplier: number;
}> = ({ node, selectedId, onSelect, speedMultiplier }) => {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const angleRef = useRef(node.initialAngle);
  const [hovered, setHovered] = useState(false);

  const isSelected = selectedId === node.id;

  // Track position for dynamic laser beam line
  const [currentPos, setCurrentPos] = useState<[number, number, number]>([0, 0, 0]);

  useFrame((_, delta) => {
    angleRef.current += node.speed * delta * speedMultiplier;
    
    // 3D elliptical orbital equation with inclination tilt
    const cosA = Math.cos(angleRef.current);
    const sinA = Math.sin(angleRef.current);
    const x = cosA * node.radius;
    const z = sinA * node.radius;
    const y = Math.sin(angleRef.current + node.inclination) * (node.radius * 0.35 * Math.sin(node.inclination * 2));

    if (groupRef.current) {
      groupRef.current.position.set(x, y, z);
    }
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 1.2;
      meshRef.current.rotation.x += delta * 0.6;
    }
    setCurrentPos([x, y, z]);
  });

  // Connecting spline points for energy beam
  const beamPoints = useMemo(() => {
    return [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(currentPos[0] * 0.5, currentPos[1] * 0.5 + 0.3, currentPos[2] * 0.5),
      new THREE.Vector3(currentPos[0], currentPos[1], currentPos[2])
    ];
  }, [currentPos]);

  const beamGeometry = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3(beamPoints);
    return new THREE.TubeGeometry(curve, 20, 0.012, 6, false);
  }, [beamPoints]);

  return (
    <>
      {/* 3D Connecting Light Beam from Central S/4HANA Core */}
      <mesh geometry={beamGeometry}>
        <meshBasicMaterial 
          color={node.color} 
          transparent 
          opacity={isSelected ? 0.85 : hovered ? 0.65 : 0.25} 
        />
      </mesh>

      {/* Orbit Node Group */}
      <group ref={groupRef}>
        
        {/* Interactive Click Sphere */}
        <mesh
          ref={meshRef}
          onClick={(e) => {
            e.stopPropagation();
            onSelect(node.id);
          }}
          onPointerOver={(e) => {
            e.stopPropagation();
            setHovered(true);
            document.body.style.cursor = 'pointer';
          }}
          onPointerOut={() => {
            setHovered(false);
            document.body.style.cursor = 'auto';
          }}
          scale={isSelected ? 1.6 : hovered ? 1.35 : 1}
        >
          <sphereGeometry args={[node.size, 24, 24]} />
          <meshStandardMaterial
            color={node.color}
            emissive={node.color}
            emissiveIntensity={isSelected ? 3.5 : hovered ? 2.5 : 1.6}
            roughness={0.15}
            metalness={0.85}
          />
        </mesh>

        {/* Orbiting Beacon Halo Ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[node.size * 1.4, node.size * 1.8, 32]} />
          <meshBasicMaterial 
            color={node.color} 
            transparent 
            opacity={isSelected ? 0.9 : hovered ? 0.7 : 0.4} 
            side={THREE.DoubleSide} 
          />
        </mesh>

        {/* Outer Pulsing Geometry Ring */}
        <mesh rotation={[0, Math.PI / 3, 0]}>
          <torusGeometry args={[node.size * 2.2, 0.01, 8, 24]} />
          <meshBasicMaterial color={node.color} transparent opacity={0.3} />
        </mesh>

        {/* Floating 3D UI Info HUD on Node */}
        <Html distanceFactor={11} center position={[0, node.size + 0.45, 0]}>
          <div 
            onClick={(e) => {
              e.stopPropagation();
              onSelect(node.id);
            }}
            className={`transition-all duration-300 pointer-events-auto cursor-pointer select-none rounded-xl border backdrop-blur-xl px-2.5 py-1.5 shadow-2xl flex flex-col items-center gap-0.5 ${
              isSelected 
                ? 'bg-navy-950/95 border-cyan-400 text-white scale-110 shadow-[0_0_25px_rgba(0,210,255,0.6)]'
                : hovered
                ? 'bg-slate-900/90 border-sky-400 text-cyan-200 scale-105'
                : 'bg-slate-900/70 border-white/15 text-slate-200'
            }`}
          >
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full animate-ping" style={{ backgroundColor: node.color }} />
              <span className="text-[10px] font-black tracking-wide whitespace-nowrap">{node.name}</span>
            </div>
            <span className="text-[8px] font-mono text-cyan-300/90 tracking-wider uppercase">{node.metric}</span>
          </div>
        </Html>
      </group>
    </>
  );
};

// Central Intelligent S/4HANA Nucleus with Multi-Layer Holographic Cages
const CentralNucleus: React.FC<{ isSelected: boolean }> = ({ isSelected }) => {
  const coreGroup = useRef<THREE.Group>(null);
  const outerCage1 = useRef<THREE.Mesh>(null);
  const outerCage2 = useRef<THREE.Mesh>(null);
  const ringGroup = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (coreGroup.current) {
      coreGroup.current.rotation.y += delta * 0.2;
    }
    if (outerCage1.current) {
      outerCage1.current.rotation.x += delta * 0.15;
      outerCage1.current.rotation.y -= delta * 0.25;
    }
    if (outerCage2.current) {
      outerCage2.current.rotation.z -= delta * 0.18;
      outerCage2.current.rotation.x -= delta * 0.2;
    }
    if (ringGroup.current) {
      ringGroup.current.rotation.z += delta * 0.1;
    }
  });

  return (
    <group ref={coreGroup}>
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.6}>
        
        {/* Core Glowing Energy Sphere */}
        <mesh>
          <sphereGeometry args={[1.05, 36, 36]} />
          <meshStandardMaterial
            color="#0077B6"
            emissive="#00A3E0"
            emissiveIntensity={isSelected ? 3.8 : 2.6}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>

        {/* Inner High-Density Point Light */}
        <pointLight color="#00D2FF" intensity={3.5} distance={7} />

        {/* Layer 1: Wireframe Icosahedron */}
        <mesh ref={outerCage1}>
          <icosahedronGeometry args={[1.5, 1]} />
          <meshStandardMaterial
            color="#00D2FF"
            wireframe
            emissive="#00D2FF"
            emissiveIntensity={1.8}
            transparent
            opacity={0.75}
          />
        </mesh>

        {/* Layer 2: Dodecahedron Glass Cage */}
        <mesh ref={outerCage2}>
          <dodecahedronGeometry args={[1.85, 0]} />
          <meshStandardMaterial
            color="#38BDF8"
            wireframe
            emissive="#38BDF8"
            emissiveIntensity={1.2}
            transparent
            opacity={0.45}
          />
        </mesh>

        {/* Layer 3: Nested Equatorial Rings */}
        <group ref={ringGroup}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[2.0, 0.02, 16, 64]} />
            <meshBasicMaterial color="#00E5FF" transparent opacity={0.6} />
          </mesh>
          <mesh rotation={[Math.PI / 3, 0.2, 0]}>
            <torusGeometry args={[2.2, 0.015, 16, 64]} />
            <meshBasicMaterial color="#60A5FA" transparent opacity={0.4} />
          </mesh>
        </group>

        {/* Central Core Hologram Badge */}
        <Html distanceFactor={9} center position={[0, 0, 0]}>
          <div className="pointer-events-none select-none flex flex-col items-center justify-center text-center">
            <div className="rounded-full bg-cyan-950/80 border border-cyan-400/80 px-3 py-1 backdrop-blur-md shadow-[0_0_30px_rgba(0,210,255,0.8)]">
              <div className="text-[12px] font-black tracking-widest text-white drop-shadow-[0_0_10px_rgba(0,210,255,1)]">
                SAP S/4HANA
              </div>
              <div className="text-[8px] font-bold tracking-wider text-cyan-300">
                INTELLIGENT CORE
              </div>
            </div>
          </div>
        </Html>

      </Float>
    </group>
  );
};

// 3D Perspective Digital Horizon Grid (Cyberpunk Enterprise Floor)
const HorizonGrid: React.FC = () => {
  const gridRef = useRef<THREE.GridHelper>(null);

  useFrame((_, delta) => {
    if (gridRef.current) {
      gridRef.current.position.z = (gridRef.current.position.z + delta * 0.4) % 1;
    }
  });

  return (
    <group position={[0, -4.5, 0]}>
      <gridHelper 
        ref={gridRef}
        args={[30, 30, '#00A3E0', '#003366']} 
        position={[0, 0, 0]}
      />
    </group>
  );
};

// Floating Holographic Polyhedrons drifting in 3D depth
const FloatingCrystals: React.FC = () => {
  const crystalGroup = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (crystalGroup.current) {
      crystalGroup.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group ref={crystalGroup}>
      {/* Crystal 1: Octahedron */}
      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.2} position={[-6.5, 2.5, -2]}>
        <mesh>
          <octahedronGeometry args={[0.6]} />
          <meshStandardMaterial color="#00D2FF" wireframe emissive="#00D2FF" emissiveIntensity={1.2} />
        </mesh>
      </Float>

      {/* Crystal 2: Tetrahedrons */}
      <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1} position={[6.8, -1.8, -1.5]}>
        <mesh>
          <tetrahedronGeometry args={[0.7]} />
          <meshStandardMaterial color="#38BDF8" wireframe emissive="#38BDF8" emissiveIntensity={1.4} />
        </mesh>
      </Float>

      {/* Crystal 3: Torus Knot */}
      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.8} position={[-5.8, -2.5, 1]}>
        <mesh>
          <torusKnotGeometry args={[0.4, 0.1, 48, 8]} />
          <meshStandardMaterial color="#818CF8" wireframe emissive="#818CF8" emissiveIntensity={1.2} />
        </mesh>
      </Float>

      {/* Crystal 4: Icosahedron */}
      <Float speed={2.0} rotationIntensity={0.7} floatIntensity={1.1} position={[5.5, 3.2, 0.5]}>
        <mesh>
          <icosahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial color="#34D399" wireframe emissive="#34D399" emissiveIntensity={1.5} />
        </mesh>
      </Float>
    </group>
  );
};

// 3D Particle Cloud / Starfield
const DeepDataParticles: React.FC<{ count?: number }> = ({ count = 280 }) => {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [
      new THREE.Color('#00D2FF'),
      new THREE.Color('#0077B6'),
      new THREE.Color('#38BDF8'),
      new THREE.Color('#818CF8'),
      new THREE.Color('#34D399'),
      new THREE.Color('#FFFFFF')
    ];

    for (let i = 0; i < count; i++) {
      const radius = 2.5 + Math.random() * 8.0;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.7; // Slightly flattened disc
      pos[i * 3 + 2] = radius * Math.cos(phi);

      const color = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }

    return [pos, col];
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.04;
      pointsRef.current.rotation.x += delta * 0.015;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={colors.length / 3} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.07}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

// Dynamic Camera Parallax Controller driven by Mouse Movement
const CameraController: React.FC<{
  selectedNode: NodeInfo | null;
}> = ({ selectedNode }) => {
  const { camera } = useThree();

  useFrame((state) => {
    // Standard mouse coordinates (-1 to 1)
    const pointerX = state.pointer.x;
    const pointerY = state.pointer.y;

    if (selectedNode) {
      // Focus slightly towards selected node perspective
      const targetX = pointerX * 1.5;
      const targetY = pointerY * 1.2 + 0.5;
      const targetZ = 7.0;
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.04);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.04);
      camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.04);
    } else {
      // General responsive 3D parallax
      const targetX = pointerX * 2.2;
      const targetY = pointerY * 1.8;
      const targetZ = 8.5;
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.035);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.035);
      camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.035);
    }
    camera.lookAt(0, 0, 0);
  });

  return null;
};

// Main Exported Full Hero 3D Scene Component
export const FullHero3DScene: React.FC<{
  selectedNodeId: string | null;
  onSelectNode: (id: string | null) => void;
}> = ({ selectedNodeId, onSelectNode }) => {
  const [speedMultiplier, setSpeedMultiplier] = useState(1);
  const [isRotating, setIsRotating] = useState(true);
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

  const selectedNode = useMemo(() => {
    return NODES_DATA.find((n) => n.id === selectedNodeId) || null;
  }, [selectedNodeId]);

  if (useFallback) {
    return <Fallback2D />;
  }

  return (
    <div className="absolute inset-0 w-full h-full select-none overflow-hidden">
      
      {/* WebGL 3D Canvas */}
      <Suspense fallback={<Fallback2D />}>
        <Canvas
          camera={{ position: [0, 0, 8.5], fov: 48 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          className="h-full w-full"
          onPointerDown={() => {
            // Click empty canvas to deselect node
            onSelectNode(null);
          }}
        >
          {/* Dynamic Ambient & Directional Lights */}
          <ambientLight intensity={0.9} />
          <directionalLight position={[10, 12, 10]} intensity={2.0} color="#FFFFFF" />
          <directionalLight position={[-10, -10, -8]} intensity={1.2} color="#00D2FF" />
          <pointLight position={[0, 6, 4]} intensity={2.2} color="#38BDF8" distance={15} />
          <pointLight position={[0, -6, -4]} intensity={1.8} color="#818CF8" distance={15} />

          {/* Dynamic Mouse Parallax Camera */}
          <CameraController selectedNode={selectedNode} />

          {/* Central SAP S/4HANA Nucleus */}
          <CentralNucleus isSelected={selectedNodeId === 's4hana'} />

          {/* 8 Orbital SAP Nodes */}
          {NODES_DATA.map((node) => (
            <InteractiveOrbitNode
              key={node.id}
              node={node}
              selectedId={selectedNodeId}
              onSelect={(id) => onSelectNode(id === selectedNodeId ? null : id)}
              speedMultiplier={isRotating ? speedMultiplier : 0}
            />
          ))}

          {/* Floating 3D Polyhedrons / Crystals */}
          <FloatingCrystals />

          {/* 300+ Deep Space Data Particles */}
          <DeepDataParticles count={320} />

          {/* Digital Horizon Grid */}
          <HorizonGrid />
        </Canvas>
      </Suspense>

      {/* 3D Scene Controls HUD (Bottom Right) */}
      <div className="absolute bottom-6 right-6 z-20 hidden sm:flex items-center gap-2 rounded-2xl border border-slate-300 dark:border-sky-500/25 bg-white/80 dark:bg-[#070E1C]/85 px-3 py-2 backdrop-blur-xl shadow-xl">
        <button
          onClick={() => setIsRotating(!isRotating)}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-bold transition-all ${
            isRotating 
              ? 'bg-[#00A3E0] text-white shadow-md' 
              : 'bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300'
          }`}
          title="Toggle 3D Orbit Rotation"
        >
          <RotateCw className={`h-3.5 w-3.5 ${isRotating ? 'animate-spin-slow' : ''}`} />
          <span>{isRotating ? 'Orbit Active' : 'Orbit Paused'}</span>
        </button>

        <button
          onClick={() => setSpeedMultiplier(speedMultiplier === 1 ? 2 : speedMultiplier === 2 ? 0.5 : 1)}
          className="px-2.5 py-1 rounded-xl text-xs font-bold bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-[#00A3E0] transition-colors"
          title="Adjust 3D Speed"
        >
          {speedMultiplier}x Speed
        </button>

        <button
          onClick={() => onSelectNode(null)}
          className="flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
          title="Reset 3D Camera"
        >
          <Maximize2 className="h-3 w-3" />
          <span>Reset</span>
        </button>
      </div>

      {/* Live 3D Ecosystem Status Badge (Top Right HUD) */}
      <div className="absolute top-24 right-6 z-20 hidden md:flex items-center gap-2.5 rounded-full border border-sky-500/30 bg-white/85 dark:bg-[#070E1C]/85 px-3.5 py-1.5 backdrop-blur-xl shadow-lg">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-[11px] font-bold text-slate-800 dark:text-white">
          8 Active 3D SAP Nodes
        </span>
        <span className="text-[10px] font-mono text-[#00A3E0] font-bold bg-[#00A3E0]/10 px-2 py-0.5 rounded-full">
          Live Interactive
        </span>
      </div>

    </div>
  );
};
