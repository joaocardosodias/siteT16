"use client"

import { useContext } from "react"
import { AchievementsContext } from "@/components/achievements-provider"

export function useAchievements() {
  return useContext(AchievementsContext)
}
