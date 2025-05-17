import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo.png"
            alt="Evergrid Energy Solar Logo"
            width={180}
            height={40}
            className="h-8 w-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/how-it-works" className="text-sm font-medium transition-colors hover:text-primary">
            How It Works
          </Link>
          <Link href="/testimonials" className="text-sm font-medium transition-colors hover:text-primary">
            Testimonials
          </Link>
          <Link href="/faq" className="text-sm font-medium transition-colors hover:text-primary">
            FAQ
          </Link>
          <Button asChild>
            <Link href="/get-quote">Get My Free Quote</Link>
          </Button>
          <ModeToggle />
        </nav>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="/how-it-works" className="text-lg font-medium transition-colors hover:text-primary">
                How It Works
              </Link>
              <Link href="/testimonials" className="text-lg font-medium transition-colors hover:text-primary">
                Testimonials
              </Link>
              <Link href="/faq" className="text-lg font-medium transition-colors hover:text-primary">
                FAQ
              </Link>
              <Button asChild className="mt-2">
                <Link href="/get-quote">Get My Free Quote</Link>
              </Button>
              <div className="mt-2">
                <ModeToggle />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
