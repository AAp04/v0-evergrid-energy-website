"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"

export function HomeChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!canvasRef.current || !isClient) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth * 2
    canvas.height = canvas.offsetHeight * 2
    ctx.scale(2, 2)

    // Data
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const edisonData = [180, 175, 190, 210, 250, 320, 380, 400, 350, 280, 220, 190]
    const solarData = [120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120]

    // Colors
    const edisonColor = "#ef4444"
    const solarColor = "#FFB800"
    const textColor = document.documentElement.classList.contains("dark") ? "#e5e7eb" : "#374151"
    const gridColor = document.documentElement.classList.contains("dark") ? "#374151" : "#e5e7eb"

    // Chart dimensions
    const width = canvas.offsetWidth
    const height = canvas.offsetHeight
    const padding = 40
    const chartWidth = width - padding * 2
    const chartHeight = height - padding * 2

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Draw grid
    ctx.strokeStyle = gridColor
    ctx.lineWidth = 0.5
    ctx.beginPath()

    // Horizontal grid lines
    for (let i = 0; i <= 5; i++) {
      const y = padding + (chartHeight / 5) * i
      ctx.moveTo(padding, y)
      ctx.lineTo(width - padding, y)
    }

    // Vertical grid lines
    for (let i = 0; i < months.length; i++) {
      const x = padding + (chartWidth / (months.length - 1)) * i
      ctx.moveTo(x, padding)
      ctx.lineTo(x, height - padding)
    }
    ctx.stroke()

    // Draw axes labels
    ctx.fillStyle = textColor
    ctx.font = "10px Arial"
    ctx.textAlign = "center"

    // X-axis (months)
    for (let i = 0; i < months.length; i++) {
      const x = padding + (chartWidth / (months.length - 1)) * i
      ctx.fillText(months[i], x, height - padding + 15)
    }

    // Y-axis (dollars)
    ctx.textAlign = "right"
    for (let i = 0; i <= 5; i++) {
      const y = height - padding - (chartHeight / 5) * i
      ctx.fillText(`$${i * 100}`, padding - 10, y + 3)
    }

    // Draw Edison data line
    ctx.strokeStyle = edisonColor
    ctx.lineWidth = 2
    ctx.beginPath()
    for (let i = 0; i < months.length; i++) {
      const x = padding + (chartWidth / (months.length - 1)) * i
      const y = height - padding - (chartHeight / 500) * edisonData[i]
      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    }
    ctx.stroke()

    // Draw Solar data line
    ctx.strokeStyle = solarColor
    ctx.lineWidth = 2
    ctx.beginPath()
    for (let i = 0; i < months.length; i++) {
      const x = padding + (chartWidth / (months.length - 1)) * i
      const y = height - padding - (chartHeight / 500) * solarData[i]
      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    }
    ctx.stroke()

    // Draw legend
    ctx.fillStyle = textColor
    ctx.font = "12px Arial"
    ctx.textAlign = "left"

    // Edison legend
    ctx.fillStyle = edisonColor
    ctx.fillRect(padding, 20, 15, 15)
    ctx.fillStyle = textColor
    ctx.fillText("Edison/Traditional Utility", padding + 20, 32)

    // Solar legend
    ctx.fillStyle = solarColor
    ctx.fillRect(padding + 180, 20, 15, 15)
    ctx.fillStyle = textColor
    ctx.fillText("Evergrid Energy Solar", padding + 200, 32)

    // Title
    ctx.fillStyle = textColor
    ctx.font = "14px Arial"
    ctx.textAlign = "center"
    ctx.fillText("Monthly Energy Costs Comparison", width / 2, 15)
  }, [isClient])

  return (
    <Card className="p-4 w-full">
      <div className="w-full h-[300px] relative">
        <canvas ref={canvasRef} className="w-full h-full" style={{ width: "100%", height: "100%" }} />
      </div>
    </Card>
  )
}
