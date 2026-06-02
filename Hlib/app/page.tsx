"use client"

import { useState } from "react"
import { TopBar } from "@/components/top-bar"
import { HeroSection } from "@/components/hero-section"
import { StatusCard } from "@/components/status-card"
import { FeatureCards } from "@/components/feature-cards"

export type AccessibilityProfile =
  | "colorblind"
  | "lowvision"
  | "dyslexia"
  | "lightsensitivity"
  | "motordifficulty"

export default function Home() {
  const [selectedProfile, setSelectedProfile] = useState<AccessibilityProfile>("colorblind")
  const [isEnforcing, setIsEnforcing] = useState(false)
  const [clarifyContent, setClarifyContent] = useState(false)

  const getProfileClass = () => {
    return `profile-${selectedProfile}`
  }

  const getGlowClass = () => {
    if (!isEnforcing) return ""
    switch (selectedProfile) {
      case "colorblind":
        return "glow-cyan"
      case "lowvision":
        return "glow-yellow"
      case "lightsensitivity":
        return "glow-soft"
      case "dyslexia":
        return "glow-blue"
      case "motordifficulty":
        return "glow-blue"
      default:
        return "glow-blue"
    }
  }

  return (
    <main className={`min-h-screen bg-background overflow-x-hidden transition-all duration-500 ${getProfileClass()}`}>
      <TopBar
        selectedProfile={selectedProfile}
        onSelectProfile={setSelectedProfile}
        isEnforcing={isEnforcing}
        onToggleEnforcing={() => setIsEnforcing(!isEnforcing)}
        clarifyContent={clarifyContent}
        onToggleClarify={() => setClarifyContent(!clarifyContent)}
        glowClass={getGlowClass()}
      />

      <div className="container mx-auto px-6 pt-8 pb-16 max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12 min-h-[60vh]">
          <HeroSection
            isEnforcing={isEnforcing}
            glowClass={getGlowClass()}
            selectedProfile={selectedProfile}
          />
          <StatusCard
            isEnforcing={isEnforcing}
            glowClass={getGlowClass()}
            selectedProfile={selectedProfile}
          />
        </div>

        <FeatureCards
          isEnforcing={isEnforcing}
          glowClass={getGlowClass()}
          selectedProfile={selectedProfile}
        />
      </div>
    </main>
  )
}
