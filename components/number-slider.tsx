"use client"

import { useState, useEffect, useRef } from "react"
import { Slider } from "@/components/ui/slider"

interface NumberSliderProps {
  value: number
  onChange: (value: number) => void
  min: number
  max: number
  step?: number
  prefix?: string
  suffix?: string
  labelMin?: string
  labelMax?: string
}

export function NumberSlider({
  value,
  onChange,
  min,
  max,
  step = 1,
  prefix = "",
  suffix = "",
  labelMin,
  labelMax,
}: NumberSliderProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [displayValue, setDisplayValue] = useState(value)
  const sliderRef = useRef<HTMLDivElement>(null)

  // Update display value when actual value changes
  useEffect(() => {
    setDisplayValue(value)
  }, [value])

  // Handle animation when value changes
  useEffect(() => {
    if (!isDragging) {
      const timer = setTimeout(() => {
        setDisplayValue(value)
      }, 10)
      return () => clearTimeout(timer)
    }
  }, [value, isDragging])

  return (
    <div className="w-full">
      <div className="relative mb-12 flex items-center justify-center">
        <div
          className={`text-center transition-all duration-300 ${isDragging ? "scale-110 text-primary" : "text-white"}`}
        >
          <div className="text-5xl font-medium tracking-tight">
            {prefix}
            {displayValue}
            {suffix}
          </div>
        </div>
      </div>

      <div
        ref={sliderRef}
        className="relative"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
      >
        <Slider
          value={[value]}
          min={min}
          max={max}
          step={step}
          onValueChange={(values) => onChange(values[0])}
          className="py-4"
        />

        <div className="absolute -bottom-6 left-0 right-0 flex justify-between">
          <span className="text-sm text-white/70 font-light">{labelMin || `${prefix}${min}${suffix}`}</span>
          <span className="text-sm text-white/70 font-light">{labelMax || `${prefix}${max}${suffix}`}</span>
        </div>
      </div>
    </div>
  )
}
