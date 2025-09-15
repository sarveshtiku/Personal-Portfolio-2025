"use client"

import { useEffect, useRef } from "react"

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let time = 0
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const animate = () => {
      if (!ctx) return
      
      time += 0.01
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Create gradient
      const gradient = ctx.createRadialGradient(
        canvas.width * 0.3 + Math.sin(time) * 50,
        canvas.height * 0.2 + Math.cos(time * 0.8) * 30,
        0,
        canvas.width * 0.7 + Math.cos(time * 1.2) * 40,
        canvas.height * 0.8 + Math.sin(time * 0.6) * 50,
        Math.max(canvas.width, canvas.height) * 0.8
      )
      
      // Blue gradient colors
      gradient.addColorStop(0, 'rgba(102, 204, 255, 0.8)') // #66ccff
      gradient.addColorStop(0.3, 'rgba(230, 247, 255, 0.6)') // #e6f7ff
      gradient.addColorStop(0.6, 'rgba(0, 102, 204, 0.4)') // #0066cc
      gradient.addColorStop(1, 'rgba(0, 0, 102, 0.2)') // #000066
      
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Add floating orbs
      for (let i = 0; i < 5; i++) {
        const x = canvas.width * (0.2 + i * 0.15) + Math.sin(time + i) * 100
        const y = canvas.height * (0.3 + i * 0.1) + Math.cos(time * 0.7 + i) * 80
        const radius = 80 + Math.sin(time * 2 + i) * 20
        
        const orbGradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
        orbGradient.addColorStop(0, `rgba(102, 204, 255, ${0.3 + Math.sin(time + i) * 0.1})`)
        orbGradient.addColorStop(0.7, `rgba(0, 102, 204, ${0.1 + Math.cos(time + i) * 0.05})`)
        orbGradient.addColorStop(1, 'rgba(0, 0, 102, 0)')
        
        ctx.fillStyle = orbGradient
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fill()
      }
      
      // Add subtle noise
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const data = imageData.data
      
      for (let i = 0; i < data.length; i += 4) {
        const noise = (Math.random() - 0.5) * 10
        data[i] = Math.max(0, Math.min(255, data[i] + noise))     // R
        data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + noise)) // G
        data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + noise)) // B
      }
      
      ctx.putImageData(imageData, 0, 0)
      
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none" style={{ zIndex: -1 }}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ 
          background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)'
        }}
      />
      
      {/* Additional overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-slate-900/30" />
    </div>
  )
}
