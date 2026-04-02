"use client"

import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowUpRight,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  Phone,
  X,
} from "lucide-react"

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
]

const featuredProject = {
  title: "Global Price Comparison Tool",
  tags: ["Next.js", "Supabase", "Cheerio", "Docker"],
  description:
    "A global comparison platform that scrapes marketplaces, matches products intelligently, and alerts users to price drops across regions.",
  url: "https://price-comparison-tool-lilac.vercel.app/",
  impact: "Live on Vercel · Global search + product intelligence",
}

const projects = [
  {
    title: "GitHub Repo Tracker",
    tags: ["Next.js", "Prisma", "Supabase"],
    description: "Tracks public repos and sends updates for issues, PRs, stars, and releases.",
    url: "https://github-repo-tracker-chi.vercel.app/",
    impact: "Email alerts powered by Resend",
    colSpan: 2,
    rowSpan: 1,
  },
  {
    title: "Resume Expert",
    tags: ["React", "Node.js", "PostgreSQL"],
    description: "AI resume builder with role-aware suggestions, preview, export, and ATS-focused improvements.",
    url: "https://github.com/hemant838/resumeXpert.git",
    impact: "AI-assisted resume generation",
    colSpan: 2,
    rowSpan: 1,
  },
  {
    title: "Form Scratch",
    tags: ["React", "Node.js", "Docker"],
    description: "Generates dynamic forms from prompts, with branching, exports, and webhook support.",
    url: "https://github.com/hemant838/formscratch.git",
    impact: "Prompt-to-form workflow",
    colSpan: 3,
    rowSpan: 1,
  },
  {
    title: "Job Cloud",
    tags: ["React", "Node.js", "MongoDB"],
    description: "A dual-role job platform for posters and seekers with profile management and resume uploads.",
    url: "https://github.com/hemant838/jobcloud.git",
    impact: "Recruitment workflow platform",
    colSpan: 2,
    rowSpan: 1,
  },
  {
    title: "Job Alert Bot",
    tags: ["Node.js", "Puppeteer", "Cron"],
    description: "Scrapes listings and sends Telegram/email alerts based on role and location preferences.",
    url: "https://github.com/hemant838/daily-job-bot.git",
    impact: "Telegram + email automation",
    colSpan: 2,
    rowSpan: 1,
  },
  {
    title: "Passkey",
    tags: ["React", "Tailwind", "shadcn/ui"],
    description: "A lightweight password manager for local credential storage and fast retrieval.",
    url: "https://github.com/hemant838/passKey.git",
    impact: "Browser-first utility tool",
    colSpan: 1,
    rowSpan: 1,
  },
]

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Attack Capital",
    duration: "Jul 2025 - Present",
    location: "New York City, US · Remote",
    description:
      "Leading AI product development and full-stack platform work across Healos, with production delivery spanning AI Scribe, AI Voice Agent, email campaigning, multi-tenant architecture, and cloud infrastructure.",
    points: [
      "Led a 3-member team delivering 3 core products on Healos: AI Scribe, AI Voice Agent, and an Email Campaigning Platform using OpenAI GPT, Gemini API, and LangChain",
      "Built real-time speech-to-text pipelines with Whisper and Deepgram, plus RAG pipelines with pgvector for context-aware note retrieval and semantic search across medical knowledge bases",
      "Engineered multi-step prompt chains for accurate, structured clinical summaries and voice-driven workflows",
      "Designed a secure multi-tenant system with complete data isolation across clinics and clients, improving user engagement by 25%, reducing API response time by 25%, and decreasing UI bugs by 20%",
      "Improved high-load system performance by 40%, reduced script execution time by 45% through advanced PostgreSQL query optimization, and containerized the full stack with Docker",
      "Deployed and managed API servers on GCP using VMs and Container Apps with Nginx load routing, while implementing Grafana monitoring, logging, and database backup strategies",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "India Accelerator",
    duration: "Nov 2024 - Jul 2025",
    location: "Gurugram, India",
    description:
      "Built and maintained the internal management portal end-to-end, owning both frontend and backend across a fast-moving accelerator environment. Focused on performance, reliability, and shipping clean, scalable systems.",
    points: [
      "Boosted system performance by 40% under load by implementing optimized RESTful APIs, refactored database models, and improved request handling on a Node.js/Express backend",
      "Cut API response times by 25% through scalable backend architecture improvements and strategic query optimization",
      "Improved user management efficiency by 30% by streamlining core portal workflows and admin capabilities on the internal ops platform",
      "Delivered responsive React.js UI components that lifted user engagement by 35% and reduced UI-related bugs by 20%",
      "Automated 50% of manual internal workflows by collaborating with cross-functional teams to upgrade tooling and expand admin functionality, significantly reducing operational overhead",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "RT map Tech Solutions",
    duration: "Jun 2023 - Jul 2023",
    location: "Jaipur, India · Remote",
    description:
      "Built using the MERN stack, with a strong focus on Node.js, React, and modern ES6+ JavaScript features for clean, efficient development.",
    points: [
      "Delivered a responsive frontend, applied code refactoring, and implemented best practices and design patterns to ensure a robust and maintainable structure",
      "Drove a 15% increase in user adoption through improved usability and cleaner product flows",
      "Cut script execution time by 50% and improved user management efficiency by 30%, enhancing overall platform performance",
    ],
  },
]

