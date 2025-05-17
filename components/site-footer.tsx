import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-solar-blue text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image
              src="/images/logo-white.png"
              alt="Evergrid Energy Solar Logo"
              width={180}
              height={40}
              className="h-8 w-auto"
            />
            <p className="text-sm text-gray-300">
              Helping California homeowners access clean, affordable solar energy without spending a single dollar
              upfront.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-gray-300 hover:text-white">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-300 hover:text-white">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/get-quote" className="text-gray-300 hover:text-white">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <span className="block">Phone:</span>
                <a href="tel:8005551234" className="hover:text-white">
                  800-555-1234
                </a>
              </li>
              <li className="text-gray-300">
                <span className="block">Email:</span>
                <a href="mailto:info@evergridenergy.com" className="hover:text-white">
                  info@evergridenergy.com
                </a>
              </li>
              <li className="text-gray-300">
                <span className="block">Address:</span>
                <address className="not-italic">
                  123 Solar Way
                  <br />
                  San Diego, CA 92101
                </address>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Area</h3>
            <p className="text-gray-300">
              Currently serving all of California with plans to expand to additional states soon.
            </p>
            <div className="mt-4">
              <Image
                src="/images/california-map.svg"
                alt="California Service Area"
                width={150}
                height={150}
                className="opacity-70"
              />
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Evergrid Energy Solar. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="text-sm text-gray-400 hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
