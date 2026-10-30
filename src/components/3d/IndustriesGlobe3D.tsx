import React, { Suspense, useRef, useState, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { 
  Building2, 
  Factory, 
  HeartPulse, 
  Truck, 
  Store, 
  Flame, 
  Cpu, 
  Plane, 
  Coins, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';

export interface IndustryNode {
  id: string;
  name: string;
  tagline: string;
  lat: number;
  lon: number;
  color: string;
  link: string;
}

export const CTA_INDUSTRIES: IndustryNode[] = [
  { id: 'manufacturing', name: 'Industrial & Auto', tagline: 'Smart Industry 4.0 MES', lat: 48.7758, lon: 9.1829, color: '#38BDF8', link: '/industries/industrial-manufacturing' },
  { id: 'logistics', name: 'Supply Chain & TM', tagline: 'Autonomous Yard & TM', lat: 51.9244, lon: 4.4777, color: '#00D2FF', link: '/industries/distribution' },
  { id: 'healthcare', name: 'Healthcare & Pharma', tagline: 'FDA & Track-and-Trace', lat: 42.3601, lon: -71.0589, color: '#34D399', link: '/industries/healthcare' },
  { id: 'energy', name: 'Energy & Utilities', tagline: 'Smart Grid & HSE Safety', lat: 24.7136, lon: 46.6753, color: '#FBBF24', link: '/industries/energy-services' },
  { id: 'retail', name: 'Retail & Commerce', tagline: 'Omnichannel POS Sync', lat: 35.6762, lon: 139.6503, color: '#F472B6', link: '/industries/consumer-goods' },
  { id: 'banking', name: 'Banking & FinTech', tagline: 'ISO 20022 Core Rail', lat: 40.7128, lon: -74.0060, color: '#818CF8', link: '/industries/banking' },
  { id: 'aerospace', name: 'Aerospace & Defense', tagline: 'Mission MRO Avionics', lat: 43.6047, lon: 1.4442, color: '#60A5FA', link: '/industries/aerospace-defense' },
  { id: 'hightech', name: 'High-Tech & SaaS', tagline: 'Semiconductor Cleanroom', lat: 12.9716, lon: 77.5946, color: '#A78BFA', link: '/industries/high-tech' },
  { id: 'infra', name: 'Real Estate & Infra', tagline: 'Capital Project EVM', lat: 25.2048, lon: 55.2708, color: '#FB923C', link: '/industries/real-estate' },
];

// Helper: Convert Lat & Lon to 3D Cartesian Vector3
const latLonToVector3 = (lat: number, lon: number, radius: number): THREE.Vector3 => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
};

// 1. Holographic 3D Globe with Industries
const HolographicIndustriesGlobe: React.FC<{
  selectedIndustry: IndustryNode | null;
  onSelectIndustry: (ind: IndustryNode | null) => void;
}> = ({ selectedIndustry, onSelectIndustry }) => {
  const globeGroupRef = useRef<THREE.Group>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  const radius = 2.15;

  // Fibonacci Spherical Point Lattice
  const { positions, colors } = useMemo(() => {
    const count = 1100;
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    const baseColor = new THREE.Color('#00D2FF');
    const midColor = new THREE.Color('#38BDF8');
    const deepColor = new THREE.Color('#003B73');

    for (let i = 0; i < count; i++) {
      const phi = Math.acos(1 - 2 * (i + 0.5) / count);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.cos(phi);
      const z = radius * Math.sin(phi) * Math.sin(theta);

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      // Gradient color mapping
      const factor = Math.abs(y) / radius;
      const mixed = baseColor.clone().lerp(midColor, factor * 0.5).lerp(deepColor, factor * 0.7);
      cols[i * 3] = mixed.r;
      cols[i * 3 + 1] = mixed.g;
      cols[i * 3 + 2] = mixed.b;
    }

    return { positions: pos, colors: cols };
  }, [radius]);

  // Dynamic Flight Arcs interconnecting industries
  const industryArcs = useMemo(() => {
    const arcs: { geometry: THREE.TubeGeometry; color: string }[] = [];
    // Connect selected pairs
    const pairs: [number, number][] = [
      [0, 1], // Manufacturing -> Logistics
      [1, 2], // Logistics -> Healthcare
      [2, 5], // Healthcare -> Banking
      [5, 4], // Banking -> Retail
      [4, 7], // Retail -> High-Tech
      [7, 3], // High-Tech -> Energy
      [3, 8], // Energy -> Infra
      [8, 6], // Infra -> Aerospace
      [6, 0], // Aerospace -> Manufacturing
    ];

    pairs.forEach(([i, j]) => {
      const start = latLonToVector3(CTA_INDUSTRIES[i].lat, CTA_INDUSTRIES[i].lon, radius);
      const end = latLonToVector3(CTA_INDUSTRIES[j].lat, CTA_INDUSTRIES[j].lon, radius);

      const mid = start.clone().add(end).multiplyScalar(0.5);
      const distance = start.distanceTo(end);
      mid.normalize().multiplyScalar(radius + distance * 0.3);

      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      const geometry = new THREE.TubeGeometry(curve, 28, 0.016, 6, false);
      arcs.push({ geometry, color: CTA_INDUSTRIES[i].color });
    });

    return arcs;
  }, [radius]);

  // Frame Animation: continuous smooth rotation
  useFrame((_, delta) => {
    if (globeGroupRef.current) {
      globeGroupRef.current.rotation.y += delta * 0.09;
    }
    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y -= delta * 0.05;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.06;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x -= delta * 0.07;
    }
  });

  return (
    <group ref={globeGroupRef}>
      {/* 1. Fibonacci Point Lattice */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
          <bufferAttribute attach="attributes-color" count={colors.length / 3} array={colors} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.06} vertexColors transparent opacity={0.88} blending={THREE.AdditiveBlending} />
      </points>

      {/* 2. Inner Translucent Wireframe Core */}
      <mesh>
        <sphereGeometry args={[radius * 0.98, 26, 26]} />
        <meshBasicMaterial color="#0284C7" wireframe transparent opacity={0.2} />
      </mesh>

      {/* 3. Glowing Atmospheric Halo */}
      <mesh ref={atmosphereRef}>
        <sphereGeometry args={[radius * 1.08, 30, 30]} />
        <meshStandardMaterial
          color="#00A3E0"
          emissive="#0055AA"
          emissiveIntensity={0.8}
          transparent
          opacity={0.15}
          side={THREE.BackSide}
        />
      </mesh>

      {/* 4. Cybernetic Orbital Rings */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 2.3, 0.25, 0]}>
        <torusGeometry args={[radius * 1.42, 0.014, 16, 80]} />
        <meshBasicMaterial color="#00D2FF" transparent opacity={0.4} />
      </mesh>

      <mesh ref={ring2Ref} rotation={[-Math.PI / 3.2, 0.35, 0]}>
        <torusGeometry args={[radius * 1.58, 0.012, 16, 80]} />
        <meshBasicMaterial color="#818CF8" transparent opacity={0.3} />
      </mesh>

      {/* 5. 3D Interconnecting Flight Arcs */}
      {industryArcs.map((arc, idx) => (
        <mesh key={idx} geometry={arc.geometry}>
          <meshBasicMaterial color={arc.color} transparent opacity={0.4} />
        </mesh>
      ))}

      {/* 6. Industry Markers with Labels */}
      {CTA_INDUSTRIES.map((ind, idx) => {
        const pinPos = latLonToVector3(ind.lat, ind.lon, radius);
        const isSelected = selectedIndustry?.id === ind.id;

        return (
          <group key={idx} position={pinPos}>
            {/* 3D Pin Beacon */}
            <mesh
              onClick={(e) => {
                e.stopPropagation();
                onSelectIndustry(isSelected ? null : ind);
              }}
              scale={isSelected ? 1.8 : 1.1}
            >
              <sphereGeometry args={[0.075, 16, 16]} />
              <meshStandardMaterial
                color={ind.color}
                emissive={ind.color}
                emissiveIntensity={isSelected ? 4 : 2}
              />
            </mesh>

            {/* Pulsing Ripple */}
            <mesh>
              <ringGeometry args={[0.09, 0.17, 24]} />
              <meshBasicMaterial color={ind.color} transparent opacity={0.6} side={THREE.DoubleSide} />
            </mesh>

            {/* 3D Floating Industry Badge */}
            <Html distanceFactor={7.8} center position={[0, 0.22, 0]}>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectIndustry(isSelected ? null : ind);
                }}
                className={`cursor-pointer transition-all duration-300 rounded-lg px-2.5 py-1 border text-[10px] font-bold tracking-wide whitespace-nowrap shadow-xl flex items-center gap-1.5 select-none ${
                  isSelected
                    ? 'bg-slate-950/95 border-cyan-400 text-white shadow-[0_0_20px_rgba(0,210,255,0.7)] scale-110 z-50'
                    : 'bg-[#071329]/85 hover:bg-[#0A1931] border-sky-400/40 text-sky-200 hover:text-white hover:border-cyan-300 hover:scale-105 backdrop-blur-md shadow-lg shadow-sky-950/60'
                }`}
              >
                <span className="h-2 w-2 rounded-full animate-ping flex-shrink-0" style={{ backgroundColor: ind.color }} />
                <span>{ind.name}</span>
              </div>
            </Html>
          </group>
        );
      })}
    </group>
  );
};

