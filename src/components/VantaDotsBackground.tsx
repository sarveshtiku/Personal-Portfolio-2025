import { useEffect, useRef } from 'react';

// Extend Window interface to include VANTA
declare global {
  interface Window {
    VANTA: {
      DOTS: (config: any) => any;
    };
  }
}

interface VantaDotsBackgroundProps {
  className?: string;
}

export default function VantaDotsBackground({ className = "" }: VantaDotsBackgroundProps) {
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
        
        // Load Vanta.js DOTS
        await loadScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.dots.min.js');

        // Wait a bit for scripts to initialize
        await new Promise(resolve => setTimeout(resolve, 100));

        if (containerRef.current && window.VANTA && window.VANTA.DOTS) {
          // Initialize Vanta DOTS with your specified settings
          vantaRef.current = window.VANTA.DOTS({
            el: containerRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x2463eb,      // #2463eb
            color2: 0x2463eb,     // #2463eb
            backgroundColor: 0xcadcf5, // #cadcf5
            size: 3,
            spacing: 35,
            showLines: true
          });
        }
      } catch (error) {
        console.error('Failed to initialize Vanta DOTS background:', error);
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
