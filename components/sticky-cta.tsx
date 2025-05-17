"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 z-40 w-full bg-black/80 py-4 backdrop-blur-md transition-all duration-300">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 sm:flex-row">
        <div className="mb-4 text-center sm:mb-0 sm:text-left">
          <p className="text-sm font-medium text-white">Ready to switch to solar?</p>
          <p className="text-xs text-gray-400">$0 down, zero debt, guaranteed savings</p>
        </div>
        <div className="flex gap-4">
          <Button
            asChild
            variant="outline"
            className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/60"
          >
            <Link href="/how-it-works">Learn More</Link>
          </Button>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/get-quote">Get Quote</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
