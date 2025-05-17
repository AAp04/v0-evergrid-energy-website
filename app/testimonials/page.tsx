import Link from "next/link"
import Image from "next/image"
import { TeslaHeader } from "@/components/tesla-header"
import { TeslaFooter } from "@/components/tesla-footer"
import { StickyCTA } from "@/components/sticky-cta"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Star, Play } from "lucide-react"
import { TestimonialCard } from "@/components/testimonial-card"

export default function Testimonials() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <TeslaHeader />
      <main>
        {/* Hero Section */}
        <section className="tesla-section bg-black">
          <div className="tesla-image-container">
            <Image
              src="/images/testimonials-hero.png"
              alt="Happy solar customers"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="tesla-section-content-middle-center">
            <h1 className="tesla-heading text-white">Customer Testimonials</h1>
            <p className="tesla-subheading text-white/90 max-w-2xl mx-auto">
              Hear from real California homeowners who have switched to Evergrid Energy Solar.
            </p>
            <div className="flex justify-center items-center gap-2 my-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-primary text-primary" />
                ))}
              </div>
              <span className="font-medium text-white">Rated 4.9/5 from over 1,000 customers</span>
            </div>
            <div className="tesla-cta-group">
              <Button
                asChild
                className="tesla-button tesla-button-primary bg-white/90 text-black hover:bg-white px-8 py-3 text-lg"
              >
                <Link href="/get-quote">Join Them Today</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Testimonial */}
        <section className="tesla-section bg-black py-24">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="slide-up">
              <div className="mx-auto max-w-4xl bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-lg">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-full md:w-1/2">
                    <div className="aspect-video relative rounded-lg overflow-hidden">
                      <Image
                        src="/images/testimonial-video.png"
                        alt="Video testimonial thumbnail"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer">
                          <Play className="h-6 w-6 text-white ml-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-xl italic mb-6 text-white/90">
                      "Now we have freedom in spending a little bit more money that we didn't have before solar! Our
                      electric bill went from over $300 to just $18 per month."
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=48&width=48"
                          alt="The Picks"
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-white">The Picks</p>
                        <p className="text-sm text-white/70">San Clemente, CA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Video Testimonials */}
        <section className="tesla-section bg-white py-24 text-black">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="slide-up">
              <h2 className="text-3xl md:text-4xl font-medium mb-16 text-center">Video Testimonials</h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8">
              <AnimatedSection animation="fade-in" delay={200}>
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <div className="aspect-video relative">
                    <Image
                      src="/images/video-testimonial-1.png"
                      alt="Video testimonial thumbnail"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer">
                        <Play className="h-6 w-6 text-white ml-1" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium mb-2">The Johnson Family</h3>
                    <p className="text-sm text-gray-500 mb-4">San Diego, CA</p>
                    <p className="text-gray-700">
                      "We've been with Evergrid Energy Solar for over a year now, and our electric bills have dropped by
                      more than 80%. The Tesla Powerwall has been a lifesaver during outages."
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in" delay={400}>
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <div className="aspect-video relative">
                    <Image
                      src="/images/video-testimonial-2.png"
                      alt="Video testimonial thumbnail"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer">
                        <Play className="h-6 w-6 text-white ml-1" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium mb-2">The Martinez Family</h3>
                    <p className="text-sm text-gray-500 mb-4">Fresno, CA</p>
                    <p className="text-gray-700">
                      "The installation was quick and professional. We're saving about $200 per month, and the customer
                      service has been excellent whenever we have questions."
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Written Testimonials */}
        <section className="tesla-section bg-black py-24">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="slide-up">
              <h2 className="text-3xl md:text-4xl font-medium mb-16 text-center text-white">What Our Customers Say</h2>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <AnimatedSection key={i} animation="fade-in" delay={100 + i * 100}>
                  <TestimonialCard
                    quote="Switching to solar with Evergrid Energy was the best decision we made for our home. The process was smooth, and we're saving money every month."
                    name="Customer Name"
                    location="Location, CA"
                    rating={5}
                  />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Metrics */}
        <section className="tesla-section bg-white py-24 text-black">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="slide-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-medium mb-4">Why California Homeowners Trust Us</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  We're committed to providing the highest quality solar solutions and customer service.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <AnimatedSection animation="fade-in" delay={100}>
                <div className="bg-gray-100 p-8 rounded-lg">
                  <div className="text-4xl font-medium text-primary mb-2">1,000+</div>
                  <p className="text-lg font-medium">Homes Served</p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in" delay={200}>
                <div className="bg-gray-100 p-8 rounded-lg">
                  <div className="text-4xl font-medium text-primary mb-2">4.9/5</div>
                  <p className="text-lg font-medium">Customer Rating</p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in" delay={300}>
                <div className="bg-gray-100 p-8 rounded-lg">
                  <div className="text-4xl font-medium text-primary mb-2">25 Yr</div>
                  <p className="text-lg font-medium">Production Guarantee</p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in" delay={400}>
                <div className="bg-gray-100 p-8 rounded-lg">
                  <div className="text-4xl font-medium text-primary mb-2">$0</div>
                  <p className="text-lg font-medium">Upfront Cost</p>
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
                <h2 className="mb-4 text-4xl font-medium">Join Our Satisfied Customers</h2>
                <p className="mb-8 text-xl text-white/80">See if your home qualifies for our $0 down solar program.</p>
                <Button
                  asChild
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-medium"
                >
                  <Link href="/get-quote">See If You Qualify</Link>
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
