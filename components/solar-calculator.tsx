"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SolarCalculator() {
  const [billAmount, setBillAmount] = useState(200)
  const [yearsSelected, setYearsSelected] = useState(25)

  // Calculate estimated savings
  const calculateMonthlySavings = () => {
    // Simple calculation: assume 30% savings on current bill
    return Math.round(billAmount * 0.3)
  }

  const calculateAnnualSavings = () => {
    return calculateMonthlySavings() * 12
  }

  const calculateLifetimeSavings = () => {
    return calculateAnnualSavings() * yearsSelected
  }

  const monthlySavings = calculateMonthlySavings()
  const annualSavings = calculateAnnualSavings()
  const lifetimeSavings = calculateLifetimeSavings()

  return (
    <div className="w-full max-w-3xl rounded-lg bg-black/80 p-6 backdrop-blur-md">
      <h3 className="mb-6 text-2xl font-medium text-white">Calculate Your Savings</h3>

      <div className="mb-8">
        <label className="mb-2 block text-sm font-medium text-gray-300">
          Your Average Monthly Electric Bill: ${billAmount}
        </label>
        <Slider
          value={[billAmount]}
          min={50}
          max={800}
          step={10}
          onValueChange={(value) => setBillAmount(value[0])}
          className="py-4"
        />
        <div className="flex justify-between text-xs text-gray-400">
          <span>$50</span>
          <span>$800+</span>
        </div>
      </div>

      <div className="mb-8">
        <label className="mb-2 block text-sm font-medium text-gray-300">System Lifetime: {yearsSelected} years</label>
        <Slider
          value={[yearsSelected]}
          min={10}
          max={30}
          step={5}
          onValueChange={(value) => setYearsSelected(value[0])}
          className="py-4"
        />
        <div className="flex justify-between text-xs text-gray-400">
          <span>10 years</span>
          <span>30 years</span>
        </div>
      </div>

      <div className="mb-8 grid grid-cols-3 gap-4 text-center">
        <div className="rounded-lg bg-white/10 p-4">
          <p className="text-sm text-gray-300">Monthly Savings</p>
          <p className="text-2xl font-medium text-white">${monthlySavings}</p>
        </div>
        <div className="rounded-lg bg-white/10 p-4">
          <p className="text-sm text-gray-300">Annual Savings</p>
          <p className="text-2xl font-medium text-white">${annualSavings}</p>
        </div>
        <div className="rounded-lg bg-white/10 p-4">
          <p className="text-sm text-gray-300">{yearsSelected}-Year Savings</p>
          <p className="text-2xl font-medium text-white">${lifetimeSavings.toLocaleString()}</p>
        </div>
      </div>

      <div className="text-center">
        <Button
          asChild
          className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-medium"
        >
          <Link href="/get-quote">Get Your Custom Quote</Link>
        </Button>
        <p className="mt-4 text-sm text-gray-400">
          Actual savings may vary based on energy usage, system size, and utility rates.
        </p>
      </div>
    </div>
  )
}
