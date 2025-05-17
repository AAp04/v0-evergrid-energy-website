import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function TeslaFooter() {
  return (
    <footer className="bg-black py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-medium">Evergrid Energy</h3>
            <p className="text-sm text-gray-400">
              Helping California homeowners access clean, affordable solar energy without spending a single dollar
              upfront.
            </p>
            <div className="mt-4 flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium">Solar</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/how-it-works" className="hover:text-white">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-white">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/get-quote" className="hover:text-white">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <span className="block">Phone:</span>
                <a href="tel:8005551234" className="hover:text-white">
                  800-555-1234
                </a>
              </li>
              <li>
                <span className="block">Email:</span>
                <a href="mailto:info@evergridenergy.com" className="hover:text-white">
                  info@evergridenergy.com
                </a>
              </li>
              <li>
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
            <h3 className="mb-4 text-lg font-medium">Service Area</h3>
            <p className="text-sm text-gray-400">
              Currently serving all of California with plans to expand to additional states soon.
            </p>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Evergrid Energy Solar. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-sm text-gray-500 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="text-sm text-gray-500 hover:text-white">
                Terms & Conditions
              </Link>
              <Link href="/sitemap" className="text-sm text-gray-500 hover:text-white">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
