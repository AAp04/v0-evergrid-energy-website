import Link from "next/link"
import Image from "next/image"
import { TeslaHeader } from "@/components/tesla-header"
import { TeslaFooter } from "@/components/tesla-footer"
import { StickyCTA } from "@/components/sticky-cta"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { CheckCircle, ChevronDown } from "lucide-react"

export default function HowItWorks() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <TeslaHeader />
      <main>
        {/* Hero Section */}
        <section className="tesla-section bg-black">
          <div className="tesla-image-container">
            <Image
              src="/images/how-it-works-hero.png"
              alt="Solar installation process"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="tesla-section-content-middle-center">
            <h1 className="tesla-heading text-white">How Evergrid Energy Solar Works</h1>
            <p className="tesla-subheading text-white/90 max-w-2xl mx-auto">
              Our simple 4-step process makes switching to solar easy, affordable, and hassle-free.
            </p>
            <div className="tesla-cta-group">
              <Button
                asChild
                className="tesla-button tesla-button-primary bg-white/90 text-black hover:bg-white px-8 py-3 text-lg"
              >
                <Link href="/get-quote">Get Started Today</Link>
              </Button>
            </div>
          </div>
          <div className="tesla-scroll-indicator">
            <ChevronDown className="h-8 w-8 text-white opacity-70" />
          </div>
        </section>

        {/* Step 1: Free Evaluation */}
        <section className="tesla-section bg-black">
          <div className="tesla-image-container">
            <Image src="/images/step1-evaluation.png" alt="Free evaluation" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="container mx-auto px-4 py-24 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="slide-in-left">
                <div>
                  <div className="inline-flex items-center justify-center rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-primary mb-4">
                    Step 1
                  </div>
                  <h2 className="text-3xl md:text-4xl font-medium mb-6 text-white">Free Evaluation</h2>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                      <p className="text-white/90">Upload your recent electric bill</p>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                      <p className="text-white/90">Provide basic property information</p>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                      <p className="text-white/90">Receive a custom solar system estimate</p>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                      <p className="text-white/90">Schedule a virtual consultation with our solar experts</p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                      <Link href="/get-quote">Upload Your Bill</Link>
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
              <div className="hidden md:block">
                {/* This is intentionally empty as the background image serves as the visual */}
              </div>
            </div>
          </div>
        </section>

        {/* Step 2: Permit & Design */}
        <section className="tesla-section bg-white text-black">
          <div className="container mx-auto px-4 py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <AnimatedSection animation="slide-up">
                  <Image
                    src="/images/step2-design.png"
                    alt="Permit and design"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </AnimatedSection>
              </div>
              <AnimatedSection animation="slide-in-right" className="order-1 md:order-2">
                <div>
                  <div className="inline-flex items-center justify-center rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-primary mb-4">
                    Step 2
                  </div>
                  <h2 className="text-3xl md:text-4xl font-medium mb-6">Permit & Design</h2>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                      <p className="text-gray-700">Professional roof assessment</p>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                      <p className="text-gray-700">Custom Tesla system design</p>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                      <p className="text-gray-700">Permit application and processing</p>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                      <p className="text-gray-700">Utility interconnection approval</p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Button asChild className="bg-black text-white hover:bg-black/90">
                      <Link href="/get-quote">Start Your Design</Link>
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Step 3: Installation */}
        <section className="tesla-section bg-black">
          <div className="tesla-image-container">
            <Image src="/images/step3-installation.png" alt="Installation" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="container mx-auto px-4 py-24 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="slide-in-left">
                <div>
                  <div className="inline-flex items-center justify-center rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-primary mb-4">
                    Step 3
                  </div>
                  <h2 className="text-3xl md:text-4xl font-medium mb-6 text-white">Installation</h2>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                      <p className="text-white/90">Professional installation by certified technicians</p>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                      <p className="text-white/90">Most installations completed in just one day</p>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                      <p className="text-white/90">City inspection and approval</p>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                      <p className="text-white/90">Full roof warranty on all installation points</p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                      <Link href="/get-quote">Schedule Installation</Link>
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
              <div className="hidden md:block">
                {/* This is intentionally empty as the background image serves as the visual */}
              </div>
            </div>
          </div>
        </section>

        {/* Step 4: Activation & Monitoring */}
        <section className="tesla-section bg-white text-black">
          <div className="container mx-auto px-4 py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <AnimatedSection animation="slide-up">
                  <Image
                    src="/images/step4-monitoring.png"
                    alt="Activation and monitoring"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </AnimatedSection>
              </div>
              <AnimatedSection animation="slide-in-right" className="order-1 md:order-2">
                <div>
                  <div className="inline-flex items-center justify-center rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-primary mb-4">
                    Step 4
                  </div>
                  <h2 className="text-3xl md:text-4xl font-medium mb-6">Activation & Monitoring</h2>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                      <p className="text-gray-700">System activation and testing</p>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                      <p className="text-gray-700">Mobile app setup for real-time monitoring</p>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                      <p className="text-gray-700">25-year production guarantee</p>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                      <p className="text-gray-700">Ongoing support and maintenance</p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Button asChild className="bg-black text-white hover:bg-black/90">
                      <Link href="/get-quote">Start Saving Today</Link>
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="tesla-section bg-black py-24 text-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="slide-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-medium mb-4">What's Included</h2>
                <p className="text-lg text-white/80 max-w-2xl mx-auto">
                  Our comprehensive solar solution includes everything you need for a worry-free experience.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatedSection animation="fade-in" delay={100}>
                <div className="bg-white/5 backdrop-blur-md p-8 rounded-lg">
                  <h3 className="text-xl font-medium mb-4 text-white">Custom System Design</h3>
                  <p className="text-white/80">Tailored solar panel layout optimized for your roof and energy needs.</p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in" delay={200}>
                <div className="bg-white/5 backdrop-blur-md p-8 rounded-lg">
                  <h3 className="text-xl font-medium mb-4 text-white">Professional Installation</h3>
                  <p className="text-white/80">
                    Expert installation by certified technicians with years of experience.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in" delay={300}>
                <div className="bg-white/5 backdrop-blur-md p-8 rounded-lg">
                  <h3 className="text-xl font-medium mb-4 text-white">25-Year Guarantee</h3>
                  <p className="text-white/80">
                    If the system doesn't produce as promised, we fix it or reimburse you.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in" delay={400}>
                <div className="bg-white/5 backdrop-blur-md p-8 rounded-lg">
                  <h3 className="text-xl font-medium mb-4 text-white">Smart Monitoring</h3>
                  <p className="text-white/80">
                    Track your solar production and savings in real-time via our mobile app.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in" delay={500}>
                <div className="bg-white/5 backdrop-blur-md p-8 rounded-lg">
                  <h3 className="text-xl font-medium mb-4 text-white">Maintenance & Support</h3>
                  <p className="text-white/80">Ongoing maintenance and customer support for the life of your system.</p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in" delay={600}>
                <div className="bg-white/5 backdrop-blur-md p-8 rounded-lg">
                  <h3 className="text-xl font-medium mb-4 text-white">Roof Warranty</h3>
                  <p className="text-white/80">
                    Full warranty coverage for all roof penetrations and installation points.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="tesla-section bg-black py-24 text-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="slide-up">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="mb-4 text-4xl font-medium">Ready to Get Started?</h2>
                <p className="mb-8 text-xl text-white/80">
                  Take the first step toward energy independence and lower electric bills.
                </p>
                <Button
                  asChild
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-medium"
                >
                  <Link href="/get-quote">Get My Free Quote</Link>
                </Button>
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
