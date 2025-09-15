import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    VANTA: {
      TRUNK: (config: any) => any;
    };
  }
}

interface VantaTrunkBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export default function VantaTrunkBackground({ children, className = "" }: VantaTrunkBackgroundProps) {
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
        console.log('Starting Vanta TRUNK initialization...');
        
        // Load p5.js first
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.7.0/p5.min.js');
        console.log('p5.js loaded');
        
        // Load Vanta.js TRUNK
        await loadScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.trunk.min.js');
        console.log('Vanta TRUNK loaded');

        // Wait longer for scripts to initialize
        await new Promise(resolve => setTimeout(resolve, 500));

        console.log('VANTA available:', !!window.VANTA);
        console.log('Container ref:', !!containerRef.current);

        if (containerRef.current && window.VANTA && window.VANTA.TRUNK) {
          // Clean up existing Vanta instance
          if (vantaRef.current) {
            vantaRef.current.destroy();
          }

          console.log('Initializing Vanta TRUNK...');
          
          // Initialize Vanta TRUNK with your specified settings
          vantaRef.current = window.VANTA.TRUNK({
            el: containerRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x4a4598,      // #4a4598
            backgroundColor: 0xa4c7eb, // #a4c7eb
            spacing: 0,
            chaos: 1
          });
          
          console.log('Vanta TRUNK initialized successfully');
        } else {
          console.error('Missing requirements for Vanta TRUNK:', {
            container: !!containerRef.current,
            vanta: !!window.VANTA,
            trunk: !!(window.VANTA && window.VANTA.TRUNK)
          });
        }
      } catch (error) {
        console.error('Failed to initialize Vanta TRUNK background:', error);
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
    <div className="relative min-h-screen">
      {/* Fallback background while Vanta loads */}
      <div 
        className="fixed inset-0 w-full h-full"
        style={{ 
          zIndex: -10,
          background: 'linear-gradient(135deg, #a4c7eb 0%, #4a4598 100%)'
        }}
      />
      
      {/* Vanta container */}
      <div 
        ref={containerRef} 
        className={`vanta-trunk-background ${className}`}
      />
      
      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
}
