"use client"

import type React from "react"
import { createContext, useContext, useRef, useState } from "react"

interface AudioContextType {
  playGameTheme: (gameIndex: number) => void
  stopGameTheme: () => void
  isPlaying: boolean
  currentGame: number | null
}

export const AudioContext = createContext<AudioContextType>({
  playGameTheme: () => {},
  stopGameTheme: () => {},
  isPlaying: false,
  currentGame: null,
})

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentGame, setCurrentGame] = useState<number | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const playGameTheme = (gameIndex: number) => {
    // Stop any currently playing audio
    if (audioRef.current) {
      audioRef.current.pause()
    }

    // Create new audio element
    audioRef.current = new Audio(`/sounds/game${gameIndex + 1}.mp3`)
    audioRef.current.loop = true
    audioRef.current.volume = 0.5

    // Play the audio
    audioRef.current.play().catch((err) => console.error("Error playing audio:", err))

    setIsPlaying(true)
    setCurrentGame(gameIndex)
  }

  const stopGameTheme = () => {
    if (audioRef.current) {
      audioRef.current.pause()
    }
    setIsPlaying(false)
    setCurrentGame(null)
  }

  return (
    <AudioContext.Provider value={{ playGameTheme, stopGameTheme, isPlaying, currentGame }}>
      {children}
    </AudioContext.Provider>
  )
}

export function useAudio() {
  return useContext(AudioContext)
}
