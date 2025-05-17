import Link from "next/link"
import { TeslaHeader } from "@/components/tesla-header"
import { TeslaFooter } from "@/components/tesla-footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, Phone } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export default function ThankYou() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <TeslaHeader />
      <main className="flex-1 pt-20">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="slide-up">
              <div className="text-center mb-12">
                <div className="mb-6 flex justify-center">
                  <div className="rounded-full bg-primary/20 p-3">
                    <CheckCircle className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-medium mb-4">We've Received Your Info!</h1>
                <p className="text-xl text-white/80 max-w-2xl mx-auto">
                  You'll hear from Evergrid Energy within 24 hours.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={300}>
              <Card className="mx-auto max-w-2xl bg-white/5 backdrop-blur-md border-0 shadow-lg mb-12">
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl font-medium mb-6 text-white">What to Expect Next</h2>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/20 p-1 mt-1">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                          1
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-white">Initial Contact</p>
                        <p className="text-white/70">
                          A solar consultant will call you within 24 hours to discuss your energy needs.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/20 p-1 mt-1">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                          2
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-white">Custom Design</p>
                        <p className="text-white/70">We'll create a personalized solar system design for your home.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/20 p-1 mt-1">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                          3
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-white">Savings Presentation</p>
                        <p className="text-white/70">We'll show you exactly how much you can save with solar.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/20 p-1 mt-1">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                          4
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-white">Installation</p>
                        <p className="text-white/70">
                          If you decide to move forward, we'll schedule your installation.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={500}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  variant="outline"
                  className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/60 px-6 py-3"
                >
                  <Link href="/how-it-works">Want to Learn More?</Link>
                </Button>
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 gap-2">
                  <a href="tel:8005551234">
                    <Phone className="h-4 w-4" />
                    Call (800) 555-1234
                  </a>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <TeslaFooter />
    </div>
  )
}
