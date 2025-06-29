"use client"

import { motion } from "framer-motion"
import { Download, Eye, GraduationCap, Briefcase, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ResumeSection() {
  const resumeData = {
    education: {
      institution: "Shaheed Bhagat Singh State University",
      degree: "Bachelor of Technology - Computer Science",
      duration: "Sep. 2021 – May 2025",
      cgpa: "7.0",
      location: "Ferozepur, Punjab",
    },
    skills: {
      programming: ["JavaScript", "TypeScript", "HTML/CSS"],
      frontend: ["React", "Angular", "Next.js", "Tailwind CSS"],
      backend: ["Node.js", "NestJS", "RESTful API"],
      database: ["MongoDB", "PostgreSQL", "Drizzle ORM"],
      tools: ["Git", "Docker", "Linux", "VS Code", "Postman", "Figma"],
    },
  }

  return (
    <section className="fade-in-section py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
        >
          Resume
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Resume Preview */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-2">Hemant Kumar</h3>
                <p className="text-gray-300">Full Stack Developer</p>
                <div className="flex justify-center space-x-4 mt-4 text-sm text-gray-400">
                  <span>9971216787</span>
                  <span>|</span>
                  <span>kumarhemant9971@gmail.com</span>
                </div>
              </div>

              {/* Education */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <GraduationCap className="text-blue-400 mr-3" size={24} />
                  <h4 className="text-xl font-semibold text-white">Education</h4>
                </div>
                <div className="pl-9">
                  <h5 className="text-lg font-medium text-white">{resumeData.education.institution}</h5>
                  <p className="text-gray-300">{resumeData.education.degree}</p>
                  <p className="text-gray-400 text-sm">
                    {resumeData.education.duration} | CGPA: {resumeData.education.cgpa}
                  </p>
                  <p className="text-gray-400 text-sm">{resumeData.education.location}</p>
                </div>
              </motion.div>

              {/* Skills */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center mb-4">
                  <Award className="text-purple-400 mr-3" size={24} />
                  <h4 className="text-xl font-semibold text-white">Technical Skills</h4>
                </div>
                <div className="pl-9 space-y-3">
                  {Object.entries(resumeData.skills).map(([category, skills]) => (
                    <div key={category}>
                      <span className="text-gray-300 font-medium capitalize">
                        {category.replace(/([A-Z])/g, " $1")}:{" "}
                      </span>
                      <span className="text-gray-400">{skills.join(", ")}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Experience Highlight */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex items-center mb-4">
                  <Briefcase className="text-green-400 mr-3" size={24} />
                  <h4 className="text-xl font-semibold text-white">Experience Highlights</h4>
                </div>
                <div className="pl-9 space-y-2 text-gray-300">
                  <p>• 1 year of full-stack development experience</p>
                  <p>• Led technical initiatives at Compuwave Society</p>
                  <p>• Improved application performance by 45% at India Accelerator</p>
                  <p>• Built scalable SaaS platforms with modern architecture</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Download Section */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="p-6 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10"
            >
              <h4 className="text-xl font-semibold text-white mb-4">Download Resume</h4>
              <p className="text-gray-300 mb-6 text-sm">
                Get the complete PDF version of my resume with detailed project descriptions and achievements.
              </p>

              <div className="space-y-3">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button asChild className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white interactive">
                    <a href="/hemant_full_stack.pdf" download="Hemant_Kumar_Resume.pdf">
                      <Download size={20} className="mr-2" />
                      Download PDF
                    </a>
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    variant="outline"
                    asChild
                    className="w-full border-white/20 text-white hover:bg-white/10 interactive bg-transparent"
                  >
                    <a href="/hemant_full_stack.pdf" target="_blank" rel="noopener noreferrer">
                      <Eye size={20} className="mr-2" />
                      Preview Online
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <h4 className="text-xl font-semibold text-white mb-4">Quick Stats</h4>
              <div className="space-y-4">
                {[
                  { label: "Year of Experience", value: "1" },
                  { label: "Projects Completed", value: "5+" },
                  { label: "Technologies Mastered", value: "15+" },
                  { label: "Leadership Roles", value: "3" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="flex justify-between items-center"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <span className="text-gray-300 text-sm">{stat.label}</span>
                    <span className="text-white font-semibold">{stat.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
