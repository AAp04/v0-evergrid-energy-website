import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Evergrid Energy Solar | $0 Down, Zero Debt Solar Solutions",
  description:
    "Power your home with solar — $0 down, zero debt. Lower your bill. Help the grid. Start for $0 with Evergrid Energy Solar.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta property="og:title" content="Evergrid Energy Solar | $0 Down, Zero Debt Solar Solutions" />
        <meta
          property="og:description"
          content="Power your home with solar — $0 down, zero debt. Lower your bill. Help the grid. Start for $0 with Evergrid Energy Solar."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://evergridenergy.com" />
        <meta property="og:image" content="https://evergridenergy.com/og-image.jpg" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
