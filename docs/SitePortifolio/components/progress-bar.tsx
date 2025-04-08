"use client"

import { motion } from "framer-motion"

interface ProgressBarProps {
  percentage: number
}

export default function ProgressBar({ percentage }: ProgressBarProps) {
  return (
    <div className="bg-blue-900/50 p-3 rounded-lg backdrop-blur-sm z-40">
      <div className="flex items-center mb-2">
        <div className="w-3 h-3 bg-blue-400 mr-2 pixel-borders" />
        <span className="font-pixel text-xs text-blue-200">PROGRESSO</span>
        <span className="ml-auto font-pixel text-xs text-blue-200">{Math.round(percentage)}%</span>
      </div>

      <div className="h-4 bg-blue-950 rounded-sm overflow-hidden pixel-borders">
        <motion.div
          className="h-full bg-blue-500"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  )
}