const skillGroups = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "RESTful APIs", "FastAPI", "Redis", "Task Queues", "Kafka", "Prisma ORM"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "PostgreSQL", "pgvector", "Supabase"],
  },
  {
    title: "AI & LLM",
    items: ["OpenAI API (GPT)", "Gemini API", "LangChain", "Prompt Engineering"],
  },
  {
    title: "AI Infrastructure",
    items: ["Whisper", "Deepgram (STT)", "RAG Pipelines", "Vector Embeddings", "Semantic Search"],
  },
  {
    title: "Tools & Technologies",
    items: ["Git/GitHub", "Docker", "Linux", "VS Code", "Postman", "Figma", "Notion", "GCP"],
  },
]

function Navbar() {
  const [activeSection, setActiveSection] = useState("about")
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = (id: string) => {
    setActiveSection(id)
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed left-0 right-0 top-0 z-50 border-b-[3px] border-[#1A1A1A] bg-[#F5F0E8]"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="nav-link relative text-xl font-bold"
        >
          hemant.dev
          <span className="absolute bottom-0 left-0 h-[2.5px] w-0 bg-[#00B4D8] transition-all duration-200 group-hover:w-full" />
        </motion.button>

        <div className="hidden gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="nav-link relative text-sm uppercase tracking-wider"
            >
              {item.label}
              {activeSection === item.id ? (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 right-0 h-[3px] bg-[#00B4D8]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              ) : (
                <span className="absolute -bottom-1 left-0 h-[2.5px] w-0 bg-[#00B4D8] transition-all duration-200 hover:w-full" />
              )}
            </button>
          ))}
        </div>

        <button
          className="border-[2px] border-[#1A1A1A] p-2 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t-[3px] border-[#1A1A1A] bg-[#F5F0E8] md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`nav-link px-4 py-3 text-left text-sm uppercase tracking-wider ${
                    activeSection === item.id
                      ? "border-[2px] border-[#1A1A1A] bg-[#00B4D8] text-[#F5F0E8]"
                      : "hover:bg-[#00B4D8]/20"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

function Hero() {
  const chips = ["#FullStack", "#SaaS", "#Automation", "#OpenSource", "#NextJS"]

  return (
    <section className="relative min-h-[85vh] px-4 pb-[60px] pt-32 sm:px-6 lg:px-8">
      <span className="mono absolute right-4 top-4 text-[12px] text-[#888] sm:right-6 lg:right-8">01</span>

      <style>{`
        .heading-with-underline {
          position: relative;
          display: inline-block;
        }
        .heading-with-underline::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 0;
          height: 3px;
          background-color: #00B4D8;
          transition: width 0.3s ease;
        }
        .heading-with-underline:hover::after {
          width: 100%;
        }
        .tag-chip-container {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .tag-chip {
          position: absolute;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          white-space: nowrap;
        }
        .tag-chip:nth-child(1) { top: 8%; left: 55%; transform: translate(-50%, 0); }
        .tag-chip:nth-child(2) { top: 25%; left: 12%; transform: translate(-50%, 0); }
        .tag-chip:nth-child(3) { top: 45%; left: 62%; transform: translate(-50%, 0); }
        .tag-chip:nth-child(4) { top: 65%; left: 20%; transform: translate(-50%, 0); }
        .tag-chip:nth-child(5) { top: 80%; left: 52%; transform: translate(-50%, 0); }
        .tag-chip-container:hover .tag-chip {
          left: 50% !important;
          transform: translate(-50%, 0);
          width: 150px;
          text-align: center;
        }
        .tag-chip-container:hover .tag-chip:nth-child(1) { top: calc(50% - 80px) !important; }
        .tag-chip-container:hover .tag-chip:nth-child(2) { top: calc(50% - 40px) !important; }
        .tag-chip-container:hover .tag-chip:nth-child(3) { top: calc(50%) !important; }
        .tag-chip-container:hover .tag-chip:nth-child(4) { top: calc(50% + 40px) !important; }
        .tag-chip-container:hover .tag-chip:nth-child(5) { top: calc(50% + 80px) !important; }
      `}</style>

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <motion.div
            className="relative space-y-8 lg:col-span-3"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-2 pb-4">
              <motion.h1
                className="heading-with-underline text-5xl font-black leading-[1.1] sm:text-6xl lg:text-7xl"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              >
                Hi, I&apos;m Hemant
              </motion.h1>
            </div>

            <motion.p
              className="mono text-base font-bold sm:text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Full-stack builder. Product-minded engineer. Shipping useful things.
            </motion.p>

            <motion.p
              className="max-w-2xl text-xl sm:text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              I build AI-powered SaaS products, automation tools, and modern web apps with React, Next.js, Node.js,
              and PostgreSQL. Open to strong product teams and cool collabs.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <button className="neo-button" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
                View Projects
                <ArrowUpRight className="h-4 w-4" />
              </button>
              <a
                href="/Hemant_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-button-outline"
              >
                Download Resume
                <Download className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative lg:col-span-2"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="tag-chip-container relative h-[380px] lg:h-[500px]">
              {chips.map((chip, index) => (
                <motion.div
                  key={chip}
                  className="tag-chip absolute border-[2px] border-[#1A1A1A] bg-[#F5F0E8] px-4 py-2"
                  style={{ boxShadow: "3px 3px 0px #1A1A1A" }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -8, 0],
                    rotate: [-2, 2, -2],
                  }}
                  transition={{
                    opacity: { delay: 1 + index * 0.12, duration: 0.3 },
                    scale: { delay: 1 + index * 0.12, duration: 0.3 },
                    y: { duration: 3 + index * 0.35, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 4 + index * 0.35, repeat: Infinity, ease: "easeInOut" },
                  }}
                >
                  <span className="mono text-[12px] font-semibold">{chip}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-12 lg:grid-cols-2"
        >
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              className="mx-auto max-w-sm overflow-hidden border-[3px] border-[#1A1A1A] lg:mx-0"
              style={{ boxShadow: "8px 8px 0px #1A1A1A" }}
              whileHover={{ rotate: 2, boxShadow: "12px 12px 0px #1A1A1A" }}
            >
              <Image
                src="/hemant.jpeg"
                alt="Hemant Kumar"
                width={600}
                height={760}
                className="h-auto w-full object-cover"
              />
            </motion.div>
          </motion.div>

          <div className="relative">
            <div className="pointer-events-none absolute -left-4 -top-16 z-0 select-none text-[140px] font-black leading-none opacity-[0.06]">
              02
            </div>

            <motion.div
              className="relative z-10 space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="neo-section-title">About</h2>
              <p className="text-lg leading-relaxed">
                I&apos;m Hemant Kumar, a full stack developer focused on product engineering, SaaS workflows, and
                practical automation. I like building systems that feel fast, clear, and useful.
              </p>
              <p className="text-lg leading-relaxed">
                My recent work spans user management, billing, APIs, queue processing, dashboards, and AI-assisted
                products. Most of my projects start with a real workflow problem and end with something production-shaped.
              </p>
              <p className="text-lg leading-relaxed">
                Right now I&apos;m going deeper into scalable backend systems, strong frontend execution, and thoughtful
                product design. Always open to great teams and interesting builds.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="mt-8 flex flex-wrap gap-4 lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            {[
              { text: "Ships side projects that solve real problems", rotate: -2 },
              { text: "Open to SaaS and product engineering roles", rotate: 1 },
              { text: "Enjoys clean interfaces and clean APIs equally", rotate: -1.5 },
            ].map((chip, index) => (
              <motion.div
                key={chip.text}
                className="bg-[#00B4D8] px-[14px] py-2 text-[12px]"
                style={{
                  boxShadow: "3px 3px 0px #1A1A1A",
                  rotate: chip.rotate,
                  border: "2px solid #1A1A1A",
                  fontFamily: "var(--font-mono)",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                {chip.text}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mb-12"
        >
          <span className="pointer-events-none absolute -left-4 -top-8 z-0 select-none text-[140px] font-black leading-none opacity-[0.06]">
            03
          </span>
          <h2 className="neo-section-title relative z-10">Experience</h2>
          <p className="mono mt-2 text-[12px] opacity-50">Work that improved products, speed, and workflows.</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.company}
              className="neo-card p-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6, boxShadow: "8px 8px 0px #1A1A1A" }}
            >
              <p className="mono text-[10px] uppercase opacity-55">{experience.duration}</p>
              <h3 className="mt-2 text-lg font-black leading-tight">{experience.role}</h3>
              <p className="mt-1 font-semibold">{experience.company}</p>
              <p className="mono mt-1 text-[10px] uppercase opacity-55">{experience.location}</p>
              <p className="mt-4 text-sm leading-relaxed">{experience.description}</p>
              <div className="mt-5 space-y-2 border-t border-black/10 pt-4">
                {experience.points.map((point) => (
                  <p key={point} className="mono text-[11px] leading-6 opacity-80">
                    &gt; {point}
                  </p>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ViewBtn({ url }: { url: string }) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 border-[2px] border-[#1A1A1A] bg-transparent px-4 py-2 text-xs font-bold uppercase tracking-wider"
      style={{ boxShadow: "3px 3px 0px #1A1A1A", fontFamily: "var(--font-mono)" }}
      whileHover={{ y: -2, boxShadow: "5px 5px 0px #1A1A1A" }}
    >
      View Project
      <ExternalLink className="h-3 w-3" />
    </motion.a>
  )
}

function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mb-12"
        >
          <span className="pointer-events-none absolute -left-4 -top-8 z-0 select-none text-[140px] font-black leading-none opacity-[0.06]">
            04
          </span>
          <h2 className="neo-section-title relative z-10">Projects</h2>
          <p className="mono mt-2 text-[12px] opacity-50">Things I&apos;ve built and shipped.</p>
        </motion.div>

        <motion.div
          className="neo-card-strong mb-5 flex flex-col overflow-hidden sm:flex-row"
          style={{ minHeight: 180 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -6, boxShadow: "10px 10px 0px #1A1A1A" }}
        >
          <div
            className="flex w-full flex-col items-center justify-center py-8 sm:order-last sm:w-[40%] sm:py-0"
            style={{ background: "#00B4D8", borderBottom: "3px solid #1A1A1A" }}
          >
            <span className="mono text-[28px] font-bold text-[#1A1A1A]">Global + AI</span>
            <span className="mono mt-1 text-[10px] text-[#1A1A1A] opacity-70">Search, scraping, alerts</span>
          </div>

          <div className="flex flex-1 flex-col justify-between p-6 sm:border-r-[3px] sm:border-[#1A1A1A]">
            <div>
              <p className="mono mb-2 text-[9px] uppercase tracking-[0.15em] opacity-50">Featured Project</p>
              <h3 className="mb-3 text-[20px] font-bold leading-tight">{featuredProject.title}</h3>
              <div className="mb-3 flex flex-wrap gap-2">
                {featuredProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="mono border-[2px] border-[#1A1A1A] bg-[#00B4D8] px-2 py-[2px] text-[10px] font-bold uppercase text-[#1A1A1A]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm leading-relaxed">{featuredProject.description}</p>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="mono text-[10px] opacity-55">{featuredProject.impact}</p>
              <ViewBtn url={featuredProject.url} />
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="neo-card flex flex-col overflow-hidden p-4"
              style={{
                gridColumn: `span ${project.colSpan}`,
                gridRow: `span ${project.rowSpan}`,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6, boxShadow: "8px 8px 0px #1A1A1A" }}
            >
              <div className="mb-3 flex flex-wrap gap-1">
                {project.tags.map((tag) => (
                  <span key={tag} className="neo-chip text-[10px]">
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="mb-2 text-base font-black leading-tight sm:text-lg">{project.title}</h3>
              <p className="mb-4 text-sm leading-relaxed">{project.description}</p>
              <p className="mono mb-4 text-[10px] opacity-55">{project.impact}</p>
              <ViewBtn url={project.url} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillsResume() {
  return (
    <section id="skills" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mb-12"
        >
          <span className="pointer-events-none absolute -left-4 -top-8 z-0 select-none text-[140px] font-black leading-none opacity-[0.06]">
            05
          </span>
          <h2 className="neo-section-title relative z-10">Skills</h2>
          <p className="mono mt-2 text-[12px] opacity-50">Frontend, backend, data, tooling.</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            className="neo-card-strong p-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid gap-4 md:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.title} className="border-[2px] border-[#1A1A1A] p-4">
                  <p className="mono mb-3 text-[10px] uppercase opacity-60">{group.title}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="neo-chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="neo-card p-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="mono text-[10px] uppercase opacity-55">Resume</p>
            <h3 className="mt-2 text-2xl font-black">Hemant Kumar</h3>
            <p className="mt-2 text-sm leading-relaxed">
              Full stack developer with experience across SaaS products, automation, APIs, dashboards, and modern web
              applications.
            </p>

            <div className="mt-5 space-y-2">
              <p className="mono text-[11px]">&gt; BTech in Computer Science</p>
              <p className="mono text-[11px]">&gt; Shaheed Bhagat Singh State University</p>
              <p className="mono text-[11px]">&gt; Sep 2021 - May 2025</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <a href="/Hemant_Resume.pdf" download="Hemant_Resume.pdf" className="neo-button">
                Download
                <Download className="h-4 w-4" />
              </a>
              <a href="/Hemant_Resume.pdf" target="_blank" rel="noopener noreferrer" className="neo-button-outline">
                Preview
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-[#1A1A1A] px-4 py-20 text-[#F5F0E8] sm:px-6 lg:px-8">
      <style>{`
        .tooltip-label {
          position: absolute;
          top: -40px;
          left: 50%;
          transform: translateX(-50%) translateY(8px);
          font-family: var(--font-display), sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #F0E040;
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .social-icon-wrapper:hover .tooltip-label {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }
        .icon-scale {
          transition: transform 0.2s ease;
        }
        .social-icon-wrapper:hover .icon-scale {
          transform: scale(1.15);
        }
      `}</style>

      <div className="mx-auto max-w-7xl">
        <motion.div
          className="space-y-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-5xl font-black sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Let&apos;s build something.
          </motion.h2>

          <motion.p
            className="mx-auto max-w-2xl text-xl sm:text-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Open for product roles, freelance builds, and good engineering conversations. Let&apos;s talk.
          </motion.p>

          <motion.a
            href="mailto:kumarhemant9971@gmail.com"
            className="inline-block border-[3px] border-[#00B4D8] bg-[#00B4D8] px-8 py-4 font-bold uppercase tracking-wider text-[#F5F0E8]"
            style={{ boxShadow: "5px 5px 0px #00B4D8", fontFamily: "var(--font-mono)" }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
            whileHover={{ y: -2, boxShadow: "8px 8px 0px #00B4D8" }}
          >
            <Mail className="mr-2 inline h-5 w-5" />
            kumarhemant9971@gmail.com
          </motion.a>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            {[
              {
                label: "See my code!",
                href: "https://github.com/hemant838",
                text: "GitHub",
                icon: Github,
              },
              {
                label: "Let's connect!",
                href: "https://www.linkedin.com/in/hemant-kumar-0632822aa",
                text: "LinkedIn",
                icon: Linkedin,
              },
              {
                label: "Say hello!",
                href: "mailto:kumarhemant9971@gmail.com",
                text: "Email",
                icon: Mail,
              },
              {
                label: "Call me maybe!",
                href: "tel:+919971216787",
                text: "Phone",
                icon: Phone,
              },
            ].map((item) => {
              const Icon = item.icon

              return (
                <motion.div key={item.text} className="social-icon-wrapper relative" whileHover={{ y: -2 }}>
                  <span className="tooltip-label">{item.label}</span>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-2 border-[3px] border-[#F5F0E8] px-6 py-3 text-sm uppercase transition-colors hover:border-[#00B4D8] hover:bg-[#00B4D8] hover:text-[#1A1A1A]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    <Icon className="icon-scale h-5 w-5" />
                    {item.text}
                  </a>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div
            className="mt-16 border-t-[3px] border-[#F5F0E8]/20 pt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
          >
            
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#F5F0E8] text-[#1A1A1A]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <SkillsResume />
        <Contact />
      </main>
    </div>
  )
}
