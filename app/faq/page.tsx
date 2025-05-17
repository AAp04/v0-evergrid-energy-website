import Link from "next/link"
import Image from "next/image"
import { TeslaHeader } from "@/components/tesla-header"
import { TeslaFooter } from "@/components/tesla-footer"
import { StickyCTA } from "@/components/sticky-cta"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { FaqAccordion } from "@/components/faq-accordion"

export default function FAQ() {
  // FAQ data organized by categories
  const faqCategories = [
    {
      title: "General Questions",
      items: [
        {
          question: "How much do I pay?",
          answer:
            "With Evergrid Energy Solar, you only pay for the power your system produces. There are no upfront installation fees, no loans, and no debt. You'll typically pay a lower rate than your current utility, with rates locked in for 25 years.",
        },
        {
          question: "What if I sell my home?",
          answer:
            "If you sell your home, you have options. You can transfer the agreement to the new homeowner (solar adds value to your home), or you can buy out the system. Our team will work with you to make the transition smooth.",
        },
        {
          question: "Will this affect my roof?",
          answer:
            "No, our installation actually protects your roof. All work is covered by a comprehensive roof warranty, and our professional installers use industry-leading practices to ensure the integrity of your roof is maintained or improved.",
        },
      ],
    },
    {
      title: "Solar System & Equipment",
      items: [
        {
          question: "Is Tesla equipment included?",
          answer:
            "Yes, we use Tesla Powerwalls and inverters in our installations. Tesla is known for their high-quality, reliable equipment that offers excellent performance and aesthetics. This premium equipment is included at no additional upfront cost to you.",
        },
        {
          question: "What happens during a power outage?",
          answer:
            "If you choose to include a Tesla Powerwall with your system, you'll have backup power during grid outages. The Powerwall automatically detects outages and provides seamless power to your essential appliances and devices.",
        },
        {
          question: "What maintenance is required?",
          answer:
            "Very little maintenance is required. Solar panels are self-cleaning in most areas with occasional rainfall. We monitor your system remotely and will address any performance issues. Our 25-year warranty covers all maintenance and repairs.",
        },
      ],
    },
    {
      title: "Process & Installation",
      items: [
        {
          question: "Is there a contract?",
          answer:
            "Yes, there is a 25-year performance agreement. This agreement guarantees the production of your system and locks in your energy rates, protecting you from utility rate increases. It also includes maintenance and monitoring.",
        },
        {
          question: "How long does installation take?",
          answer:
            "Most residential installations are completed in just one day. The entire process from signing up to activation typically takes 4-6 weeks, which includes design, permitting, and utility approval.",
        },
        {
          question: "Do I qualify for the program?",
          answer:
            "To qualify, you need to be a California homeowner with an average monthly electric bill of at least $150. You also need to have a suitable roof for solar installation and a good credit score. The best way to find out is to submit your information for a free evaluation.",
        },
        {
          question: "How much will I save?",
          answer:
            "Savings vary based on your current electricity usage and rates, but most customers save 20-40% on their energy costs from day one. Over 25 years, this can add up to tens of thousands of dollars, especially as utility rates continue to rise.",
        },
      ],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <TeslaHeader />
      <main>
        {/* Hero Section */}
        <section className="tesla-section bg-black">
          <div className="tesla-image-container">
            <Image
              src="/images/faq-hero.png"
              alt="Solar panels with question marks"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="tesla-section-content-middle-center">
            <h1 className="tesla-heading text-white">Frequently Asked Questions</h1>
            <p className="tesla-subheading text-white/90 max-w-2xl mx-auto">
              Get answers to common questions about our solar program.
            </p>
            <div className="tesla-cta-group">
              <Button
                asChild
                className="tesla-button tesla-button-primary bg-white/90 text-black hover:bg-white px-8 py-3 text-lg"
              >
                <Link href="/get-quote">Get My Free Quote</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Accordion Sections */}
        {faqCategories.map((category, index) => (
          <section
            key={category.title}
            className={`tesla-section ${index % 2 === 0 ? "bg-black text-white" : "bg-white text-black"} py-24`}
          >
            <div className="container mx-auto px-4">
              <AnimatedSection animation="slide-up">
                <h2 className="text-3xl md:text-4xl font-medium mb-16 text-center">{category.title}</h2>
              </AnimatedSection>

              <AnimatedSection animation="fade-in" delay={300}>
                <div className="max-w-3xl mx-auto">
                  <FaqAccordion items={category.items} isDark={index % 2 === 0} />
                </div>
              </AnimatedSection>
            </div>
          </section>
        ))}

        {/* Still Have Questions */}
        <section className="tesla-section bg-black py-24 text-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="slide-up">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="mb-4 text-4xl font-medium">Still Have Questions?</h2>
                <p className="mb-8 text-xl text-white/80">
                  Our solar experts are here to help. Contact us for personalized answers to your questions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-medium"
                  >
                    <Link href="/get-quote">Get My Quote</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/60 px-8 py-6 text-lg"
                  >
                    <a href="tel:8005551234">Call (800) 555-1234</a>
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
