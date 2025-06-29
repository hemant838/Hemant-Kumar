"use client"

import type React from "react"

import { useEffect } from "react"

interface SmoothScrollProviderProps {
  children: React.ReactNode
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    // Smooth scrolling implementation
    const smoothScroll = () => {
      let currentScroll = window.pageYOffset
      let targetScroll = currentScroll
      const ease = 0.1

      const updateScroll = () => {
        currentScroll += (targetScroll - currentScroll) * ease
        window.scrollTo(0, currentScroll)

        if (Math.abs(targetScroll - currentScroll) > 0.1) {
          requestAnimationFrame(updateScroll)
        }
      }

      const handleWheel = (e: WheelEvent) => {
        e.preventDefault()
        targetScroll += e.deltaY
        targetScroll = Math.max(0, Math.min(targetScroll, document.body.scrollHeight - window.innerHeight))
        updateScroll()
      }

      // Only apply smooth scroll on desktop
      if (window.innerWidth > 768) {
        window.addEventListener("wheel", handleWheel, { passive: false })
        return () => window.removeEventListener("wheel", handleWheel)
      }
    }

    const cleanup = smoothScroll()
    return cleanup
  }, [])

  return <>{children}</>
}
