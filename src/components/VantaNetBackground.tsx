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
    const initializeVanta = () => {
      // Check if scripts are already loaded
      if (window.VANTA && window.VANTA.NET && containerRef.current) {
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
      } else {
        // If scripts aren't loaded yet, wait a bit and try again
        setTimeout(initializeVanta, 50);
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
