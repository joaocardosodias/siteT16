"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, DollarSign, Gamepad2 } from "lucide-react"
import { useSound } from "@/hooks/use-sound"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { playSound } = useSound()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleExploreClick = () => {
    playSound("click")
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-blue-950 bg-opacity-80">
      <div className="z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-pixel text-3xl md:text-5xl mb-6 tracking-tight text-white">
            <span className="block">Portfólio Turma T16 </span>
            <span className="block text-green-300">Onboarding de Fundos de investimentos</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Explore cinco jogos incríveis sobre o mundo dos investimentos, combinando diversão e aprendizado em uma
            experiência gamificada com estética pixel art.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-8 flex justify-center"
        >
          <button
            onClick={handleExploreClick}
            className="pixel-button bg-green-600 hover:bg-green-500 text-white font-pixel py-3 px-8 rounded-sm transition-all flex items-center"
          >
            <Gamepad2 className="mr-2 h-5 w-5" /> JOGAR
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="mt-4"
        >
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center text-green-400">
              <DollarSign className="h-4 w-4 mr-1" />
              <span className="text-sm font-pixel">+500 XP</span>
            </div>
            <div className="h-4 w-px bg-blue-400"></div>
            <div className="text-sm font-pixel text-blue-300">Aprenda Investindo</div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.5,
          delay: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          repeatDelay: 0.5,
        }}
      >
        <ChevronDown className="w-8 h-8 text-green-300" />
      </motion.div>
    </section>
  )
}
