"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { TextPlugin } from "gsap/TextPlugin"

export default function HeroSection() {
  const nameRef = useRef<HTMLHeadingElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    // Register GSAP plugin on client side only
    gsap.registerPlugin(TextPlugin)
    
    const ctx = gsap.context(() => {
      // Animated text reveal
      gsap.fromTo(
        nameRef.current,
        { opacity: 0, y: 100, rotationX: 90 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.5,
          ease: "power3.out",
          delay: 0.5,
        },
      )

      // Typewriter effect for tagline
      gsap.to(taglineRef.current, {
        text: "Engineering the Future, One Stack at a Time",
        duration: 2,
        delay: 2,
        ease: "none",
      })

      // Floating animation for tech icons
      gsap.utils.toArray(".tech-icon").forEach((icon: any, i) => {
        gsap.to(icon, {
          y: "random(-20, 20)",
          x: "random(-10, 10)",
          rotation: "random(-15, 15)",
          duration: "random(2, 4)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.2,
        })
      })
    })

    return () => ctx.revert()
  }, [])

  const techStack = [
    { name: "React", color: "text-blue-400" },
    { name: "Node.js", color: "text-green-400" },
    { name: "MongoDB", color: "text-green-500" },
    { name: "Next.js", color: "text-white" },
    { name: "TypeScript", color: "text-blue-300" },
    { name: "Docker", color: "text-blue-500" },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10" />

      {/* Floating Tech Icons */}
      <div className="absolute inset-0">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            className={`tech-icon absolute ${tech.color} text-lg font-semibold opacity-20`}
            style={{
              left: `${20 + index * 15}%`,
              top: `${30 + (index % 3) * 20}%`,
            }}
            whileHover={{ scale: 1.2, opacity: 0.8 }}
          >
            {tech.name}
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="text-center z-10 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-4xl font-bold">
            <img src="/hemant.jpeg" className="w-full h-full object-cover rounded-full" alt="Hemant Kumar" />
          </div>
        </motion.div>

        <h1
          ref={nameRef}
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent"
        >
          Hemant Kumar
        </h1>

        <p ref={taglineRef} className="text-xl md:text-2xl text-gray-300 mb-8 h-8" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white font-semibold interactive"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(147, 51, 234, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
          <motion.button
            className="px-8 py-3 border border-white/30 rounded-full text-white font-semibold backdrop-blur-sm interactive"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>
      </motion.div>
    </section>
  )
}
