import type { Metadata } from "next"
import { Playfair_Display } from "next/font/google"
import type React from "react"
import "./globals.css"

const _playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700", "900"] })

export const metadata: Metadata = {
  title: "Artists I enjoy - scor32k"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${_playfair.className} antialiased bg-stone-950 text-stone-50`}>
        {children}
      </body>
    </html>
  )
}
