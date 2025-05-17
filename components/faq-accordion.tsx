"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FaqItem {
  question: string
  answer: string
}

interface FaqAccordionProps {
  items: FaqItem[]
  isDark?: boolean
}

export function FaqAccordion({ items, isDark = true }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className={`rounded-lg overflow-hidden ${isDark ? "bg-white/5 backdrop-blur-md" : "bg-gray-100"}`}
        >
          <button
            className={`flex w-full items-center justify-between p-6 text-left font-medium ${
              isDark ? "text-white" : "text-black"
            }`}
            onClick={() => toggleItem(index)}
            aria-expanded={openIndex === index}
          >
            <span className="text-lg">{item.question}</span>
            <ChevronDown
              className={`h-5 w-5 transition-transform duration-200 ${
                openIndex === index ? "rotate-180" : ""
              } ${isDark ? "text-white/70" : "text-gray-500"}`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96" : "max-h-0"}`}
          >
            <div className={`p-6 pt-0 ${isDark ? "text-white/80" : "text-gray-700"}`}>{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
