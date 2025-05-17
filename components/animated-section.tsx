"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

interface AnimatedSectionProps {
  children: React.ReactNode
  animation?: "fade-in" | "slide-up" | "slide-in-right" | "slide-in-left"
  delay?: number
  threshold?: number
  className?: string
}

export function AnimatedSection({
  children,
  animation = "fade-in",
  delay = 0,
  threshold = 0.1,
  className = "",
}: AnimatedSectionProps) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  })

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, delay)
      return () => clearTimeout(timer)
    }
  }, [inView, delay])

  const getAnimationClass = () => {
    if (!isVisible) return "opacity-0"
    switch (animation) {
      case "fade-in":
        return "animate-fade-in"
      case "slide-up":
        return "animate-slide-up"
      case "slide-in-right":
        return "animate-slide-in-right"
      case "slide-in-left":
        return "animate-slide-in-left"
      default:
        return "animate-fade-in"
    }
  }

  return (
    <div ref={ref} className={`${className} ${getAnimationClass()}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}
