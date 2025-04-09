"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Users, GraduationCap, Trophy } from "lucide-react"
import { useSound } from "@/hooks/use-sound"

export default function TeamSection() {
  const { playSound } = useSound()

  return (
    <section className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="w-full max-w-5xl mx-auto bg-blue-900/50 rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="p-8">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-yellow-400 mr-3 pixel-borders" />
              <h2 className="font-pixel text-2xl text-yellow-200">Nossa Turma</h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="lg:w-1/2">
                <div className="aspect-video relative rounded-lg overflow-hidden pixel-borders">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Foto da Turma"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 to-transparent" />
                </div>
                <p className="text-center mt-2 text-sm text-blue-300 font-pixel">Turma de Desenvolvimento 2023/2024</p>
              </div>

              <div className="lg:w-1/2 space-y-6">
                <h3 className="text-xl font-bold text-green-300 font-pixel">Desenvolvedores do Futuro</h3>
                <p className="text-blue-100">
                  Nossa turma é composta por estudantes apaixonados por tecnologia e finanças, unidos pelo objetivo de
                  criar experiências interativas que tornem o aprendizado sobre investimentos mais divertido e
                  acessível.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-950/50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Users className="w-5 h-5 text-yellow-400 mr-2" />
                      <h4 className="font-pixel text-sm text-yellow-300">Membros</h4>
                    </div>
                    <p className="text-blue-200">
                      20 alunos dedicados com habilidades diversas em programação e design.
                    </p>
                  </div>

                  <div className="bg-blue-950/50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <GraduationCap className="w-5 h-5 text-green-400 mr-2" />
                      <h4 className="font-pixel text-sm text-green-300">Formação</h4>
                    </div>
                    <p className="text-blue-200">
                      Curso técnico em desenvolvimento de sistemas com foco em aplicações web.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-950/50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Trophy className="w-5 h-5 text-blue-400 mr-2" />
                    <h4 className="font-pixel text-sm text-blue-300">Conquistas</h4>
                  </div>
                  <p className="text-blue-200">
                    Nossa turma já desenvolveu mais de 15 projetos, participou de 3 hackathons e ganhou o prêmio de
                    inovação educacional com nossos jogos sobre educação financeira.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative pixel elements */}
      <div
        className="absolute top-20 left-[5%] w-6 h-6 bg-yellow-500 opacity-20 pixel-float"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute bottom-[15%] right-[10%] w-8 h-8 bg-green-500 opacity-20 pixel-float"
        style={{ animationDelay: "1.2s" }}
      />
    </section>
  )
}
