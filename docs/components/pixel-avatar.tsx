"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface PixelAvatarProps {
  activeSection: string
}

export default function PixelAvatar({ activeSection }: PixelAvatarProps) {
  const [message, setMessage] = useState("")

  useEffect(() => {
    if (activeSection === "hero") {
      setMessage("Olá! Explore nossos jogos de investimento!")
    } else if (activeSection.startsWith("project-")) {
      const projectIndex = Number.parseInt(activeSection.split("-")[1])
      setMessage(`Este é o jogo ${projectIndex + 1}. Aprenda sobre investimentos enquanto se diverte!`)
    }
  }, [activeSection])

  return (
    <motion.div
      className="bg-blue-900/70 rounded-lg p-3 backdrop-blur-sm flex items-end space-x-3 max-w-xs"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative w-16 h-16 pixel-float">
        <Image
          src="/placeholder.svg?height=64&width=64"
          alt="Pixel Avatar"
          width={64}
          height={64}
          className="object-contain"
          style={{ imageRendering: "pixelated" }}
        />
      </div>

      <div className="bg-white text-blue-950 p-2 rounded-lg relative max-w-[200px]">
        <div className="absolute left-0 top-1/2 transform -translate-x-2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-white border-b-8 border-b-transparent" />
        <p className="text-sm font-pixel">{message}</p>
      </div>
    </motion.div>
  )
}
