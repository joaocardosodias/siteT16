"use client"

import type React from "react"

import { createContext, useRef, useContext } from "react"

type SoundType = "click" | "achievement" | "hover"

interface SoundContextType {
  playSound: (type: SoundType) => void
}

export const SoundContext = createContext<SoundContextType>({
  playSound: () => {},
})

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const clickSoundRef = useRef<HTMLAudioElement | null>(null)
  const achievementSoundRef = useRef<HTMLAudioElement | null>(null)
  const hoverSoundRef = useRef<HTMLAudioElement | null>(null)

  // Initialize audio elements on client side
  if (typeof window !== "undefined" && !clickSoundRef.current) {
    clickSoundRef.current = new Audio("/sounds/click.mp3")
    achievementSoundRef.current = new Audio("/sounds/achievement.mp3")
    hoverSoundRef.current = new Audio("/sounds/hover.mp3")
  }

  const playSound = (type: SoundType) => {
    let sound: HTMLAudioElement | null = null

    switch (type) {
      case "click":
        sound = clickSoundRef.current
        break
      case "achievement":
        sound = achievementSoundRef.current
        break
      case "hover":
        sound = hoverSoundRef.current
        break
    }

    if (sound) {
      sound.currentTime = 0
      sound.play().catch((err) => console.error("Error playing sound:", err))
    }
  }

  return <SoundContext.Provider value={{ playSound }}>{children}</SoundContext.Provider>
}

export function useSound() {
  return useContext(SoundContext)
}
