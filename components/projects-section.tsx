"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "Job Cloud",
      description: "A dynamic full-stack job posting and listing platform with dual user roles",
      tech: ["React", "Node.js", "MongoDB", "JavaScript"],
      features: [
        "Job Posters can manage job listings and profiles",
        "Job Seekers can apply with PDF resumes",
        "Profile management for both user types",
        "Streamlined recruitment process",
      ],
      github: "https://github.com/hemant838/jobcloud.git",
      color: "from-blue-500 to-purple-500",
    },
    {
      id: 2,
      title: "Passkey",
      description: "A cutting-edge web-based password manager with secure local storage",
      tech: ["React", "Tailwind CSS", "ShadCN"],
      features: [
        "Secure local storage of passwords and URLs",
        "Intuitive interface for credential management",
        "Quick access to stored credentials",
        "Responsive design with modern UI",
      ],
      github: "https://github.com/hemant838/passKey.git",
      color: "from-green-500 to-teal-500",
    },
    {
      id: 3,
      title: "Resume Expert",
      description: "AI-powered resume builder that generates optimized and personalized resumes based on user input and job descriptions.",
      tech: ["React", "Node.js", "Docker", "PostgreSQL"],
      features: [
        "AI-generated resume suggestions",
        "Multi-tenant architecture for scalable user management",
        "Role-based access control for admins and users",
        "Smart formatting and keyword optimization for ATS compliance",
        "Real-time preview and PDF export",
        "Increased user engagement with dynamic recommendations",
      ],
      github: "https://github.com/hemant838/resumeXpert.git",
      color: "from-orange-500 to-red-500",
    },
    {
      id: 4,
      title: "Form Scratch",
      description: "AI-powered form builder that generates smart, dynamic forms based on user intent and input context.",
      tech: ["React", "Node.js", "Docker", "PostgreSQL"],
      features: [
        "AI-generated form structure from natural language prompts",
        "Drag-and-drop interface for manual customization",
        "Conditional logic and branching support",
        "Real-time validation and auto-suggestions",
        "Role-based access and submission management",
        "Export to PDF, CSV, or integrate via webhooks",
      ],
      github: "https://github.com/hemant838/formscratch.git",
      color: "from-green-500 to-blue-500",
    },
    {
      id: 5,
      title: "Global Price Comparison Tool",
      description: "AI-powered price comparison platform that scrapes and analyzes product prices across major e-commerce sites worldwide.",
      tech: ["Next.js", "Node.js", "Supabase", "Cheerio", "Docker"],
      features: [
        "Scrapes product data from Amazon, Flipkart, eBay, Shopee, Lazada, and Google Shopping",
        "AI-powered product matching across platforms",
        "Supports over 70 currencies and 195+ countries",
        "Real-time updates with background polling or webhooks",
        "Telegram/email alerts for price drops or restocks",
        "Responsive UI with global search and localization support"
      ],
      github: "https://github.com/hemant838/price-comparison-tool",
      liveUrl: "https://price-comparison-tool-lilac.vercel.app/", // Add your live URL here
      color: "from-yellow-500 to-red-500"
    },
    {
  id: 6,
  title: "Job Alert Bot",
  description: "A smart job alert system that scrapes listings based on user preferences and sends timely notifications via Telegram and Email.",
  tech: ["Node.js", "Puppeteer", "Cron"],
  features: [
    "Scrapes job listings from popular job boards and company websites",
    "Keyword and location-based filtering system",
    "Sends real-time alerts via Telegram and email",
    "Interactive Telegram bot to manage user preferences",
    "User data and alert history stored in MongoDB",
    "Runs scheduled scrapes with cron jobs and Dockerized deployment"
  ],
  github: "https://github.com/hemant838/daily-job-bot.git", // replace with actual link if different
  color: "from-pink-500 to-rose-500"
},
{
  id: 7,
  title: "GitHub Repo Tracker",
  description: "A full-stack tracker that monitors any public GitHub repository and sends real-time alerts for issues, pull requests, stars, and releases.",
  tech: ["Next.js", "Supabase", "GitHub API", "Resend", "Tailwind CSS", "Node.js", "Prisma"],
  features: [
    "Track any public GitHub repository",
    "Real-time notifications for new issues, PRs, stars, and releases",
    "Custom notification preferences per user",
    "Email alerts powered by Resend",
    "Background polling via cron jobs for reliability"
  ],
  github: "https://github.com/hemant838/github-repo-tracker.git",
  liveUrl: "https://github-repo-tracker-chi.vercel.app/", // update if your repo URL is different
  color: "from-blue-600 to-violet-600"
}





  ]

  return (
    <section id="projects" className="fade-in-section py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative group cursor-pointer interactive"
              initial={{ opacity: 0, y: 100, rotateX: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, rotateY: 5 }}
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden">
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs bg-white/10 rounded-full text-white">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={16} />
                    </motion.a>
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={16} />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-2xl w-full border border-white/20"
                initial={{ scale: 0.5, rotateY: 90 }}
                animate={{ scale: 1, rotateY: 0 }}
                exit={{ scale: 0.5, rotateY: -90 }}
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find((p) => p.id === selectedProject)!
                  return (
                    <>
                      <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                      <p className="text-gray-300 mb-6">{project.description}</p>

                      <h4 className="text-xl font-semibold text-white mb-3">Key Features:</h4>
                      <ul className="space-y-2 mb-6">
                        {project.features.map((feature, index) => (
                          <li key={index} className="text-gray-300 flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="flex space-x-4">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-6 py-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Github size={20} />
                          <span>View Code</span>
                        </motion.a>
                        {project.liveUrl && (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white hover:from-blue-600 hover:to-purple-600 transition-colors"
                            whileHover={{ scale: 1.05 }}
                          >
                            <ExternalLink size={20} />
                            <span>Live Demo</span>
                          </motion.a>
                        )}
                      </div>
                    </>
                  )
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