// 2. High-Tech 2D Fallback for older browsers
const IndustriesGlobe2DFallback: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4">
      <div className="relative w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] flex items-center justify-center rounded-full border border-sky-400/25 bg-[#061224]/80 shadow-[0_0_50px_rgba(0,163,224,0.25)]">
        {/* Animated Rings */}
        <div className="absolute inset-0 rounded-full border border-dashed border-sky-400/30 animate-spin" style={{ animationDuration: '35s' }} />
        <div className="absolute inset-5 rounded-full border border-cyan-400/20" />
        <div className="absolute inset-10 rounded-full border border-indigo-400/20 animate-spin" style={{ animationDuration: '45s', animationDirection: 'reverse' }} />

        {/* Central Glowing Globe */}
        <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-[#00A3E0] via-[#0070C0] to-[#0A1931] p-1 shadow-[0_0_30px_rgba(0,210,255,0.4)] flex flex-col items-center justify-center text-center">
          <Sparkles className="w-7 h-7 text-cyan-200 animate-pulse" />
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-white mt-1">Enterprise</span>
          <span className="text-[9px] font-bold text-cyan-300">3D Globe</span>
        </div>

        {/* Floating Industry Pills */}
        <div className="absolute -top-2 px-3 py-1 rounded-full bg-[#071329] border border-sky-400/40 text-white text-[10px] font-bold shadow-md">
          Industrial & Auto
        </div>
        <div className="absolute top-14 -left-3 px-3 py-1 rounded-full bg-[#071329] border border-cyan-400/40 text-cyan-200 text-[10px] font-bold shadow-md">
          Supply Chain & TM
        </div>
        <div className="absolute bottom-14 -left-3 px-3 py-1 rounded-full bg-[#071329] border border-emerald-400/40 text-emerald-200 text-[10px] font-bold shadow-md">
          Healthcare & Pharma
        </div>
        <div className="absolute -bottom-2 px-3 py-1 rounded-full bg-[#071329] border border-amber-400/40 text-amber-200 text-[10px] font-bold shadow-md">
          Energy & Utilities
        </div>
        <div className="absolute bottom-14 -right-3 px-3 py-1 rounded-full bg-[#071329] border border-pink-400/40 text-pink-200 text-[10px] font-bold shadow-md">
          Retail & Commerce
        </div>
        <div className="absolute top-14 -right-3 px-3 py-1 rounded-full bg-[#071329] border border-indigo-400/40 text-indigo-200 text-[10px] font-bold shadow-md">
          Banking & FinTech
        </div>
      </div>
    </div>
  );
};

