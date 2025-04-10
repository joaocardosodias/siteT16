"use client"

import { useContext } from "react"
import { AudioContext } from "@/components/audio-controller"

export function useAudio() {
  return useContext(AudioContext)
}
