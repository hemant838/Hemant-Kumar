"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { TextPlugin } from "gsap/TextPlugin"

export default function HeroSection() {
  const nameRef = useRef<HTMLHeadingElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)
  const [currentCodeSnippet, setCurrentCodeSnippet] = useState(0)

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const codeSnippets = [
    "const developer = new FullStackEngineer();",
    "await buildAmazingThings();",
    "console.log('Innovation in progress...');",
    "deploy(dreamProject).to('production');",
    "git commit -m 'Building the future';",
    "docker run --name innovation -p 3000:3000;",
    "kubectl apply -f dreams.yaml;",
    "terraform apply --auto-approve;"
  ]



  const techStack = [
    { name: "React", icon: "⚛️", color: "text-cyan-400", glow: "shadow-cyan-400/50" },
    { name: "Node.js", icon: "🟢", color: "text-green-400", glow: "shadow-green-400/50" },
    { name: "MongoDB", icon: "🍃", color: "text-green-500", glow: "shadow-green-500/50" },
    { name: "Next.js", icon: "▲", color: "text-white", glow: "shadow-white/50" },
    { name: "TypeScript", icon: "📘", color: "text-blue-400", glow: "shadow-blue-400/50" },
    { name: "Docker", icon: "🐳", color: "text-blue-500", glow: "shadow-blue-500/50" },
    { name: "Python", icon: "🐍", color: "text-yellow-400", glow: "shadow-yellow-400/50" },
    { name: "AWS", icon: "☁️", color: "text-orange-400", glow: "shadow-orange-400/50" },
  ]

  useEffect(() => {
    // Register GSAP plugin on client side only
    gsap.registerPlugin(TextPlugin)
    
    const ctx = gsap.context(() => {
      // Animated text reveal with more dramatic effect
      gsap.fromTo(
        nameRef.current,
        { opacity: 0, y: 100, rotationX: 90, scale: 0.5 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          scale: 1,
          duration: 2,
          ease: "power4.out",
          delay: 0.5,
        },
      )

      // Typewriter effect for tagline
      gsap.to(taglineRef.current, {
        text: "Engineering the Future, One Stack at a Time",
        duration: 2.5,
        delay: 2.5,
        ease: "none",
      })

      // Enhanced floating animation for tech icons
      gsap.utils.toArray(".tech-icon").forEach((icon: any, i) => {
        gsap.set(icon, { transformOrigin: "center center" })
        gsap.to(icon, {
          y: "random(-30, 30)",
          x: "random(-20, 20)",
          rotation: "random(-20, 20)",
          scale: "random(0.8, 1.2)",
          duration: "random(3, 6)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.3,
        })
      })

      // Animate particles
      gsap.utils.toArray(".particle").forEach((particle: any, i) => {
        gsap.to(particle, {
          y: "random(-100, 100)",
          x: "random(-50, 50)",
          opacity: "random(0.1, 0.8)",
          duration: "random(4, 8)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.1,
        })
      })
    })

    // Code snippet rotation
    const interval = setInterval(() => {
      setCurrentCodeSnippet((prev) => (prev + 1) % codeSnippets.length)
    }, 3000)

    return () => {
      ctx.revert()
      clearInterval(interval)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Enhanced Background with Matrix Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent" />
        
        {/* Subtle Particle Effect */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="particle absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
        
        {/* Elegant Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="h-full w-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px'
            }}
          />
        </div>
      </div>

      {/* Floating Tech Icons with Enhanced Design */}
      <div className="absolute inset-0">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            className={`tech-icon absolute ${tech.color} opacity-30 hover:opacity-80 transition-all duration-300`}
            style={{
              left: `${15 + (index % 4) * 20}%`,
              top: `${20 + Math.floor(index / 4) * 25}%`,
            }}
            whileHover={{ 
              scale: 1.3, 
              opacity: 1,
              filter: "drop-shadow(0 0 20px currentColor)"
            }}
          >
            <div className={`p-4 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 ${tech.glow} shadow-lg`}>
              <div className="text-2xl mb-2">{tech.icon}</div>
              <div className="text-sm font-semibold">{tech.name}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Elegant Code Snippet */}
      <motion.div
        className="absolute top-20 right-10 hidden lg:block"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="bg-gray-900/60 backdrop-blur-md border border-cyan-400/20 rounded-xl p-4 font-mono text-sm shadow-2xl">
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 rounded-full bg-red-400 mr-2 opacity-60"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2 opacity-60"></div>
            <div className="w-3 h-3 rounded-full bg-green-400 opacity-60"></div>
          </div>
          <motion.div
            key={currentCodeSnippet}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-cyan-300 text-sm"
          >
            {codeSnippets[currentCodeSnippet]}
          </motion.div>
        </div>
      </motion.div>



      {/* Main Content */}
      <div className="text-center z-10 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative w-48 h-48 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-blue-600 p-1 ">
              <div className="w-full h-full rounded-full bg-black p-2">
                <img 
                  src="/hemant.jpeg" 
                  className="w-full h-full object-cover rounded-full border-2 border-cyan-400/30" 
                  alt="Hemant Kumar" 
                />
              </div>
            </div>
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-500/20 blur-xl animate-pulse"></div>
          </div>
        </motion.div>

        <h1
          ref={nameRef}
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl"
        >
          Hemant Kumar
        </h1>

        <p ref={taglineRef} className="text-xl md:text-2xl text-gray-300 mb-8 h-8 font-light" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl text-white font-semibold overflow-hidden"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 40px rgba(6, 182, 212, 0.6)",
              filter: "brightness(1.1)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleScrollToSection('projects')}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center gap-2">
              <span>🚀</span> View My Work
            </span>
          </motion.button>
          <motion.button
            className="group relative px-8 py-4 border-2 border-cyan-400/50 rounded-xl text-white font-semibold backdrop-blur-sm bg-gray-900/30 overflow-hidden"
            whileHover={{ 
              scale: 1.05, 
              borderColor: "rgba(6, 182, 212, 1)",
              boxShadow: "0 0 30px rgba(6, 182, 212, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleScrollToSection('contact')}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center gap-2">
              <span>💬</span> Get In Touch
            </span>
          </motion.button>
        </motion.div>
        
        {/* Enhanced Tech Stats with API Status */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4 }}
          className="mt-12 space-y-6"
        >
          {/* Status Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Available for projects</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span>Full-stack developer</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span>Tech enthusiast</span>
            </div>
          </div>
          
          {/* Elegant Tech Indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-xs">
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Systems Online</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span>Ready to Deploy</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        whileHover={{ scale: 1.2 }}
        onClick={() => handleScrollToSection('about')}
      >
        <div className="relative">
          <div className="w-8 h-12 border-2 border-cyan-400/50 rounded-full flex justify-center bg-gray-900/30 backdrop-blur-sm">
            <motion.div
              className="w-1.5 h-4 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full mt-2"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
          <div className="absolute -inset-2 rounded-full bg-cyan-400/10 blur-md animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  )
}