// 3. Main Exported IndustriesGlobe3D Component
export const IndustriesGlobe3D: React.FC = () => {
  const [hasWebGL, setHasWebGL] = useState(true);
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryNode | null>(null);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (!hasWebGL) {
    return <IndustriesGlobe2DFallback />;
  }

  return (
    <div className="relative w-full h-full min-h-[350px] sm:min-h-[400px] flex items-center justify-center select-none">
      
      {/* 3D WebGL Canvas */}
      <Suspense fallback={<IndustriesGlobe2DFallback />}>
        <Canvas
          camera={{ position: [0, 0, 7.2], fov: 46 }}
          dpr={[1, 1.8]}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          className="w-full h-full"
          onPointerDown={() => setSelectedIndustry(null)}
        >
          {/* Lighting */}
          <ambientLight intensity={0.9} />
          <directionalLight position={[8, 10, 8]} intensity={2.0} color="#FFFFFF" />
          <directionalLight position={[-8, -8, -6]} intensity={1.2} color="#00D2FF" />
          <pointLight position={[0, 4, 4]} intensity={2.2} color="#00A3E0" distance={12} />
          <pointLight position={[0, -4, -4]} intensity={1.5} color="#818CF8" distance={12} />

          {/* 3D Rotating Globe with Industry Hubs */}
          <HolographicIndustriesGlobe
            selectedIndustry={selectedIndustry}
            onSelectIndustry={setSelectedIndustry}
          />
        </Canvas>
      </Suspense>

      {/* Floating Selected Industry Detail Card (Pop-up upon interaction) */}
      {selectedIndustry && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[90%] max-w-[320px] bg-slate-950/95 border border-cyan-400/80 rounded-xl p-3 shadow-2xl shadow-cyan-950/80 backdrop-blur-xl z-30 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: selectedIndustry.color }} />
              <h5 className="font-display text-xs font-bold text-white truncate">{selectedIndustry.name}</h5>
            </div>
            <Link
              to={selectedIndustry.link}
              className="inline-flex items-center gap-1 text-[10px] font-bold text-cyan-300 hover:text-cyan-100 uppercase tracking-wider bg-cyan-500/20 px-2 py-0.5 rounded border border-cyan-400/30 flex-shrink-0 transition-colors"
            >
              <span>Explore</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </Link>
          </div>
          <p className="text-[10.5px] text-slate-300 mt-1 leading-snug">{selectedIndustry.tagline}</p>
        </div>
      )}

      {/* Subtle Bottom Instruction Pill */}
      <div className="absolute top-2 right-2 pointer-events-none">
        <span className="text-[9px] font-mono uppercase tracking-wider text-cyan-300/80 bg-sky-950/70 border border-sky-400/25 px-2.5 py-0.5 rounded-full backdrop-blur-sm">
          Interactive 3D Globe
        </span>
      </div>

    </div>
  );
};

export default IndustriesGlobe3D;
