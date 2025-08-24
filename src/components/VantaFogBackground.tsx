import { useEffect, useRef, useState } from 'react';

interface VantaFogBackgroundProps {
  className?: string;
}

declare global {
  interface Window {
    VANTA: {
      FOG: (config: any) => any;
    };
  }
}

export function VantaFogBackground({ className = '' }: VantaFogBackgroundProps) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if VANTA is available
    if (!window.VANTA) {
      // Load Three.js first
      const threeScript = document.createElement('script');
      threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
      threeScript.onload = () => {
        // Load Vanta.js after Three.js
        const vantaScript = document.createElement('script');
        vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.fog.min.js';
        vantaScript.onload = () => {
          setIsLoaded(true);
        };
        document.head.appendChild(vantaScript);
      };
      document.head.appendChild(threeScript);
    } else {
      setIsLoaded(true);
    }

    return () => {
      // Cleanup
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (!isLoaded || !vantaRef.current || !window.VANTA) return;

    // Check for reduced motion preference
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    try {
      const effect = window.VANTA.FOG({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: window.innerHeight * 1.2, // Just slightly extend beyond viewport
        minWidth: window.innerWidth,
        // Blue palette for your academic theme
        highlightColor: 0xe0e0eb,
        midtoneColor: 0xe0e0eb,
        lowlightColor: 0xe0e0eb,
        baseColor: 0x80C0FF,
        blurFactor: 0.6,
        zoom: 1.4, // Keep fog contained to landing page
        speed: 2
      });

      setVantaEffect(effect);

      // Handle window resize to ensure full coverage
      const handleResize = () => {
        if (effect && effect.resize) {
          effect.resize();
        }
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        if (effect) {
          effect.destroy();
        }
      };
    } catch (error) {
      console.error('Failed to initialize Vanta fog effect:', error);
    }
  }, [isLoaded]);

  return (
    <div
      ref={vantaRef}
      className={`vanta-fog-background fog-transition ${className}`}
      aria-hidden="true"
    />
  );
}
