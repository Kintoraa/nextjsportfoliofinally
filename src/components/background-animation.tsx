"use client"

import { useEffect, useRef } from "react"

interface Particle {
    x: number
    y: number
    size: number
    speedX: number
    speedY: number
    color: string
    alpha: number
    decay: number
}

export default function BackgroundAnimation() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        // Set canvas to full screen
        const handleResize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        window.addEventListener("resize", handleResize)
        handleResize()

        // Particle settings
        const particles: Particle[] = []
        const maxParticles = 50

        // Colors for particles - using Tailwind v4 compatible colors
        const colors = ["#0ea5e9", "#6366f1", "#8b5cf6", "#ec4899"]

        // Create particles
        const createParticle = () => {
            if (particles.length >= maxParticles) return

            const size = Math.random() * 2 + 0.5
            const x = Math.random() * canvas.width
            const y = Math.random() * canvas.height
            const speedX = (Math.random() - 0.5) * 1.5
            const speedY = (Math.random() - 0.5) * 1.5
            const color = colors[Math.floor(Math.random() * colors.length)]
            const alpha = Math.random() * 0.5 + 0.2
            const decay = Math.random() * 0.01 + 0.001

            particles.push({ x, y, size, speedX, speedY, color, alpha, decay })
        }

        // Initialize particles
        for (let i = 0; i < maxParticles / 2; i++) {
            createParticle()
        }

        // Add particles occasionally
        const particleInterval = setInterval(() => {
            if (particles.length < maxParticles) {
                createParticle()
            }
        }, 200)

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Update and draw particles
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i]

                // Update position
                p.x += p.speedX
                p.y += p.speedY

                // Slowly fade out
                p.alpha -= p.decay

                // Remove if completely faded or out of bounds
                if (p.alpha <= 0 || p.x < -50 || p.x > canvas.width + 50 || p.y < -50 || p.y > canvas.height + 50) {
                    particles.splice(i, 1)
                    i--
                    continue
                }

                // Draw particle
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
                ctx.fillStyle = p.color
                ctx.globalAlpha = p.alpha
                ctx.fill()

                // Draw trail (comet effect)
                const trailLength = 10
                ctx.beginPath()
                ctx.moveTo(p.x, p.y)
                ctx.lineTo(p.x - p.speedX * trailLength, p.y - p.speedY * trailLength)
                ctx.strokeStyle = p.color
                ctx.globalAlpha = p.alpha * 0.3
                ctx.lineWidth = p.size / 2
                ctx.stroke()

                // Reset alpha for next particle
                ctx.globalAlpha = 1
            }

            requestAnimationFrame(animate)
        }

        animate()

        // Cleanup
        return () => {
            window.removeEventListener("resize", handleResize)
            clearInterval(particleInterval)
        }
    }, [])

    return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none" />
}

