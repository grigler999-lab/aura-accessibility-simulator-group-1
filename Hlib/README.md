# Hlib Version - AURA Accessibility Simulator

This folder contains Hlib's version of the AURA Accessibility Simulator for the Group 1 assignment.

The goal of this project was to recreate a working frontend copy inspired by the provided AURA accessibility demo. The application simulates an AI accessibility assistant that can adjust the interface depending on different accessibility needs.

## Project Overview

The project is built with:

* Next.js
* React
* TypeScript
* Tailwind CSS
* v0 for the initial UI generation and later refinements

This is a frontend-only simulation. There is no backend, no database, no authentication, and no real operating system scanning.

## Repository Structure

The group repository contains separate folders for each student:

```text
aura-accessibility-simulator-group-1/
├── Hlib/
├── Elias/
└── README.md
```

My implementation is placed inside the `Hlib/` folder.

Main folders and files in my version:

```text
Hlib/
├── app/
├── components/
├── hooks/
├── lib/
├── styles/
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
└── README.md
```

## Work Process

First, I analyzed the provided AURA demo video and screenshots. The reference showed a dark futuristic accessibility assistant interface with:

* AURA logo
* accessibility profile selector
* Enforce / Stop Enforcement button
* Clarify Content toggle
* system status panel
* scanner-style labels
* profile-based visual changes

After that, I created the first working version using v0. The generated project was downloaded, copied into the shared GitHub repository inside the `Hlib/` folder, tested locally, and then improved further.

The application was tested locally with:

```bash
npx pnpm@latest dev
```

The local version runs at:

```text
http://localhost:3000
```

## Implemented Features

### Accessibility Profiles

The simulator includes several accessibility profiles:

* The Voyager / Color Blind
* The Beacon / Low Vision
* The Reader / Dyslexia
* The Shield / Light Sensitivity
* The Navigator / Motor Difficulty

Each profile changes the interface style and simulates a different accessibility need.

### Enforce Mode

The Enforce button activates the simulated accessibility improvement mode.

When enforcement is active, the interface updates with:

* scanner-style labels
* stronger visual highlighting
* updated system status
* applied fixes count
* profile-specific feedback
* accessibility report results

### Clarify Content

The Clarify toggle simplifies the main explanatory text on the page.

This demonstrates how an accessibility assistant could make content easier to understand for users.

### Accessibility Report

An Accessibility Report was added to the System Status panel.

It shows:

* Detected Issues
* Resolved Fixes
* Accessibility Score
* Detected Barriers
* Applied Fixes

The accessibility score changes depending on the current state:

```text
Enforcement OFF: 64%
Enforcement ON: 94%
```

### Before / After Accessibility Scan

A Before / After scan section was added to show a simple comparison.

When enforcement is OFF:

```text
Before AURA: Barriers detected
After AURA: Not applied yet
```

When enforcement is ON:

```text
Before AURA: Barriers detected
After AURA: Interface optimized
```

### Profile Explanation Panel

A profile explanation panel was added below the main controls.

It shows:

* Current Profile
* Purpose
* Main Changes

This makes it easier to understand what each accessibility profile is supposed to improve.

### Keyboard Support Hint

A keyboard support hint was added to show basic keyboard accessibility:

```text
Keyboard support: Use Tab to move between controls and Enter or Space to activate actions.
```

### Simulation-Only Note

A note was added at the bottom of the page:

```text
This is a frontend simulation. No real operating system scanning is performed.
```

This makes it clear that the project is a visual frontend demo, not a real system scanner.

### Reset Simulation

A Reset button was added to return the simulator to its default state.

The reset function restores:

* Voyager / Color Blind profile
* enforcement OFF
* clarify mode OFF
* system status back to IDLE
* fixes count back to 0
* accessibility score back to 64%

## Improvements After the First Prototype

After the first generated version, I improved the simulator with more accessibility-related logic and clearer UI behavior.

Main improvements:

* improved Reader / Dyslexia mode
* improved Beacon / Low Vision mode
* added Accessibility Report
* added Accessibility Score
* added Reset Simulation button
* added Profile Explanation panel
* added Before / After scan
* added Keyboard Support hint
* added Simulation-only note
* improved Clarify Content behavior
* adjusted the profile dropdown layout
* refined profile-based visual styling

## Final Result

The final version is a working AURA-inspired accessibility simulator.

It does not perform real accessibility scanning, but it demonstrates how an accessibility assistant could visually adapt an interface based on different user needs.

The project demonstrates:

* reverse engineering from a visual reference
* component-based frontend development
* conditional rendering
* profile-based UI state
* accessibility-focused design ideas
* local testing and GitHub workflow
