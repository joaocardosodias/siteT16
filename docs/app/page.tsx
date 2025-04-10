"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Hero from "@/components/hero"
import ProjectCard from "@/components/project-card"
import TeamSection from "@/components/team-section"
import InteractiveBackground from "@/components/interactive-background"
import { projects } from "@/lib/projects"
import { useAchievements } from "@/hooks/use-achievements"
import { useSound } from "@/hooks/use-sound"

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero")
  const [viewedProjects, setViewedProjects] = useState<string[]>([])
  const { achievements, unlockAchievement } = useAchievements()
  const { playSound } = useSound()

  // Track scroll position to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight

      if (scrollPosition < windowHeight * 0.5) {
        setActiveSection("hero")
      } else {
        const projectIndex = Math.floor((scrollPosition - windowHeight * 0.5) / (windowHeight * 0.8))
        if (projectIndex >= 0 && projectIndex < projects.length) {
          setActiveSection(`project-${projectIndex}`)

          // Mark project as viewed if not already
          if (!viewedProjects.includes(projects[projectIndex].id)) {
            const newViewedProjects = [...viewedProjects, projects[projectIndex].id]
            setViewedProjects(newViewedProjects)

            // Check if all projects have been viewed
            if (newViewedProjects.length === projects.length && !achievements.includes("all_projects_viewed")) {
              unlockAchievement("all_projects_viewed")
              // Apenas tocar o som, sem mostrar o popup
              playSound("achievement")
            }
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [viewedProjects, achievements, unlockAchievement, playSound])

  return (
    <main className="relative min-h-screen bg-blue-950 text-white overflow-hidden">
      {/* Interactive background */}
      <InteractiveBackground />

      {/* Hero section */}
      <Hero />

      {/* Projects section */}
      <section className="relative">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            id={`project-${index}`}
            className="min-h-screen py-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-20%" }}
          >
            <ProjectCard
              project={project}
              index={index}
              onView={() => {
                if (!viewedProjects.includes(project.id)) {
                  setViewedProjects([...viewedProjects, project.id])
                  playSound("click")
                }
              }}
            />
          </motion.div>
        ))}
      </section>

      {/* Team section */}
      <TeamSection />
    </main>
  )
}
