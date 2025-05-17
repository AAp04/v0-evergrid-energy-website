"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { TeslaHeader } from "@/components/tesla-header"
import { TeslaFooter } from "@/components/tesla-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { CheckCircle, Upload, ChevronLeft, ChevronRight } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { NumberSlider } from "@/components/number-slider"

export default function GetQuote() {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [billAmount, setBillAmount] = useState(200)
  const [formData, setFormData] = useState({
    zipCode: "",
    address: "",
    phone: "",
    email: "",
    billFile: null,
  })
  const [errors, setErrors] = useState({})
  const [formProgress, setFormProgress] = useState(0)

  // Update progress when current question changes
  useEffect(() => {
    const totalQuestions = 5 // Total number of questions
    setFormProgress((currentQuestion / totalQuestions) * 100)
  }, [currentQuestion])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        billFile: e.target.files[0],
      })
    }
  }

  const validateCurrentQuestion = () => {
    const newErrors = {}

    switch (currentQuestion) {
      case 2: // ZIP Code
        if (!formData.zipCode) {
          newErrors.zipCode = "ZIP Code is required"
        } else if (!/^\d{5}$/.test(formData.zipCode)) {
          newErrors.zipCode = "Please enter a valid 5-digit ZIP Code"
        }
        break
      case 4: // Email
        if (!formData.email) {
          newErrors.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = "Please enter a valid email address"
        }
        break
      case 5: // Phone
        if (!formData.phone) {
          newErrors.phone = "Phone number is required"
        } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
          newErrors.phone = "Please enter a valid 10-digit phone number"
        }
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateCurrentQuestion()) {
      if (currentQuestion < 5) {
        setCurrentQuestion(currentQuestion + 1)
        window.scrollTo(0, 0)
      } else {
        // Submit form
        console.log("Form submitted:", { ...formData, billAmount })
        router.push("/thank-you")
      }
    }
  }

  const handleBack = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1)
      window.scrollTo(0, 0)
    }
  }

  const formatPhoneNumber = (value) => {
    if (!value) return value
    const phoneNumber = value.replace(/\D/g, "")
    if (phoneNumber.length < 4) return phoneNumber
    if (phoneNumber.length < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`
  }

  const handlePhoneChange = (e) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value)
    setFormData({
      ...formData,
      phone: formattedPhoneNumber,
    })
  }

  const getQuestionTitle = () => {
    switch (currentQuestion) {
      case 1:
        return "What's your average monthly electric bill?"
      case 2:
        return "What's your ZIP code?"
      case 3:
        return "What's your address? (Optional)"
      case 4:
        return "What's your email address?"
      case 5:
        return "What's your phone number?"
      default:
        return "Get Your Free Solar Quote"
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <TeslaHeader />
      <main className="flex-1 pt-20">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="slide-up">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-medium mb-4 text-white">Get Your Free Solar Quote</h1>
                <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
                  See how much you can save with our $0 down solar program.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={300}>
              <Card className="mx-auto max-w-2xl bg-white/5 backdrop-blur-md border-0 shadow-lg">
                <div className="p-6 md:p-8">
                  {/* Progress Indicator */}
                  <div className="mb-8">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-light text-white/70">Question {currentQuestion} of 5</span>
                      <span className="text-sm font-light text-white/70">{Math.round(formProgress)}% Complete</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5">
                      <div
                        className="bg-primary h-1.5 rounded-full transition-all duration-500"
                        style={{ width: `${formProgress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h2 className="text-2xl font-medium text-white mb-2">{getQuestionTitle()}</h2>
                    <p className="text-white/70 font-light">
                      {currentQuestion === 5
                        ? "We'll use this to send you your custom quote."
                        : "This helps us provide an accurate estimate."}
                    </p>
                  </div>

                  {/* Question 1: Bill Amount */}
                  {currentQuestion === 1 && (
                    <div className="space-y-8 py-4">
                      <NumberSlider
                        value={billAmount}
                        onChange={setBillAmount}
                        min={50}
                        max={800}
                        step={10}
                        prefix="$"
                        labelMin="$50"
                        labelMax="$800+"
                      />
                    </div>
                  )}

                  {/* Question 2: ZIP Code */}
                  {currentQuestion === 2 && (
                    <div className="space-y-6 py-4">
                      <div className="space-y-2">
                        <Input
                          id="zipCode"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          placeholder="Enter your ZIP code"
                          maxLength={5}
                          className={`bg-white/10 border-white/20 text-white placeholder:text-white/50 text-lg py-6 px-4 ${
                            errors.zipCode ? "border-red-500" : ""
                          }`}
                        />
                        {errors.zipCode && <p className="text-sm text-red-500">{errors.zipCode}</p>}
                      </div>
                    </div>
                  )}

                  {/* Question 3: Address (Optional) */}
                  {currentQuestion === 3 && (
                    <div className="space-y-6 py-4">
                      <div className="space-y-2">
                        <Input
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="Enter your street address (optional)"
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 text-lg py-6 px-4"
                        />
                      </div>
                    </div>
                  )}

                  {/* Question 4: Email */}
                  {currentQuestion === 4 && (
                    <div className="space-y-6 py-4">
                      <div className="space-y-2">
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email address"
                          className={`bg-white/10 border-white/20 text-white placeholder:text-white/50 text-lg py-6 px-4 ${
                            errors.email ? "border-red-500" : ""
                          }`}
                        />
                        {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                      </div>
                    </div>
                  )}

                  {/* Question 5: Phone */}
                  {currentQuestion === 5 && (
                    <div className="space-y-6 py-4">
                      <div className="space-y-2">
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          placeholder="(555) 555-5555"
                          className={`bg-white/10 border-white/20 text-white placeholder:text-white/50 text-lg py-6 px-4 ${
                            errors.phone ? "border-red-500" : ""
                          }`}
                        />
                        {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
                      </div>

                      <div className="space-y-2 mt-8">
                        <Label htmlFor="billFile" className="text-white font-light">
                          Upload Utility Bill (Optional)
                        </Label>
                        <div className="border-2 border-dashed border-white/20 rounded-lg p-6 text-center cursor-pointer hover:bg-white/5 transition-colors">
                          <input
                            id="billFile"
                            type="file"
                            accept=".pdf,.png,.jpg,.jpeg"
                            onChange={handleFileChange}
                            className="hidden"
                          />
                          <label htmlFor="billFile" className="cursor-pointer">
                            <Upload className="mx-auto h-12 w-12 text-white/50 mb-2" />
                            <p className="text-sm font-medium text-white">
                              {formData.billFile ? formData.billFile.name : "Click to upload or drag and drop"}
                            </p>
                            <p className="text-xs text-white/50 mt-1 font-light">PDF, PNG, JPG (max. 10MB)</p>
                          </label>
                        </div>
                      </div>

                      <p className="text-xs text-center text-white/50 font-light mt-6">
                        By submitting this form, you agree to our{" "}
                        <Link href="/terms-conditions" className="underline underline-offset-2 hover:text-white">
                          Terms & Conditions
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy-policy" className="underline underline-offset-2 hover:text-white">
                          Privacy Policy
                        </Link>
                        . We do not share your personal information.
                      </p>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-8">
                    {currentQuestion > 1 ? (
                      <Button
                        onClick={handleBack}
                        variant="outline"
                        className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/60 px-6 py-3 gap-2"
                      >
                        <ChevronLeft className="h-4 w-4" />
                        Back
                      </Button>
                    ) : (
                      <div></div> // Empty div to maintain flex spacing
                    )}

                    <Button
                      onClick={handleNext}
                      className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 gap-2"
                    >
                      {currentQuestion === 5 ? "Get My Quote" : "Continue"}
                      {currentQuestion !== 5 && <ChevronRight className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={500}>
              <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-white">No Upfront Cost</h3>
                    <p className="text-sm text-white/70 font-light">Get solar installed with $0 down payment</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-white">No Loans or Debt</h3>
                    <p className="text-sm text-white/70 font-light">Simply pay for the power you use</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-white">25-Year Guarantee</h3>
                    <p className="text-sm text-white/70 font-light">Full production and performance warranty</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <TeslaFooter />
    </div>
  )
}
