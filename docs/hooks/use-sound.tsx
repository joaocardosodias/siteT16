"use client"

import { useContext } from "react"
import { SoundContext } from "@/components/sound-provider"

export function useSound() {
  return useContext(SoundContext)
}
