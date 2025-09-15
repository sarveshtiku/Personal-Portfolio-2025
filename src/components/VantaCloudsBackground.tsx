import { useEffect, useRef } from 'react';

// Extend Window interface to include VANTA
declare global {
  interface Window {
    VANTA: {
      CLOUDS: (config: any) => any;
    };
  }
}

interface VantaCloudsBackgroundProps {
  className?: string;
}

export default function VantaCloudsBackground({ className = "" }: VantaCloudsBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const vantaRef = useRef<any>(null);

  useEffect(() => {
    // Load Three.js and Vanta.js scripts if not already loaded
    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
        document.head.appendChild(script);
      });
    };

    const initializeVanta = async () => {
      try {
        // Load Three.js first
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js');
        
        // Load Vanta.js CLOUDS
        await loadScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.clouds.min.js');

        // Wait a bit for scripts to initialize
        await new Promise(resolve => setTimeout(resolve, 100));

        if (containerRef.current && window.VANTA && window.VANTA.CLOUDS) {
          // Initialize Vanta CLOUDS with your specified settings
          vantaRef.current = window.VANTA.CLOUDS({
            el: containerRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            backgroundColor: 0xffffff,    // #ffffff
            skyColor: 0x80c0ff,          // #80c0ff
            cloudColor: 0xadc1de,        // #adc1de
            cloudShadowColor: 0x2e68a0,  // #2e68a0
            sunColor: 0xff9919,          // #ff9919
            sunGlareColor: 0xff6633,     // #ff6633
            sunlightColor: 0xff9933,     // #ff9933
            speed: 1
          });
        }
      } catch (error) {
        console.error('Failed to initialize Vanta CLOUDS background:', error);
      }
    };

    initializeVanta();

    // Cleanup function
    return () => {
      if (vantaRef.current) {
        vantaRef.current.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 w-full h-full ${className}`}
      style={{ zIndex: -1 }}
    />
  );
}
