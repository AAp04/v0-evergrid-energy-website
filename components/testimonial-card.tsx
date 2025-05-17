import Image from "next/image"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  name: string
  location: string
  rating: number
  imageSrc?: string
}

export function TestimonialCard({
  quote,
  name,
  location,
  rating = 5,
  imageSrc = "/placeholder.svg?height=64&width=64",
}: TestimonialCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-md rounded-lg p-6">
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-primary text-primary" />
        ))}
      </div>
      <p className="italic mb-4 text-white/90">{quote}</p>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={name}
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="font-medium text-white">{name}</p>
          <p className="text-sm text-white/70">{location}</p>
        </div>
      </div>
    </div>
  )
}
