import Link from "next/link"
import Image from "next/image"
import { TeslaHeader } from "@/components/tesla-header"
import { TeslaFooter } from "@/components/tesla-footer"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { SolarCalculator } from "@/components/solar-calculator"
import { StickyCTA } from "@/components/sticky-cta"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Shield, Sun, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <TeslaHeader />
      <main>
        {/* Hero Section */}
        <section className="tesla-section bg-black">
          <div className="tesla-image-container">
            <Image
              src="/images/solar-hero.jpg"
              alt="Solar panels on a modern home"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          <div className="tesla-section-content-middle-center">
            <h1 className="tesla-heading text-white">Power Your Home with Solar</h1>
            <p className="tesla-subheading text-white/90">$0 Down. Zero Debt. Guaranteed Savings.</p>
            <div className="tesla-cta-group">
              <Button
                asChild
                className="tesla-button tesla-button-primary bg-white/90 text-black hover:bg-white px-8 py-3 text-lg"
              >
                <Link href="/get-quote">Get My Free Quote</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="tesla-button tesla-button-outline border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/60 px-8 py-3 text-lg"
              >
                <Link href="/how-it-works">Learn More</Link>
              </Button>
            </div>
          </div>
          <ScrollIndicator />
        </section>

        {/* Benefits Section */}
        <section className="tesla-section bg-white py-24">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="slide-up">
              <h2 className="text-center text-4xl font-medium tracking-tight mb-16">The Smarter Way to Solar</h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              <AnimatedSection animation="fade-in" delay={200}>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-3 text-xl font-medium">No Upfront Cost</h3>
                  <p className="text-gray-600">
                    Get solar installed on your home without spending a single dollar upfront. No loans, no debt.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in" delay={400}>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                    <Sun className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-3 text-xl font-medium">Fixed Energy Rates</h3>
                  <p className="text-gray-600">
                    Lock in your energy rates for 25 years, protecting you from utility rate increases.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in" delay={600}>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-3 text-xl font-medium">25-Year Guarantee</h3>
                  <p className="text-gray-600">
                    Full production guarantee and maintenance included. If the system doesn't produce, we fix it.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="tesla-section bg-black py-24 text-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="slide-up">
              <h2 className="text-center text-4xl font-medium tracking-tight mb-16">
                Traditional Grid vs. Evergrid Energy Solar
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={300}>
              <div className="mx-auto max-w-4xl overflow-hidden rounded-lg bg-white/5 backdrop-blur-sm">
                <div className="grid grid-cols-3">
                  <div className="border-b border-white/10 p-4 font-medium"></div>
                  <div className="border-b border-white/10 p-4 text-center font-medium">Traditional Grid</div>
                  <div className="border-b border-white/10 p-4 text-center font-medium text-primary">
                    Evergrid Energy Solar
                  </div>

                  <div className="border-b border-white/10 p-4">Upfront Cost</div>
                  <div className="border-b border-white/10 p-4 text-center">$0</div>
                  <div className="border-b border-white/10 p-4 text-center text-primary">$0</div>

                  <div className="border-b border-white/10 p-4">Rate Increases</div>
                  <div className="border-b border-white/10 p-4 text-center">5-7% annually</div>
                  <div className="border-b border-white/10 p-4 text-center text-primary">Fixed for 25 years</div>

                  <div className="border-b border-white/10 p-4">Peak Time Pricing</div>
                  <div className="border-b border-white/10 p-4 text-center">Yes (up to 3x higher)</div>
                  <div className="border-b border-white/10 p-4 text-center text-primary">No</div>

                  <div className="border-b border-white/10 p-4">Power During Outages</div>
                  <div className="border-b border-white/10 p-4 text-center">None</div>
                  <div className="border-b border-white/10 p-4 text-center text-primary">Yes, with Tesla Powerwall</div>

                  <div className="p-4">Environmental Impact</div>
                  <div className="p-4 text-center">High carbon footprint</div>
                  <div className="p-4 text-center text-primary">Clean, renewable energy</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Tesla Powerwall Section */}
        <section className="tesla-section bg-black">
          <div className="tesla-image-container">
            <Image src="/images/tesla-powerwall.png" alt="Tesla Powerwall installation" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="tesla-section-content-middle-center">
            <AnimatedSection animation="slide-up">
              <h2 className="tesla-heading text-white">Tesla Powerwall Included</h2>
              <p className="tesla-subheading text-white/90 max-w-2xl mx-auto">
                Keep your home powered during outages with the Tesla Powerwall battery backup system, included with your
                solar installation at no additional upfront cost.
              </p>
              <div className="tesla-cta-group">
                <Button
                  asChild
                  className="tesla-button tesla-button-primary bg-white/90 text-black hover:bg-white px-8 py-3 text-lg"
                >
                  <Link href="/get-quote">Get Started</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Process Section */}
        <section className="tesla-section bg-white py-24">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="slide-up">
              <h2 className="text-center text-4xl font-medium tracking-tight mb-16">Simple 4-Step Process</h2>
            </AnimatedSection>

            <div className="relative">
              <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gray-200 md:block"></div>

              <div className="space-y-24">
                <AnimatedSection animation="fade-in" delay={200}>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="md:text-right">
                      <div className="relative">
                        <div className="hidden md:block absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 translate-x-[calc(50%+1px)] rounded-full border-4 border-primary bg-white"></div>
                        <h3 className="text-2xl font-medium mb-3">1. Submit Bill</h3>
                        <p className="text-gray-600">
                          Upload a copy of your recent electric bill and receive a custom system estimate tailored to
                          your energy needs.
                        </p>
                      </div>
                    </div>
                    <div>
                      <Image
                        src="/images/submit-bill.png"
                        alt="Submit your bill"
                        width={500}
                        height={300}
                        className="rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fade-in" delay={300}>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="md:order-2">
                      <div className="relative">
                        <div className="hidden md:block absolute left-0 top-1/2 h-4 w-4 -translate-x-[calc(50%+1px)] -translate-y-1/2 rounded-full border-4 border-primary bg-white"></div>
                        <h3 className="text-2xl font-medium mb-3">2. Design</h3>
                        <p className="text-gray-600">
                          Our team creates a custom Tesla system design for your home and handles all permits and
                          approvals.
                        </p>
                      </div>
                    </div>
                    <div className="md:order-1">
                      <Image
                        src="/images/solar-design.png"
                        alt="Design"
                        width={500}
                        height={300}
                        className="rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fade-in" delay={400}>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="md:text-right">
                      <div className="relative">
                        <div className="hidden md:block absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 translate-x-[calc(50%+1px)] rounded-full border-4 border-primary bg-white"></div>
                        <h3 className="text-2xl font-medium mb-3">3. Install</h3>
                        <p className="text-gray-600">
                          Professional installation by certified technicians, typically completed in just one day with
                          minimal disruption.
                        </p>
                      </div>
                    </div>
                    <div>
                      <Image
                        src="/images/solar-installation.png"
                        alt="Installation"
                        width={500}
                        height={300}
                        className="rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fade-in" delay={500}>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="md:order-2">
                      <div className="relative">
                        <div className="hidden md:block absolute left-0 top-1/2 h-4 w-4 -translate-x-[calc(50%+1px)] -translate-y-1/2 rounded-full border-4 border-primary bg-white"></div>
                        <h3 className="text-2xl font-medium mb-3">4. Monitor Savings</h3>
                        <p className="text-gray-600">
                          Track your solar production through our app and enjoy immediate savings on your energy bills
                          from day one.
                        </p>
                      </div>
                    </div>
                    <div className="md:order-1">
                      <Image
                        src="/images/monitor-savings.png"
                        alt="Monitor savings"
                        width={500}
                        height={300}
                        className="rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="tesla-section bg-black py-24 text-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="slide-up">
              <h2 className="text-center text-4xl font-medium tracking-tight mb-16">See How Much You Can Save</h2>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={300} className="flex justify-center">
              <SolarCalculator />
            </AnimatedSection>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="tesla-section bg-black">
          <div className="tesla-image-container">
            <Image src="/images/testimonial-bg.png" alt="Happy homeowner with solar" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="tesla-section-content-middle-center">
            <AnimatedSection animation="fade-in">
              <div className="mx-auto max-w-3xl rounded-lg bg-black/40 p-8 backdrop-blur-md">
                <h2 className="mb-8 text-center text-3xl font-medium text-white">What Our Customers Say</h2>
                <div className="mb-6 text-center">
                  <p className="text-xl italic text-white/90">
                    "Now we have freedom in spending a little bit more money that we didn't have before solar! Our
                    electric bill went from over $300 to just $18 per month."
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="mr-4 h-16 w-16 overflow-hidden rounded-full">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="The Picks"
                      width={64}
                      height={64}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-white">The Picks</p>
                    <p className="text-sm text-white/70">San Clemente, CA</p>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <Button
                    asChild
                    variant="outline"
                    className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/60"
                  >
                    <Link href="/testimonials">View All Testimonials</Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className="tesla-section bg-black py-24 text-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="slide-up">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="mb-4 text-4xl font-medium">Ready to Power Your Home with Solar?</h2>
                <p className="mb-8 text-xl text-white/80">
                  Join thousands of California homeowners who are saving with Evergrid Energy Solar.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button
                    asChild
                    className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-medium"
                  >
                    <Link href="/get-quote">Get My Free Quote</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/60 px-8 py-6 text-lg"
                  >
                    <Link href="/how-it-works">Learn More</Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <TeslaFooter />
      <StickyCTA />
    </div>
  )
}
