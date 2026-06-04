"use client"

import { AccessibilityProfile } from "@/app/page"
import { Download, Play, Target, Eye, Type, Info, Keyboard, AlertCircle } from "lucide-react"

interface HeroSectionProps {
  isEnforcing: boolean
  glowClass: string
  selectedProfile: AccessibilityProfile
  clarifyContent: boolean
}

const profileExplanations: Record<AccessibilityProfile, { name: string; purpose: string; changes: string }> = {
  colorblind: {
    name: "The Voyager (Color Blind)",
    purpose: "Helps users who cannot rely on color alone.",
    changes: "Color-safe palette, clear labels, stronger visual separation.",
  },
  lowvision: {
    name: "The Beacon (Low Vision)",
    purpose: "Helps users with reduced vision.",
    changes: "Larger text, stronger contrast, yellow focus outlines.",
  },
  dyslexia: {
    name: "The Reader (Dyslexia)",
    purpose: "Helps users read content more comfortably.",
    changes: "Better spacing, clearer typography, less dense text.",
  },
  lightsensitivity: {
    name: "The Shield (Light Sensitivity)",
    purpose: "Helps users who are sensitive to bright light.",
    changes: "Softer glow, reduced brightness, calmer dark theme.",
  },
  motordifficulty: {
    name: "The Navigator (Motor Difficulty)",
    purpose: "Helps users who need easier interaction targets.",
    changes: "Larger buttons, more spacing, easier click targets.",
  },
}

// Original advanced text
const originalHeroText = "AURA is your AI-powered accessibility assistant that enforces visual clarity, semantic structure, and inclusive design across any application in real-time."

// Simplified clarified text
const clarifiedHeroText = "Aura helps people use apps more easily. It finds parts of the screen that are hard to see, read, or click, and improves them in real time."

export function HeroSection({ isEnforcing, glowClass, selectedProfile, clarifyContent }: HeroSectionProps) {
  const currentExplanation = profileExplanations[selectedProfile]

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

  const getIconBgColor = () => {
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

  const getTextAccentColor = () => {
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

  const getBorderAccent = () => {
    switch (selectedProfile) {
      case "colorblind":
        return "border-cyan-500/30"
      case "lowvision":
        return "border-yellow-500/40"
      case "lightsensitivity":
        return "border-gray-500/20"
      case "dyslexia":
        return "border-blue-500/30"
      case "motordifficulty":
        return "border-green-500/30"
      default:
        return "border-blue-500/30"
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

      {/* Description with Clarify indicator */}
      <div className="relative mb-10">
        <p className="text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed transition-all duration-500">
          {clarifyContent ? clarifiedHeroText : originalHeroText}
        </p>
        {clarifyContent && (
          <span className={`absolute -top-2 -right-2 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border whitespace-nowrap ${getLabelColor()}`}>
            Clarified
          </span>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 mb-10">
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

      {/* Keyboard Accessibility Hint */}
      <div className={`flex items-center gap-2 text-xs text-muted-foreground mb-6 p-3 rounded-lg ${getIconBgColor()} border ${getBorderAccent()} max-w-xl`}>
        <Keyboard className={`w-4 h-4 ${getTextAccentColor()}`} />
        <span>Keyboard support: Use <kbd className="px-1.5 py-0.5 rounded bg-background/50 font-mono text-[10px]">Tab</kbd> to move between controls and <kbd className="px-1.5 py-0.5 rounded bg-background/50 font-mono text-[10px]">Enter</kbd> or <kbd className="px-1.5 py-0.5 rounded bg-background/50 font-mono text-[10px]">Space</kbd> to activate actions.</span>
      </div>

      {/* Profile Explanation Panel */}
      <div className={`p-4 rounded-xl ${getIconBgColor()} border ${getBorderAccent()} max-w-xl mb-6 transition-all duration-500`}>
        <div className="flex items-center gap-2 mb-3">
          <Info className={`w-4 h-4 ${getTextAccentColor()}`} />
          <span className={`text-sm font-semibold ${getTextAccentColor()}`}>Current Profile</span>
        </div>
        <div className="space-y-2">
          <div className="text-foreground font-medium">{currentExplanation.name}</div>
          <div className="text-sm text-muted-foreground">
            <span className={`font-medium ${getTextAccentColor()}`}>Purpose:</span> {currentExplanation.purpose}
          </div>
          <div className="text-sm text-muted-foreground">
            <span className={`font-medium ${getTextAccentColor()}`}>Main Changes:</span> {currentExplanation.changes}
          </div>
        </div>
      </div>

      {/* Before/After Indicator */}
      <div className={`p-4 rounded-xl glass border ${isEnforcing ? getBorderAccent() : "border-border/30"} max-w-xl mb-6 transition-all duration-500`}>
        <div className="flex items-center gap-2 mb-3">
          <Eye className={`w-4 h-4 ${isEnforcing ? getTextAccentColor() : "text-muted-foreground"}`} />
          <span className={`text-sm font-semibold ${isEnforcing ? getTextAccentColor() : "text-muted-foreground"}`}>Accessibility Scan</span>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="text-muted-foreground mb-1">Before AURA</div>
            <div className="text-orange-400 font-medium">Barriers detected</div>
          </div>
          <div>
            <div className="text-muted-foreground mb-1">After AURA</div>
            <div className={`font-medium ${isEnforcing ? "text-green-400" : "text-muted-foreground"}`}>
              {isEnforcing ? "Interface optimized" : "Not applied yet"}
            </div>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-border/30 flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Accessibility Score</span>
          <span className={`text-lg font-mono font-bold ${isEnforcing ? "text-green-400" : "text-orange-400"}`}>
            {isEnforcing ? "94%" : "64%"}
          </span>
        </div>
      </div>

      {/* Simulation Note */}
      <div className="flex items-start gap-2 text-xs text-muted-foreground/70 max-w-xl">
        <AlertCircle className="w-3.5 h-3.5 mt-0.5 shrink-0" />
        <span>This is a frontend simulation. No real operating system scanning is performed.</span>
      </div>
    </div>
  )
}
