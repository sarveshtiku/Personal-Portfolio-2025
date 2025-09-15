import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    VANTA: {
      NET: (config: any) => any;
    };
  }
}

interface VantaNetBackgroundProps {
  className?: string;
}

export default function VantaNetBackground({ className = "" }: VantaNetBackgroundProps) {
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
        
        // Load Vanta.js NET
        await loadScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js');

        // Wait for scripts to initialize
        await new Promise(resolve => setTimeout(resolve, 100));

        if (containerRef.current && window.VANTA && window.VANTA.NET) {
          // Clean up existing Vanta instance
          if (vantaRef.current) {
            vantaRef.current.destroy();
          }

          // Initialize Vanta NET with your specified settings
          vantaRef.current = window.VANTA.NET({
            el: containerRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0xa2c3dc,      // #a2c3dc
            backgroundColor: 0xe1ecfa, // #e1ecfa
            points: 10,
            maxDistance: 20,
            spacing: 15,
            showDots: true
          });
        }
      } catch (error) {
        console.error('Failed to initialize Vanta NET background:', error);
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
