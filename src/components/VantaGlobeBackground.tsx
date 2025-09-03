import { useEffect } from 'react';

declare global {
  interface Window {
    VANTA: any;
  }
}

const VantaGlobeBackground = () => {
  useEffect(() => {
    // Load Three.js if not already loaded
    if (!window.THREE) {
      const threeScript = document.createElement('script');
      threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
      threeScript.onload = () => {
        loadVantaGlobe();
      };
      document.head.appendChild(threeScript);
    } else {
      loadVantaGlobe();
    }

    function loadVantaGlobe() {
      // Load Vanta Globe script if not already loaded
      if (!window.VANTA || !window.VANTA.GLOBE) {
        const vantaScript = document.createElement('script');
        vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js';
        vantaScript.onload = () => {
          initializeGlobe();
        };
        document.head.appendChild(vantaScript);
      } else {
        initializeGlobe();
      }
    }

    function initializeGlobe() {
      console.log('Initializing Vanta Globe background...');
      
      // Create a container for the globe effect
      const globeContainer = document.createElement('div');
      globeContainer.id = 'vanta-globe-container';
      globeContainer.style.position = 'fixed';
      globeContainer.style.top = '0';
      globeContainer.style.left = '0';
      globeContainer.style.width = '100%';
      globeContainer.style.height = '100%';
      globeContainer.style.zIndex = '10';
      globeContainer.style.pointerEvents = 'none';
      
      // Append to body
      document.body.appendChild(globeContainer);
      
      console.log('Globe container created and appended to body');

      // Initialize Vanta Globe effect
      const globeEffect = window.VANTA.GLOBE({
        el: '#vanta-globe-container',
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x3f82ff,
        backgroundColor: 0xcadcf5
      });

      console.log('Vanta Globe effect initialized:', globeEffect);
    }

    // Cleanup function
    return () => {
      const globeContainer = document.getElementById('vanta-globe-container');
      if (globeContainer) {
        globeContainer.remove();
        console.log('Globe container removed');
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default VantaGlobeBackground;
