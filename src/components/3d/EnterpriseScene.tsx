import React, { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { EcosystemCore } from './EcosystemCore';
import { DataParticles } from './DataParticles';
import { Fallback2D } from './Fallback2D';

export const EnterpriseScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    // Check if WebGL is supported
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setUseFallback(true);
        return;
      }
    } catch {
      setUseFallback(true);
      return;
    }

    // Check user preferences: reduced motion or very small devices
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setUseFallback(true);
      return;
    }

    // Intersection observer to pause 3D loop when offscreen (Core Web Vitals & Battery Saver)
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  if (useFallback) {
    return <Fallback2D />;
  }

  return (
    <div ref={containerRef} className="relative h-[480px] sm:h-[540px] lg:h-[600px] w-full select-none">
      {isVisible && (
        <Suspense fallback={<Fallback2D />}>
          <Canvas
            camera={{ position: [0, 0, 7.5], fov: 45 }}
            dpr={[1, 1.5]}
            gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
            className="h-full w-full"
          >
            <ambientLight intensity={0.8} />
            <directionalLight position={[10, 10, 10]} intensity={1.5} color="#FFFFFF" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00D2FF" />
            <pointLight position={[0, 0, 0]} intensity={2} color="#046BD2" distance={8} />

            <EcosystemCore />
            <DataParticles count={100} />
          </Canvas>
        </Suspense>
      )}
    </div>
  );
};
