"use client"

import { AccessibilityProfile } from "@/app/page"
import { Download, Play, Target, Eye, Type } from "lucide-react"

interface HeroSectionProps {
  isEnforcing: boolean
  glowClass: string
  selectedProfile: AccessibilityProfile
}

export function HeroSection({ isEnforcing, glowClass, selectedProfile }: HeroSectionProps) {
  const getGradientClass = () => {
    switch (selectedProfile) {
      case "colorblind":
        return "text-gradient-blue"
      case "lowvision":
        return "text-gradient-yellow"
      case "lightsensitivity":
        return "text-gradient-blue"
      case "dyslexia":
        return "text-gradient-blue"
      case "motordifficulty":
        return "text-gradient-blue"
      default:
        return "text-gradient-blue"
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

  const getAccentColor = () => {
    switch (selectedProfile) {
      case "colorblind":
        return "text-cyan-400 border-cyan-500/50 bg-cyan-500/20 hover:bg-cyan-500/30"
      case "lowvision":
        return "text-yellow-400 border-yellow-500/50 bg-yellow-500/20 hover:bg-yellow-500/30"
      case "lightsensitivity":
        return "text-gray-300 border-gray-500/40 bg-gray-500/15 hover:bg-gray-500/25"
      case "dyslexia":
        return "text-blue-400 border-blue-500/50 bg-blue-500/20 hover:bg-blue-500/30"
      case "motordifficulty":
        return "text-green-400 border-green-500/50 bg-green-500/20 hover:bg-green-500/30"
      default:
        return "text-blue-400 border-blue-500/50 bg-blue-500/20 hover:bg-blue-500/30"
    }
  }

  const getProfileIcon = () => {
    switch (selectedProfile) {
      case "colorblind":
        return <Eye className="w-4 h-4" />
      case "lowvision":
        return <Eye className="w-4 h-4" />
      case "dyslexia":
        return <Type className="w-4 h-4" />
      case "motordifficulty":
        return <Target className="w-4 h-4" />
      default:
        return null
    }
  }

  const getProfileBadgeText = () => {
    switch (selectedProfile) {
      case "colorblind":
        return "Color-Safe Mode"
      case "lowvision":
        return "High Contrast Mode"
      case "dyslexia":
        return "Readable Mode"
      case "lightsensitivity":
        return "Low Brightness Mode"
      case "motordifficulty":
        return "Enhanced Targets"
      default:
        return "Aura Enforcer"
    }
  }

  return (
    <div className="flex-1 pt-8 lg:pt-16">
      {/* Alpha Badge */}
      <div className="mb-6 flex flex-wrap gap-3">
        <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest transition-all duration-500 accent-bg border ${isEnforcing ? "border-current" : "border-border/40"}`}>
          <span className="accent-text">Aura Enforcer | Alpha 0.1</span>
        </span>
        
        {/* Profile Badge - always visible */}
        <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-500 ${getLabelColor()} border`}>
          {getProfileIcon()}
          {getProfileBadgeText()}
        </span>
      </div>

      {/* Main Headline */}
      <div className="relative mb-8">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight transition-all duration-500">
          <span className="text-foreground">The Guardian of</span>
          <br />
          <span className={getGradientClass()}>Accessibility.</span>
        </h1>
        {isEnforcing && (
          <span className={`absolute -right-4 top-0 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border whitespace-nowrap ${getLabelColor()}`}>
            Content Box
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed mb-10 transition-all duration-500">
        AURA is your AI-powered accessibility assistant that enforces visual clarity, 
        semantic structure, and inclusive design across any application in real-time.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4">
        <div className="relative">
          <button
            className={`inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-500 border ${getAccentColor()} ${isEnforcing ? glowClass : ""}`}
          >
            <Download className="w-5 h-5" />
            Download for Windows
          </button>
          {isEnforcing && (
            <span className={`absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border whitespace-nowrap ${getLabelColor()}`}>
              {selectedProfile === "motordifficulty" ? "Target Boosted" : "Primary Action"}
            </span>
          )}
        </div>

        <div className="relative">
          <button
            className={`inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-500 glass text-foreground hover:bg-secondary/50 border border-border/40 ${isEnforcing ? glowClass : ""}`}
          >
            <Play className="w-5 h-5" />
            Watch the Vision
          </button>
          {isEnforcing && (
            <span className={`absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border whitespace-nowrap ${getLabelColor()}`}>
              {selectedProfile === "motordifficulty" ? "Target Boosted" : "Secondary"}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
