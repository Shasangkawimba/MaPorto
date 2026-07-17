"use client";
import Beams from './Beams';
import { useIsMobile } from '@/hooks/useIsMobile';

export default function BeamsBackground() {
  const isMobile = useIsMobile();

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none', background: '#000000' }}>
      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        <Beams
          beamWidth={2}
          beamHeight={30}
          beamNumber={20}
          lightColor="#ffffff"
          speed={isMobile ? 0 : 1.5}
          noiseIntensity={isMobile ? 0.2 : 1.75}
          scale={0.2}
          rotation={45}
        />
      </div>
    </div>
  );
}
