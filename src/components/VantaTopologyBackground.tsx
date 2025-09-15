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
    // Load p5.js and Vanta.js scripts if not already loaded
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
        // Load p5.js first
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.7.0/p5.min.js');
        
        // Load Vanta.js topology
        await loadScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.topology.min.js');

        // Wait a bit for scripts to initialize
        await new Promise(resolve => setTimeout(resolve, 100));

        if (containerRef.current && window.VANTA && window.VANTA.TOPOLOGY) {
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
        }
      } catch (error) {
        console.error('Failed to initialize Vanta TOPOLOGY background:', error);
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
