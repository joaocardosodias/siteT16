"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { DollarSign, TrendingUp, Percent, BarChart2 } from "lucide-react"

interface FinanceParticle {
  id: number
  x: number
  y: number
  type: "symbol" | "icon" | "coin"
  symbol?: string
  iconType?: "dollar" | "chart" | "percent" | "bar"
  size: number
  color: string
  duration: number
  delay: number
}

export default function InteractiveBackground() {
  const [particles, setParticles] = useState<FinanceParticle[]>([])
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Generate finance-themed particles
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })

      // Create finance-themed particles
      const particlesArray: FinanceParticle[] = []

      // Currency symbols
      const symbols = ["$", "€", "£", "¥", "%"]
      const iconTypes = ["dollar", "chart", "percent", "bar"] as const

      // Finance-themed colors
      const colors = [
        "#10B981", // Green (profit)
        "#3B82F6", // Blue (trust)
        "#F59E0B", // Gold (wealth)
        "#6366F1", // Indigo (stability)
        "#047857", // Dark green (growth)
      ]

      // Add currency symbols
      for (let i = 0; i < 15; i++) {
        particlesArray.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          type: "symbol",
          symbol: symbols[Math.floor(Math.random() * symbols.length)],
          size: Math.floor(Math.random() * 10) + 14,
          color: colors[Math.floor(Math.random() * colors.length)],
          duration: Math.random() * 3 + 2,
          delay: Math.random() * 2,
        })
      }

      // Add finance icons
      for (let i = 15; i < 25; i++) {
        particlesArray.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          type: "icon",
          iconType: iconTypes[Math.floor(Math.random() * iconTypes.length)],
          size: Math.floor(Math.random() * 8) + 16,
          color: colors[Math.floor(Math.random() * colors.length)],
          duration: Math.random() * 3 + 2,
          delay: Math.random() * 2,
        })
      }

      // Add pixel coins
      for (let i = 25; i < 35; i++) {
        particlesArray.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          type: "coin",
          size: Math.floor(Math.random() * 6) + 8,
          color: "#F59E0B", // Gold color for coins
          duration: Math.random() * 3 + 2,
          delay: Math.random() * 2,
        })
      }

      setParticles(particlesArray)
    }

    // Handle resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Track mouse movement with throttling for better performance
  useEffect(() => {
    let lastUpdateTime = 0
    const throttleInterval = 50 // ms

    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now()
      if (currentTime - lastUpdateTime > throttleInterval) {
        setMousePosition({ x: e.clientX, y: e.clientY })
        lastUpdateTime = currentTime
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Render the appropriate particle based on type
  const renderParticle = (particle: FinanceParticle) => {
    if (particle.type === "symbol") {
      return (
        <motion.div
          key={particle.id}
          className="absolute font-bold"
          style={{
            fontSize: particle.size,
            color: particle.color,
            left: particle.x,
            top: particle.y,
            opacity: 0.5,
          }}
          animate={{
            y: [particle.y, particle.y - 50, particle.y],
            x: [particle.x, particle.x + (Math.random() * 30 - 15), particle.x],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        >
          {particle.symbol}
        </motion.div>
      )
    } else if (particle.type === "icon") {
      return (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            color: particle.color,
            left: particle.x,
            top: particle.y,
            opacity: 0.5,
          }}
          animate={{
            y: [particle.y, particle.y - 50, particle.y],
            x: [particle.x, particle.x + (Math.random() * 30 - 15), particle.x],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        >
          {particle.iconType === "dollar" && <DollarSign size={particle.size} />}
          {particle.iconType === "chart" && <TrendingUp size={particle.size} />}
          {particle.iconType === "percent" && <Percent size={particle.size} />}
          {particle.iconType === "bar" && <BarChart2 size={particle.size} />}
        </motion.div>
      )
    } else if (particle.type === "coin") {
      return (
        <motion.div
          key={particle.id}
          className="absolute rounded-full pixel-borders"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            left: particle.x,
            top: particle.y,
            opacity: 0.6,
          }}
          animate={{
            y: [particle.y, particle.y - 50, particle.y],
            x: [particle.x, particle.x + (Math.random() * 30 - 15), particle.x],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full flex items-center justify-center text-yellow-800 font-pixel text-[8px]">$</div>
        </motion.div>
      )
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Finance-themed gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950 to-blue-900 opacity-50" />

      {/* Stock chart pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, #10B981 1px, transparent 1px), linear-gradient(to bottom, #10B981 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Simulated stock chart line */}
        <svg
          className="absolute bottom-0 left-0 w-full h-1/3 opacity-10"
          viewBox="0 0 1000 300"
          preserveAspectRatio="none"
        >
          <path
            d="M0,150 C100,100 200,200 300,150 C400,100 500,250 600,200 C700,150 800,250 900,200 L1000,250 L1000,300 L0,300 Z"
            fill="#10B981"
          />
          <path
            d="M0,150 C100,100 200,200 300,150 C400,100 500,250 600,200 C700,150 800,250 900,200 L1000,250"
            fill="none"
            stroke="#10B981"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Finance-themed particles */}
      {particles.map((particle) => renderParticle(particle))}

      {/* Mouse follower with finance theme */}
      {mousePosition.x > 0 && (
        <motion.div
          className="absolute w-32 h-32 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(16,185,129,0.1) 0%, rgba(4,120,87,0) 70%)",
            left: mousePosition.x,
            top: mousePosition.y,
            translateX: "-50%",
            translateY: "-50%",
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Pixel art decorative finance elements */}
      <div
        className="absolute top-20 left-[10%] w-8 h-8 bg-green-500 opacity-20 pixel-float"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute top-[30%] right-[15%] w-10 h-10 bg-yellow-500 opacity-20 pixel-float"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute bottom-[25%] left-[20%] w-12 h-6 bg-green-600 opacity-20 pixel-float"
        style={{ animationDelay: "0.8s" }}
      />
      <div
        className="absolute bottom-[10%] right-[25%] w-6 h-6 bg-blue-400 opacity-20 pixel-float"
        style={{ animationDelay: "2.2s" }}
      />
    </div>
  )
}
