import { useEffect, useRef } from "react";

export function GeometricBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Draw geometric patterns
    const drawPattern = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Warm orange circles
      ctx.globalAlpha = 0.1;
      ctx.fillStyle = '#FF6B35';
      
      const circles = [
        { x: canvas.width * 0.2, y: canvas.height * 0.3, r: 120 },
        { x: canvas.width * 0.8, y: canvas.height * 0.7, r: 180 },
        { x: canvas.width * 0.9, y: canvas.height * 0.2, r: 90 },
      ];

      circles.forEach(circle => {
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Blue geometric shapes
      ctx.fillStyle = '#004AAD';
      const triangles = [
        { x: canvas.width * 0.1, y: canvas.height * 0.8, size: 60 },
        { x: canvas.width * 0.7, y: canvas.height * 0.1, size: 80 },
      ];

      triangles.forEach(tri => {
        ctx.beginPath();
        ctx.moveTo(tri.x, tri.y - tri.size);
        ctx.lineTo(tri.x - tri.size * 0.866, tri.y + tri.size * 0.5);
        ctx.lineTo(tri.x + tri.size * 0.866, tri.y + tri.size * 0.5);
        ctx.closePath();
        ctx.fill();
      });

      // Connection lines
      ctx.globalAlpha = 0.05;
      ctx.strokeStyle = '#FFB800';
      ctx.lineWidth = 2;
      
      circles.forEach((circle, i) => {
        triangles.forEach(tri => {
          ctx.beginPath();
          ctx.moveTo(circle.x, circle.y);
          ctx.lineTo(tri.x, tri.y);
          ctx.stroke();
        });
      });
    };

    drawPattern();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
}