"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, TrendingUp } from "lucide-react"

export default function ExperienceSection() {
  const experiences = [
    {
      company: "India Accelerator",
      role: "Full Stack Developer Intern",
      duration: "Nov. 2024 – Present",
      location: "Gurugram, India",
      description: "Building scalable SaaS solutions with modern tech stack",
      achievements: [
        "25% increase in user engagement",
        "45% reduction in script execution time",
        "Built RESTful APIs from scratch",
        "Implemented multi-tenant architecture",
      ],
      tech: ["React", "Node.js", "Docker", "PostgreSQL"],
      color: "from-blue-500 to-purple-500",
    },
    {
      company: "RT map Tech Solutions",
      role: "Web Developer Intern",
      duration: "Jun. 2023 – Jul. 2023",
      location: "Jaipur, India (Remote)",
      description: "Developed responsive web applications using MERN stack",
      achievements: [
        "15% increase in user adoption",
        "50% reduction in script execution time",
        "30% improvement in user management efficiency",
        "Applied best practices and design patterns",
      ],
      tech: ["React", "Node.js", "MongoDB", "JavaScript"],
      color: "from-green-500 to-teal-500",
    },
  ]

  const leadership = [
    {
      role: "Tech Lead",
      organization: "Compuwave Society",
      duration: "Apr. 2022 - Dec. 2024",
      description: "Led technical initiatives and mentored team members",
    },
    {
      role: "Event Head",
      organization: "The Smart Hackathon 2023",
      duration: "Jan. 2023 - Feb. 2024",
      description: "Organized and managed technical hackathon event",
    },
  ]

  return (
    <section className="fade-in-section py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
        >
          Experience
        </motion.h2>

        {/* Professional Experience */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold mb-8 text-white">Professional Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="group relative interactive"
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden">
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-5 group-hover:opacity-15 transition-opacity duration-300`}
                  />

                  <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div>
                        <h4 className="text-2xl font-bold text-white mb-2">{exp.role}</h4>
                        <h5 className="text-xl text-blue-400 mb-2">{exp.company}</h5>
                        <p className="text-gray-300 mb-4">{exp.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-gray-400 mb-2">
                          <Calendar size={16} className="mr-2" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center text-gray-400">
                          <MapPin size={16} className="mr-2" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h6 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <TrendingUp size={18} className="mr-2 text-green-400" />
                        Key Achievements
                      </h6>
                      <div className="grid md:grid-cols-2 gap-3">
                        {exp.achievements.map((achievement, i) => (
                          <motion.div
                            key={i}
                            className="flex items-start text-gray-300"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + i * 0.1 }}
                          >
                            <span className="text-green-400 mr-2 mt-1">•</span>
                            {achievement}
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 text-sm bg-white/10 rounded-full text-white"
                          whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership Experience */}
        <div>
          <h3 className="text-3xl font-semibold mb-8 text-white">Leadership & Responsibilities</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {leadership.map((role, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 interactive"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              >
                <h4 className="text-xl font-bold text-white mb-2">{role.role}</h4>
                <h5 className="text-purple-400 mb-2">{role.organization}</h5>
                <p className="text-gray-400 text-sm mb-3">{role.duration}</p>
                <p className="text-gray-300">{role.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
