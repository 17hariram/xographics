"use client"

import React, { useRef } from "react" // Added useRef import
import { motion, useMotionValue, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface VariableFontHoverByLetterProps {
  label: string
  staggerDuration?: number
  transition?: { duration: number; type: "spring" }
  fromFontVariationSettings?: string
  toFontVariationSettings?: string
  staggerFrom?: "first" | "last" | "center"
  className?: string
}

export default function VariableFontHoverByLetter({
  label,
  transition = { duration: 0.8, type: "spring" },
  fromFontVariationSettings = "'wght' 400, 'slnt' 0",
  toFontVariationSettings = "'wght' 900, 'slnt' -10",
  className,
}: VariableFontHoverByLetterProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden cursor-pointer inline-block", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="flex"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        {label.split("").map((char, i) => {
          // Calculate individual letter distance relative to the mouse in the container
          const letterX = (i * 15) // Approximate width per letter
          
          const fontSettings = useTransform(
            [mouseX, mouseY],
            ([x, y]: number[]) => {
              const distance = Math.sqrt(Math.pow(x - letterX, 2) + Math.pow(y - 20, 2))
              return distance < 60 ? toFontVariationSettings : fromFontVariationSettings
            }
          )

          return (
            <motion.span
              key={i}
              className="inline-block transition-all"
              style={{ fontVariationSettings: fontSettings }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          )
        })}
      </div>
    </div>
  )
}