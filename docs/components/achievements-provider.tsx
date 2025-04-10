"use client"

import type React from "react"
import { createContext, useState, useContext, useEffect } from "react"

interface AchievementsContextType {
  achievements: string[]
  unlockAchievement: (id: string) => void
}

export const AchievementsContext = createContext<AchievementsContextType>({
  achievements: [],
  unlockAchievement: () => {},
})

export function AchievementsProvider({ children }: { children: React.ReactNode }) {
  const [achievements, setAchievements] = useState<string[]>([])

  // Load achievements from localStorage on mount
  useEffect(() => {
    const savedAchievements = localStorage.getItem("achievements")
    if (savedAchievements) {
      setAchievements(JSON.parse(savedAchievements))
    }
  }, [])

  // Save achievements to localStorage when they change
  useEffect(() => {
    if (achievements.length > 0) {
      localStorage.setItem("achievements", JSON.stringify(achievements))
    }
  }, [achievements])

  const unlockAchievement = (id: string) => {
    if (!achievements.includes(id)) {
      setAchievements((prev) => [...prev, id])
    }
  }

  return (
    <AchievementsContext.Provider value={{ achievements, unlockAchievement }}>{children}</AchievementsContext.Provider>
  )
}

export function useAchievements() {
  return useContext(AchievementsContext)
}
