"use client"

import { AccessibilityProfile } from "@/app/page"
import { Activity, CheckCircle, Zap, Eye, AlertCircle } from "lucide-react"

interface StatusCardProps {
  isEnforcing: boolean
  glowClass: string
  selectedProfile: AccessibilityProfile
}

export function StatusCard({ isEnforcing, glowClass, selectedProfile }: StatusCardProps) {
  const fixesApplied = isEnforcing ? 12 : 0
  const mode = isEnforcing ? "ENFORCING" : "IDLE"

  const getBorderColor = () => {
    if (!isEnforcing) return "border-border/50"
    switch (selectedProfile) {
      case "colorblind":
        return "border-cyan-500/60"
      case "lowvision":
        return "border-yellow-500/70"
      case "lightsensitivity":
        return "border-gray-500/40"
      case "dyslexia":
        return "border-blue-500/50"
      case "motordifficulty":
        return "border-green-500/50"
      default:
        return "border-blue-500/50"
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

  const getProfileDescription = () => {
    switch (selectedProfile) {
      case "colorblind":
        return "Blue/cyan color-safe palette active"
      case "lowvision":
        return "High contrast + enlarged text active"
      case "dyslexia":
        return "Enhanced spacing + readability active"
      case "lightsensitivity":
        return "Reduced brightness + soft glow active"
      case "motordifficulty":
        return "Enlarged targets + spacing active"
      default:
        return "Accessibility mode active"
    }
  }

  const getIconBgColor = () => {
    switch (selectedProfile) {
      case "colorblind":
        return "bg-cyan-500/20"
      case "lowvision":
        return "bg-yellow-500/20"
      case "lightsensitivity":
        return "bg-gray-500/15"
      case "dyslexia":
        return "bg-blue-500/20"
      case "motordifficulty":
        return "bg-green-500/20"
      default:
        return "bg-blue-500/20"
    }
  }

  return (
    <div className="lg:w-[380px] lg:mt-16">
      <div className={`relative rounded-2xl glass border-2 ${getBorderColor()} p-6 transition-all duration-500 ${isEnforcing ? glowClass : ""}`}>
        {/* Scan Animation Overlay */}
        {isEnforcing && (
          <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
            <div className={`absolute inset-x-0 h-24 bg-gradient-to-b ${selectedProfile === "lowvision" ? "from-yellow-500/15" : selectedProfile === "lightsensitivity" ? "from-gray-500/10" : "from-cyan-500/10"} to-transparent animate-pulse`} />
          </div>
        )}

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className={`p-2.5 rounded-lg ${isEnforcing ? getIconBgColor() : "bg-muted"} transition-all duration-500`}>
            <Activity className={`w-5 h-5 ${isEnforcing ? getAccentColor() : "text-muted-foreground"} transition-colors duration-500`} />
          </div>
          <h3 className="font-semibold text-foreground text-lg">System Status</h3>
          {isEnforcing && (
            <span className="ml-auto flex items-center gap-1.5">
              <span className={`w-2.5 h-2.5 rounded-full ${selectedProfile === "lowvision" ? "bg-yellow-400" : "bg-green-400"} animate-pulse`} />
              <span className={`text-xs font-mono ${selectedProfile === "lowvision" ? "text-yellow-400" : "text-green-400"}`}>LIVE</span>
            </span>
          )}
        </div>

        {/* Profile Indicator */}
        <div className={`mb-6 p-3 rounded-xl transition-all duration-500 ${isEnforcing ? getIconBgColor() : "bg-muted/50"} border ${getBorderColor()}`}>
          <div className="flex items-center gap-3">
            <Eye className={`w-5 h-5 ${getAccentColor()} transition-colors duration-500`} />
            <div>
              <div className={`text-sm font-semibold ${getAccentColor()}`}>
                {selectedProfile === "colorblind" && "Voyager Mode"}
                {selectedProfile === "lowvision" && "Beacon Mode"}
                {selectedProfile === "dyslexia" && "Reader Mode"}
                {selectedProfile === "lightsensitivity" && "Shield Mode"}
                {selectedProfile === "motordifficulty" && "Navigator Mode"}
              </div>
              <div className="text-xs text-muted-foreground">{getProfileDescription()}</div>
            </div>
          </div>
        </div>

        {/* Status Items */}
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-border/30">
            <span className="text-sm text-muted-foreground">Scanning</span>
            <span className={`text-sm font-mono ${isEnforcing ? getAccentColor() : "text-muted-foreground"} transition-colors duration-500`}>
              {isEnforcing ? "Notepad.exe" : "—"}
            </span>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-border/30">
            <span className="text-sm text-muted-foreground">Fixes Applied</span>
            <span className={`text-lg font-mono font-bold ${isEnforcing ? (selectedProfile === "lowvision" ? "text-yellow-400" : "text-green-400") : "text-muted-foreground"} transition-colors duration-500`}>
              {fixesApplied}
            </span>
          </div>

          <div className="flex items-center justify-between py-3">
            <span className="text-sm text-muted-foreground">Mode</span>
            <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-semibold transition-all duration-500 ${
              isEnforcing 
                ? `${getIconBgColor()} ${getAccentColor()} border ${getBorderColor()}` 
                : "bg-muted text-muted-foreground"
            }`}>
              {isEnforcing && <Zap className="w-3 h-3" />}
              {mode}
            </span>
          </div>
        </div>

        {/* Enforcement Active Indicator */}
        {isEnforcing && (
          <div className="mt-6 pt-4 border-t border-border/30">
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className={`w-4 h-4 ${selectedProfile === "lowvision" ? "text-yellow-400" : "text-green-400"}`} />
              <span className={selectedProfile === "lowvision" ? "text-yellow-400" : "text-green-400"}>
                All accessibility checks passed
              </span>
            </div>
          </div>
        )}

        {/* Idle State Hint */}
        {!isEnforcing && (
          <div className="mt-6 pt-4 border-t border-border/30">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <AlertCircle className="w-4 h-4" />
              <span>Click &quot;Enforce&quot; to activate</span>
            </div>
          </div>
        )}

        {/* Floating Label */}
        {isEnforcing && (
          <span className={`absolute -top-3 right-4 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border whitespace-nowrap ${getLabelColor()}`}>
            Status Panel
          </span>
        )}
      </div>
    </div>
  )
}
