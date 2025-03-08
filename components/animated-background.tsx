"use client"

import { useEffect, useRef } from "react"

interface AnimatedBackgroundProps {
  color1?: string
  color2?: string
  color3?: string
  speed?: number
}

export default function AnimatedBackground({
  color1 = "#dbeafe",
  color2 = "#bfdbfe",
  color3 = "#93c5fd",
  speed = 15,
}: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create gradient circles
    const circles: Circle[] = []
    const colors = [color1, color2, color3]

    for (let i = 0; i < 15; i++) {
      const radius = Math.random() * 100 + 50
      circles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius,
        color: colors[Math.floor(Math.random() * colors.length)],
        dx: (Math.random() - 0.5) * speed * 0.1,
        dy: (Math.random() - 0.5) * speed * 0.1,
        opacity: Math.random() * 0.2 + 0.1,
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw and update circles
      circles.forEach((circle) => {
        // Draw circle
        ctx.beginPath()
        const gradient = ctx.createRadialGradient(circle.x, circle.y, 0, circle.x, circle.y, circle.radius)
        gradient.addColorStop(
          0,
          `${circle.color}${Math.floor(circle.opacity * 255)
            .toString(16)
            .padStart(2, "0")}`,
        )
        gradient.addColorStop(1, `${circle.color}00`)

        ctx.fillStyle = gradient
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2)
        ctx.fill()

        // Update position
        circle.x += circle.dx
        circle.y += circle.dy

        // Bounce off edges
        if (circle.x - circle.radius < 0 || circle.x + circle.radius > canvas.width) {
          circle.dx = -circle.dx
        }

        if (circle.y - circle.radius < 0 || circle.y + circle.radius > canvas.height) {
          circle.dy = -circle.dy
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [color1, color2, color3, speed])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  )
}

interface Circle {
  x: number
  y: number
  radius: number
  color: string
  dx: number
  dy: number
  opacity: number
}

