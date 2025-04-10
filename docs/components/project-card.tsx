"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Gamepad2, ExternalLink } from "lucide-react"
import type { Project } from "@/lib/projects"
import { useSound } from "@/hooks/use-sound"
import { useAudio } from "@/hooks/use-audio"

interface ProjectCardProps {
  project: Project
  index: number
  onView: () => void
}

export default function ProjectCard({ project, index, onView }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const { playSound } = useSound()
  const { playGameTheme, stopGameTheme } = useAudio()
  const modalContentRef = useRef<HTMLDivElement>(null)

  const handleViewMore = (e: React.MouseEvent) => {
    e.stopPropagation()
    playSound("click")
    setShowDetails(true)
    onView()
    // Prevenir scroll da página quando o modal está aberto
    document.body.style.overflow = "hidden"

    // Play game theme
    playGameTheme(index)
  }

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation()
    playSound("click")
    setShowDetails(false)
    // Restaurar scroll da página quando o modal é fechado
    document.body.style.overflow = "auto"

    // Stop game theme
    stopGameTheme()
  }

  // Impedir que cliques no conteúdo do modal fechem o modal
  const handleModalContentClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <div className="container mx-auto px-4 h-full flex items-center">
      <motion.div
        className="w-full max-w-5xl mx-auto bg-blue-900/50 rounded-lg overflow-hidden"
        initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 relative overflow-hidden">
            <div className="aspect-video relative">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
                style={{ imageRendering: "pixelated" }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-950/30 to-transparent" />
            </div>
          </div>

          <div className="md:w-1/2 p-6 md:p-8">
            <div className="flex items-center mb-4">
              <div className="w-4 h-4 bg-green-400 mr-3 pixel-borders" />
              <h3 className="font-pixel text-xl text-green-200">Jogo {index + 1}</h3>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h2>

            <p className="text-blue-100 mb-6">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span key={tech} className="bg-blue-800 text-blue-200 px-3 py-1 text-sm rounded-sm font-pixel">
                  {tech}
                </span>
              ))}
            </div>

            <motion.button
              className="pixel-button bg-green-600 hover:bg-green-500 text-white font-pixel py-2 px-6 rounded-sm flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleViewMore}
            >
              VER DETALHES
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Project details modal */}
      {showDetails && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <div className="absolute inset-0 bg-black/80" />

          <motion.div
            ref={modalContentRef}
            className="relative bg-blue-900 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={handleModalContentClick}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6 sticky top-0 bg-blue-900 z-10 py-2">
                <h2 className="font-pixel text-2xl text-green-200">{project.title}</h2>
                <button
                  className="pixel-button bg-red-600 hover:bg-red-500 text-white font-pixel py-2 px-4 rounded-sm flex items-center justify-center text-lg"
                  onClick={handleClose}
                  aria-label="Fechar detalhes"
                >
                  X
                </button>
              </div>

              <div className="aspect-video relative mb-6 rounded-sm overflow-hidden">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>

              <div className="space-y-4 text-blue-100">
                <p>{project.fullDescription || project.description}</p>

                <div>
                  <h3 className="font-pixel text-lg text-green-300 mb-2">Tecnologias</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-blue-800 text-blue-200 px-3 py-1 text-sm rounded-sm font-pixel">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.features && (
                  <div>
                    <h3 className="font-pixel text-lg text-green-300 mb-2">Características</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Botão de jogar destacado */}
                <div className="pt-8 pb-4 flex justify-center">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pixel-button inline-flex items-center bg-green-600 hover:bg-green-500 text-white font-pixel py-3 px-8 rounded-sm text-lg shadow-lg"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 15px rgba(34, 197, 94, 0.6)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={(e) => {
                      e.stopPropagation()
                      playSound("click")
                    }}
                  >
                    JOGAR AGORA <Gamepad2 className="ml-3 w-6 h-6" />
                  </motion.a>
                </div>

                <p className="text-center text-blue-300 text-sm">
                  <ExternalLink className="inline-block w-4 h-4 mr-1" />
                  Você será redirecionado para o site do jogo
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
