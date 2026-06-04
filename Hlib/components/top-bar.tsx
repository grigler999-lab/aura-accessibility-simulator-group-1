"use client"

import { AccessibilityProfile } from "@/app/page"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Eye, Palette, Sun, BookOpen, Shield, Hand, RotateCcw } from "lucide-react"

interface TopBarProps {
  selectedProfile: AccessibilityProfile
  onSelectProfile: (profile: AccessibilityProfile) => void
  isEnforcing: boolean
  onToggleEnforcing: () => void
  clarifyContent: boolean
  onToggleClarify: () => void
  glowClass: string
  onReset: () => void
}

const profiles: { value: AccessibilityProfile; label: string; icon: typeof Eye; description: string }[] = [
  { value: "colorblind", label: "Voyager", icon: Palette, description: "Color Blind" },
  { value: "lowvision", label: "Beacon", icon: Sun, description: "Low Vision" },
  { value: "dyslexia", label: "Reader", icon: BookOpen, description: "Dyslexia" },
  { value: "lightsensitivity", label: "Shield", icon: Shield, description: "Light Sensitivity" },
  { value: "motordifficulty", label: "Navigator", icon: Hand, description: "Motor Difficulty" },
]

export function TopBar({
  selectedProfile,
  onSelectProfile,
  isEnforcing,
  onToggleEnforcing,
  clarifyContent,
  onToggleClarify,
  glowClass,
  onReset,
}: TopBarProps) {
  const currentProfile = profiles.find(p => p.value === selectedProfile)
  const ProfileIcon = currentProfile?.icon || Eye

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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between max-w-7xl">
        {/* Logo */}
        <div className="relative">
          <div className={`flex items-center gap-3 px-4 py-2 rounded-full glass transition-all duration-500 accent-bg ${isEnforcing ? glowClass : ""}`}>
            <div className="relative">
              <Eye className={`w-7 h-7 accent-text transition-colors duration-500 ${getAccentColor()}`} />
              {isEnforcing && (
                <div className="absolute inset-0 animate-ping">
                  <Eye className={`w-7 h-7 ${getAccentColor()} opacity-40`} />
                </div>
              )}
            </div>
            <span className="text-xl font-bold tracking-wide text-foreground">
              AURA
            </span>
          </div>
          {isEnforcing && (
            <span className={`absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border whitespace-nowrap ${getLabelColor()}`}>
              UI Element
            </span>
          )}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">
          {/* Profile Dropdown */}
          <div className="relative">
            <Select value={selectedProfile} onValueChange={(v) => onSelectProfile(v as AccessibilityProfile)}>
              <SelectTrigger
                className={`w-[260px] min-h-14 rounded-full glass border-2 text-sm font-medium transition-all duration-500 accent-bg px-5 py-2 ${isEnforcing ? glowClass : ""}`}
              >
                <div className="flex items-center gap-3 w-full overflow-hidden">
                  <ProfileIcon className={`w-4 h-4 shrink-0 ${getAccentColor()}`} />
                  <div className="flex flex-col items-start justify-center leading-none overflow-hidden">
                    <span className="font-semibold text-sm leading-5 truncate">
                      The {currentProfile?.label}
                    </span>
                    <span className="text-xs text-muted-foreground leading-4 truncate">
                      {currentProfile?.description}
                    </span>
                  </div>
                </div>
              </SelectTrigger>
              <SelectContent className="glass border-border/50 min-w-[240px]">
                {profiles.map((profile) => (
                  <SelectItem key={profile.value} value={profile.value} className="cursor-pointer py-3 px-3">
                    <div className="flex items-center gap-3">
                      <profile.icon className="w-4 h-4 shrink-0" />
                      <div className="flex flex-col items-start gap-0.5">
                        <span className="font-medium leading-tight">The {profile.label}</span>
                        <span className="text-xs text-muted-foreground leading-tight">{profile.description}</span>
                      </div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {isEnforcing && (
              <span className={`absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border whitespace-nowrap ${getLabelColor()}`}>
                Profile
              </span>
            )}
          </div>

          {/* Enforcement Button */}
          <div className="relative">
            <button
              onClick={onToggleEnforcing}
              className={`px-6 h-12 rounded-full font-semibold text-sm transition-all duration-500 accent-bg ${
                isEnforcing
                  ? `${getAccentColor()} ${glowClass} border-2`
                  : "glass text-foreground hover:bg-secondary/50 border-2 border-transparent"
              }`}
            >
              {isEnforcing ? "ENFORCING" : "Enforce"}
            </button>
            {isEnforcing && (
              <span className={`absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border whitespace-nowrap ${getLabelColor()}`}>
                {selectedProfile === "motordifficulty" ? "Target Boosted" : "Active"}
              </span>
            )}
          </div>

          {/* Clarify Toggle */}
          <div className={`relative flex items-center gap-3 px-4 py-3 rounded-full glass transition-all duration-500 accent-bg ${isEnforcing ? glowClass : ""}`}>
            <span className={`text-sm font-medium transition-all duration-500 ${getAccentColor()}`}>
              Clarify
            </span>
            <Switch
              checked={clarifyContent}
              onCheckedChange={onToggleClarify}
              className="data-[state=checked]:bg-current"
            />
            {isEnforcing && (
              <span className={`absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border whitespace-nowrap ${getLabelColor()}`}>
                Readable
              </span>
            )}
          </div>

          {/* Reset Simulation Button */}
          <button
            onClick={onReset}
            className="flex items-center gap-2 px-4 h-10 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground glass border border-border/40 hover:border-border/60 transition-all duration-300"
            title="Reset Simulation"
          >
            <RotateCcw className="w-4 h-4" />
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>
      </div>
    </header>
  )
}
