import { useEffect, useRef } from 'react';

// Extend Window interface to include VANTA
declare global {
  interface Window {
    VANTA: {
      TOPOLOGY: (config: any) => any;
    };
  }
}

interface VantaTopologyBackgroundProps {
  className?: string;
}

export default function VantaTopologyBackground({ className = "" }: VantaTopologyBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const vantaRef = useRef<any>(null);

  useEffect(() => {
    const initializeVanta = () => {
      // Check if scripts are already loaded
      if (window.VANTA && window.VANTA.TOPOLOGY && containerRef.current) {
        // Initialize Vanta TOPOLOGY with your specified settings
        vantaRef.current = window.VANTA.TOPOLOGY({
          el: containerRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x80c0ff,      // #80c0ff
          backgroundColor: 0xe5f2ff  // #e5f2ff
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
