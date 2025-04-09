"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Trophy } from "lucide-react"
import { achievements } from "@/lib/achievements"

interface AchievementPopupProps {
  achievement: string
  onClose: () => void
}

export default function AchievementPopup({ achievement, onClose }: AchievementPopupProps) {
  const achievementData = achievements.find((a) => a.id === achievement)

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 5000)

    return () => clearTimeout(timer)
  }, [onClose])

  if (!achievementData) return null

  return (
    <motion.div
      className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
    >
      <div className="bg-blue-800 rounded-lg p-4 shadow-lg flex items-center space-x-4 min-w-[300px] pixel-borders">
        <div className="bg-yellow-500 p-2 rounded-full">
          <Trophy className="w-6 h-6 text-blue-900" />
        </div>
        <div>
          <h3 className="font-pixel text-sm text-yellow-300">CONQUISTA DESBLOQUEADA!</h3>
          <p className="text-white font-medium">{achievementData.title}</p>
        </div>
      </div>
    </motion.div>
  )
}
