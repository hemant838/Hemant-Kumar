import type React from "react"
import type { Metadata } from "next"
import { Bricolage_Grotesque, IBM_Plex_Mono } from "next/font/google"
import "./globals.css"

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Hemant Kumar - Full Stack Developer",
  description: "Portfolio of Hemant Kumar, a full stack developer building thoughtful SaaS products and modern web experiences.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} ${ibmPlexMono.variable}`}>{children}</body>
    </html>
  )
}
