"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TeslaHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`tesla-nav ${isScrolled ? "tesla-nav-scrolled" : "tesla-nav-transparent"} transition-all duration-300`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="z-50">
          <Image
            src="/images/logo-white.png"
            alt="Evergrid Energy Logo"
            width={150}
            height={24}
            className="h-8 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/how-it-works" className="text-sm font-medium text-white/90 transition-colors hover:text-white">
            How It Works
          </Link>
          <Link href="/testimonials" className="text-sm font-medium text-white/90 transition-colors hover:text-white">
            Testimonials
          </Link>
          <Link href="/faq" className="text-sm font-medium text-white/90 transition-colors hover:text-white">
            FAQ
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button
            asChild
            variant="outline"
            className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/60"
          >
            <Link href="/get-quote">Get My Free Quote</Link>
          </Button>
        </div>

        <button className="z-50 md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
        </button>

        {/* Mobile menu */}
        <div
          className={`fixed inset-0 z-40 flex flex-col bg-black/95 p-6 transition-transform duration-300 md:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="mt-20 flex flex-col space-y-6">
            <Link href="/how-it-works" className="text-lg font-medium text-white" onClick={() => setIsMenuOpen(false)}>
              How It Works
            </Link>
            <Link href="/testimonials" className="text-lg font-medium text-white" onClick={() => setIsMenuOpen(false)}>
              Testimonials
            </Link>
            <Link href="/faq" className="text-lg font-medium text-white" onClick={() => setIsMenuOpen(false)}>
              FAQ
            </Link>
            <Button
              asChild
              variant="outline"
              className="mt-4 border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/60"
            >
              <Link href="/get-quote" onClick={() => setIsMenuOpen(false)}>
                Get My Free Quote
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
