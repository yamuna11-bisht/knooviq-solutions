import React, { Suspense, useState, useEffect } from 'react';
import { EnterpriseWorld3D, GLOBAL_HUBS, GlobalHub } from './EnterpriseWorld3D';
import { Fallback2D } from './Fallback2D';

export type GlobeDisplayMode = 'global' | 'ai' | 'clean-core';

interface Hero3DCanvasProps {
  globeMode?: GlobeDisplayMode;
  onGlobeModeChange?: (mode: GlobeDisplayMode) => void;
  selectedHub: GlobalHub | null;
  onSelectHub: (hub: GlobalHub | null) => void;
  isRotating?: boolean;
}

export const Hero3DCanvas: React.FC<Hero3DCanvasProps> = ({
  globeMode = 'global',
  onGlobeModeChange,
  selectedHub,
  onSelectHub,
  isRotating = true,
}) => {
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
      }
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (!hasWebGL) {
    return (
      <div className="absolute inset-0 w-full h-full">
        <Fallback2D />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 w-full h-full select-none overflow-hidden pointer-events-auto">
      <Suspense fallback={<Fallback2D />}>
        <EnterpriseWorld3D
          activeMode={globeMode}
          onModeChange={onGlobeModeChange}
          selectedHub={selectedHub}
          onSelectHub={onSelectHub}
          isRotating={isRotating}
          showModeTabs={false}
        />
      </Suspense>
    </div>
  );
};

export { GLOBAL_HUBS };
export type { GlobalHub };
