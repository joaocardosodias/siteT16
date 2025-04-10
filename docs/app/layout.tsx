import type React from "react"
import type { Metadata } from "next"
import { Inter, Press_Start_2P } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SoundProvider } from "@/components/sound-provider"
import { AchievementsProvider } from "@/components/achievements-provider"
import { AudioProvider } from "@/components/audio-controller"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
})

export const metadata: Metadata = {
  title: "Portfólio Interativo – Jogos de Investimento",
  description: "Um portfólio interativo gamificado com jogos sobre investimentos em estética pixel art",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} ${pixelFont.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <SoundProvider>
            <AudioProvider>
              <AchievementsProvider>{children}</AchievementsProvider>
            </AudioProvider>
          </SoundProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'