import { useEffect, useRef, useState } from 'react';

interface VantaTopologyBackgroundProps {
  className?: string;
}

declare global {
  interface Window {
    VANTA: {
      FOG: (config: any) => any;
    };
  }
}

export function VantaTopologyBackground({ className = '' }: VantaTopologyBackgroundProps) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log('VantaTopologyBackground: Starting script loading process');
    // Check if VANTA is available
    if (!window.VANTA) {
      console.log('VantaTopologyBackground: VANTA not available, loading scripts...');
      // Load Three.js first
      const threeScript = document.createElement('script');
      threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
      threeScript.onload = () => {
        console.log('VantaTopologyBackground: Three.js loaded successfully');
        // Load Vanta.js FOG after Three.js
        const vantaScript = document.createElement('script');
        vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.fog.min.js';
        vantaScript.onload = () => {
          console.log('VantaTopologyBackground: Vanta.js FOG loaded successfully');
          setIsLoaded(true);
        };
        vantaScript.onerror = (error) => {
          console.error('VantaTopologyBackground: Failed to load Vanta.js FOG:', error);
        };
        document.head.appendChild(vantaScript);
      };
      threeScript.onerror = (error) => {
        console.error('VantaTopologyBackground: Failed to load Three.js:', error);
      };
      document.head.appendChild(threeScript);
    } else {
      console.log('VantaTopologyBackground: VANTA already available');
      setIsLoaded(true);
    }

    return () => {
      // Cleanup
      if (vantaEffect) {
        vantaEffect.destroy();
      }
      // Remove the fog container from document body
      const fogContainer = document.getElementById('vanta-fog-container');
      if (fogContainer) {
        document.body.removeChild(fogContainer);
      }
    };
  }, []);

  useEffect(() => {
    if (!isLoaded || !vantaRef.current || !window.VANTA) {
      console.log('VantaTopologyBackground: Missing requirements, cannot initialize');
      console.log('VantaTopologyBackground: isLoaded =', isLoaded);
      console.log('VantaTopologyBackground: vantaRef.current =', !!vantaRef.current);
      console.log('VantaTopologyBackground: window.VANTA =', !!window.VANTA);
      return;
    }

    // Check for reduced motion preference
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      console.log('VantaTopologyBackground: Reduced motion preference detected, skipping');
      return;
    }

    // Get current screen size for responsive coverage
    const isMobile = window.innerWidth <= 480;
    const isTablet = window.innerWidth <= 768 && window.innerWidth > 480;
    
    // Set coverage based on screen size
    let coverage = 1.55; // Default for desktop (increased from 1.5)
    let zoomLevel = 1.55;
    
    if (isMobile) {
      coverage = 1.85; /* Better coverage for phones (185vh) */
      zoomLevel = 1.85;
    } else if (isTablet) {
      coverage = 1.8; // Coverage for tablets (180vh)
      zoomLevel = 1.8;
    }

    console.log('VantaTopologyBackground: Screen size detected:', {
      width: window.innerWidth,
      height: window.innerHeight,
      isMobile,
      isTablet,
      coverage,
      zoomLevel
    });

    try {
      console.log('VantaTopologyBackground: Creating fog effect...');
      
      // Create a dedicated div for the fog effect at document level
      const fogContainer = document.createElement('div');
      fogContainer.id = 'vanta-fog-container';
      fogContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 10;
        pointer-events: none;
        opacity: 0.8;
      `;
      document.body.appendChild(fogContainer);
      
      console.log('VantaTopologyBackground: Created fog container:', {
        id: fogContainer.id,
        styles: fogContainer.style.cssText,
        parent: fogContainer.parentElement?.tagName,
        inDOM: document.body.contains(fogContainer)
      });
      
      const effect = window.VANTA.FOG({
        el: fogContainer, // Use the document-level container
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0x66ccff, // #66ccff
        midtoneColor: 0x0066cc,  // #0066cc
        lowlightColor: 0x000066, // #000066
        baseColor: 0xe6f7ff,     // #e6f7ff
        blurFactor: 0.6,
        zoom: 1,
        speed: 1.5
      });

      console.log('VantaTopologyBackground: Fog effect created successfully:', effect);
      
      // Debug: Check CSS rules being applied
      const computedStyles = window.getComputedStyle(fogContainer);
      console.log('VantaTopologyBackground: CSS Rules Check:', {
        'z-index': computedStyles.zIndex,
        'position': computedStyles.position,
        'top': computedStyles.top,
        'left': computedStyles.left,
        'width': computedStyles.width,
        'height': computedStyles.height,
        'pointer-events': computedStyles.pointerEvents
      });
      
      // Debug: Check if container is visible
      const rect = fogContainer.getBoundingClientRect();
      console.log('VantaTopologyBackground: Container visibility:', {
        boundingRect: {
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height
        },
        isVisible: rect.width > 0 && rect.height > 0,
        viewportPosition: {
          top: rect.top,
          left: rect.left,
          bottom: rect.bottom,
          right: rect.right
        }
      });
      
      // Debug: Check z-index stacking context
      console.log('VantaTopologyBackground: Z-index analysis:', {
        containerZIndex: fogContainer.style.zIndex,
        computedZIndex: computedStyles.zIndex,
        parentZIndex: fogContainer.parentElement ? window.getComputedStyle(fogContainer.parentElement).zIndex : 'N/A',
        bodyZIndex: window.getComputedStyle(document.body).zIndex,
        htmlZIndex: window.getComputedStyle(document.documentElement).zIndex
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
        // Remove the fog container from document body
        const fogContainer = document.getElementById('vanta-fog-container');
        if (fogContainer) {
          document.body.removeChild(fogContainer);
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
