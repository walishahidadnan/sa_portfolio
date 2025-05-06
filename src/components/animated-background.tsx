"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Store canvas dimensions in local variables
    let canvasWidth = window.innerWidth
    let canvasHeight = window.innerHeight

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      // Update our local variables
      canvasWidth = window.innerWidth
      canvasHeight = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Particle class - now uses local variables instead of canvas properties
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        // Use local variables instead of canvas.width/height
        this.x = Math.random() * canvasWidth
        this.y = Math.random() * canvasHeight
        this.size = Math.random() * 3 + 1
        this.speedX = Math.random() * 0.5 - 0.25
        this.speedY = Math.random() * 0.5 - 0.25
        this.color = this.getRandomColor()
      }

      getRandomColor() {
        const colors = ["#374660", "#1A203E", "#0F0E3D", "#252078", "#010923"]
        return colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Use local variables instead of canvas.width/height
        if (this.x > canvasWidth) this.x = 0
        else if (this.x < 0) this.x = canvasWidth
        if (this.y > canvasHeight) this.y = 0
        else if (this.y < 0) this.y = canvasHeight
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create particles
    const particlesArray: Particle[] = []
    const numberOfParticles = Math.min(100, (canvasWidth * canvasHeight) / 10000)

    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle())
    }

    // Connect particles with lines
    function connect() {
      if (!ctx) return
      const maxDistance = 150
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.2})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx.stroke()
          }
        }
      }
    }

    // Animation loop
    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvasWidth, canvasHeight)

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()
      }
      connect()
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" style={{ opacity: 0.3 }} />
}
