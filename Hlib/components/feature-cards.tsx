"use client"

import { AccessibilityProfile } from "@/app/page"
import { Eye, MessageSquare, Brain, Target } from "lucide-react"

interface FeatureCardsProps {
  isEnforcing: boolean
  glowClass: string
  selectedProfile: AccessibilityProfile
}

const features = [
  {
    icon: Eye,
    title: "Visual Enforcement",
    description: "Automatically adjusts contrast, sizing, and color schemes to meet WCAG guidelines in real-time.",
    label: "CONTENT BOX",
  },
  {
    icon: MessageSquare,
    title: "Aura Narrative",
    description: "AI-powered screen reader integration that provides context-aware descriptions and navigation cues.",
    label: "STRUCTURE",
  },
  {
    icon: Brain,
    title: "Vision Core",
    description: "Deep learning engine that understands UI semantics and predicts accessibility barriers before they occur.",
    label: "SEMANTIC",
  },
]

export function FeatureCards({ isEnforcing, glowClass, selectedProfile }: FeatureCardsProps) {
  const getBorderColor = () => {
    if (!isEnforcing) return "border-border/30"
    switch (selectedProfile) {
      case "colorblind":
        return "border-cyan-500/50"
      case "lowvision":
        return "border-yellow-500/60"
      case "lightsensitivity":
        return "border-gray-500/30"
      case "dyslexia":
        return "border-blue-500/40"
      case "motordifficulty":
        return "border-green-500/50"
      default:
        return "border-blue-500/40"
    }
  }

  const getAccentColor = () => {
    switch (selectedProfile) {
      case "colorblind":
        return "text-cyan-400"
      case "lowvision":
        return "text-yellow-400"
      case "lightsensitivity":
        return "text-gray-400"
      case "dyslexia":
        return "text-blue-400"
      case "motordifficulty":
        return "text-green-400"
      default:
        return "text-blue-400"
    }
  }

  const getIconBgColor = () => {
    if (!isEnforcing) return "bg-muted"
    switch (selectedProfile) {
      case "colorblind":
        return "bg-cyan-500/15"
      case "lowvision":
        return "bg-yellow-500/20"
      case "lightsensitivity":
        return "bg-gray-500/10"
      case "dyslexia":
        return "bg-blue-500/15"
      case "motordifficulty":
        return "bg-green-500/15"
      default:
        return "bg-blue-500/15"
    }
  }

  const getLabelColor = () => {
    switch (selectedProfile) {
      case "colorblind":
        return "text-cyan-400 bg-cyan-500/10 border-cyan-500/30"
      case "lowvision":
        return "text-yellow-400 bg-yellow-500/10 border-yellow-500/30"
      case "lightsensitivity":
        return "text-gray-400 bg-gray-500/10 border-gray-500/30"
      case "dyslexia":
        return "text-blue-400 bg-blue-500/10 border-blue-500/30"
      case "motordifficulty":
        return "text-green-400 bg-green-500/10 border-green-500/30"
      default:
        return "text-blue-400 bg-blue-500/10 border-blue-500/30"
    }
  }

  const getHeadingGradient = () => {
    switch (selectedProfile) {
      case "colorblind":
        return "from-cyan-400 to-blue-400"
      case "lowvision":
        return "from-yellow-400 to-orange-400"
      case "lightsensitivity":
        return "from-gray-400 to-gray-500"
      case "dyslexia":
        return "from-blue-400 to-purple-400"
      case "motordifficulty":
        return "from-green-400 to-cyan-400"
      default:
        return "from-blue-400 to-purple-400"
    }
  }

  return (
    <section className="mt-24 lg:mt-32">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className={`text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r ${getHeadingGradient()} bg-clip-text text-transparent transition-all duration-500`}>
          Universal Empowerment
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Across the web, legacy apps, and everything in between.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`relative rounded-2xl glass border-2 ${getBorderColor()} p-6 transition-all duration-500 hover:border-border/50 ${isEnforcing ? glowClass : ""}`}
          >
            {/* Icon */}
            <div className={`inline-flex p-3 rounded-xl ${getIconBgColor()} mb-4 transition-all duration-500`}>
              <feature.icon className={`w-6 h-6 ${isEnforcing ? getAccentColor() : "text-muted-foreground"} transition-colors duration-500`} />
            </div>

            {/* Content */}
            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-500 ${isEnforcing && selectedProfile === "lowvision" ? "text-yellow-100" : "text-foreground"}`}>
              {feature.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {feature.description}
            </p>

            {/* Motor Difficulty Target Indicator */}
            {selectedProfile === "motordifficulty" && isEnforcing && (
              <div className="absolute top-4 right-4 flex items-center gap-1.5">
                <Target className="w-4 h-4 text-green-400" />
              </div>
            )}

            {/* Floating Label */}
            {isEnforcing && (
              <span className={`absolute -top-3 right-4 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border whitespace-nowrap ${getLabelColor()}`}>
                {selectedProfile === "motordifficulty" ? "Target Boosted" : feature.label}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
