"use client"

import { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { gsap } from "gsap"

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      const ctx = gsap.context(() => {
        // Timeline animation
        gsap.fromTo(
          ".timeline-item",
          { opacity: 0, x: -100, rotationY: 90 },
          {
            opacity: 1,
            x: 0,
            rotationY: 0,
            duration: 1,
            stagger: 0.3,
            ease: "power3.out",
          },
        )

        // Skills animation
        gsap.fromTo(
          ".skill-bubble",
          { scale: 0, rotation: 180 },
          {
            scale: 1,
            rotation: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.7)",
            delay: 1,
          },
        )
      })

      return () => ctx.revert()
    }
  }, [isInView])

  const timeline = [
    { year: "2021", event: "Started BTech in Computer Science", type: "education" },
    { year: "2022", event: "Tech Lead at Compuwave Society", type: "leadership" },
    { year: "2023", event: "Web Developer Intern at RT map Tech", type: "experience" },
    { year: "2024", event: "Full Stack Developer at India Accelerator", type: "experience" },
    { year: "2025", event: "Graduating with BTech", type: "education" },
  ]

  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "Next.js",
    "TypeScript",
    "Docker",
    "PostgreSQL",
    "Angular",
    "NestJS",
  ]

  return (
    <section ref={sectionRef} className="fade-in-section py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Timeline */}
          <div ref={timelineRef} className="space-y-8">
            <h3 className="text-3xl font-semibold mb-8 text-white">My Journey</h3>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="timeline-item flex items-center space-x-4 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              >
                <div
                  className={`w-4 h-4 rounded-full ${
                    item.type === "education"
                      ? "bg-blue-500"
                      : item.type === "experience"
                        ? "bg-green-500"
                        : "bg-purple-500"
                  }`}
                />
                <div>
                  <div className="text-sm text-gray-400">{item.year}</div>
                  <div className="text-white font-medium">{item.event}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-3xl font-semibold mb-8 text-white">Skills & Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="skill-bubble p-4 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10 text-center interactive"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    boxShadow: "0 10px 30px rgba(147, 51, 234, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-white font-medium">{skill}</div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4">
              {[
                { label: "Projects", value: "10+" },
                { label: "Experience", value: "2+ Years" },
                { label: "Technologies", value: "15+" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                >
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
