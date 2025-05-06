import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedBackground } from "@/components/animated-background"
import { ProjectCard } from "@/components/project-card"
import { ExperienceCard } from "@/components/experience-card"

import Mee from '../../public/mee-removebg-preview.png'

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#010923] via-[#0F0E3D] to-[#252078]">
      <AnimatedBackground />

      <div className="container relative z-10 mx-auto px-4 py-2">
        {/* Header */}
        <header className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-white/20">
              <Image
                src={Mee}
                alt="Shahid Adnan Wali"
                fill
                className="object-cover"
              />
            </div>
            <h1 className="text-2xl font-bold text-white">Shahid Adnan Wali</h1>
          </div>
          <nav className="flex gap-4">
            <Link href="#about" className="text-white/80 transition-colors hover:text-white">
              About
            </Link>
            <Link href="#experience" className="text-white/80 transition-colors hover:text-white">
              Experience
            </Link>
            <Link href="#projects" className="text-white/80 transition-colors hover:text-white">
              Projects
            </Link>
            <Link href="#contact" className="text-white/80 transition-colors hover:text-white">
              Contact
            </Link>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="my-16 flex flex-col items-center gap-8 md:flex-row md:gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Front-End Developer <span className="text-[#374660]">with 4+ years</span> of experience
            </h2>
            <p className="text-lg text-white/80">
              Specializing in building modern, responsive, and user-friendly web applications and websites.
            </p>
            <div className="flex gap-4">
              <Button className="bg-[#374660] hover:bg-[#252078]">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Contact Me
              </Button>
            </div>
          </div>
          <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-[#374660] md:h-80 md:w-80">
            <Image src="/placeholder.svg?height=400&width=400" alt="Shahid Adnan Wali" fill className="object-cover" />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="my-20 scroll-mt-20">
          <h2 className="mb-8 text-3xl font-bold text-white">About Me</h2>
          <div className="rounded-lg bg-white/5 p-6 backdrop-blur-sm">
            <p className="mb-4 text-lg text-white/90">
              I am Shahid Adnan Wali, a passionate front-end developer with over 4 years of experience in building web
              applications and websites. I have worked with various companies, from small startups to large enterprises,
              developing everything from simple landing pages to complex web applications.
            </p>
            <p className="mb-4 text-lg text-white/90">
              My experience spans across multiple industries, including healthcare, government, and enterprise
              solutions. I&apos;ve been part of teams creating medical company websites, government dashboards, incident
              measurement systems, lab information systems, and many more.
            </p>
            <p className="text-lg text-white/90">
              I stay up-to-date with the latest front-end technologies and best practices to deliver high-quality,
              performant, and accessible web experiences.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="my-20 scroll-mt-20">
          <h2 className="mb-8 text-3xl font-bold text-white">Experience</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <ExperienceCard
              title="Senior Front-End Developer"
              company="Medical Solutions Inc."
              period="2021 - Present"
              description="Developed and maintained healthcare web applications and dashboards. Implemented responsive designs and optimized performance."
            />
            <ExperienceCard
              title="Front-End Developer"
              company="Government Tech Solutions"
              period="2019 - 2021"
              description="Built government dashboards and incident measurement systems. Worked with large datasets and created interactive visualizations."
            />
            <ExperienceCard
              title="Web Developer"
              company="Digital Agency"
              period="2018 - 2019"
              description="Created landing pages and marketing websites for various clients. Focused on responsive design and cross-browser compatibility."
            />
            <ExperienceCard
              title="Junior Developer"
              company="Tech Startup"
              period="2017 - 2018"
              description="Assisted in developing web applications and implementing UI designs. Learned modern front-end technologies and best practices."
            />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="my-20 scroll-mt-20">
          <h2 className="mb-8 text-3xl font-bold text-white">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="Medical Dashboard"
              description="A comprehensive dashboard for healthcare professionals to monitor patient data and medical records."
              technologies={["React", "TypeScript", "Tailwind CSS"]}
              image="/placeholder.svg?height=300&width=500"
            />
            <ProjectCard
              title="Government Portal"
              description="A secure portal for government officials to manage and analyze incident reports and data."
              technologies={["Next.js", "Redux", "Material UI"]}
              image="/placeholder.svg?height=300&width=500"
            />
            <ProjectCard
              title="Lab Information System"
              description="A system for managing laboratory tests, results, and patient information."
              technologies={["Vue.js", "Node.js", "MongoDB"]}
              image="/placeholder.svg?height=300&width=500"
            />
            <ProjectCard
              title="E-commerce Website"
              description="A fully responsive e-commerce website with product catalog, cart, and checkout functionality."
              technologies={["React", "Next.js", "Stripe"]}
              image="/placeholder.svg?height=300&width=500"
            />
            <ProjectCard
              title="Corporate Landing Page"
              description="A modern landing page for a corporate client with animations and interactive elements."
              technologies={["HTML", "CSS", "JavaScript", "GSAP"]}
              image="/placeholder.svg?height=300&width=500"
            />
            <ProjectCard
              title="Analytics Dashboard"
              description="A real-time analytics dashboard for monitoring website traffic and user behavior."
              technologies={["React", "D3.js", "Firebase"]}
              image="/placeholder.svg?height=300&width=500"
            />
          </div>
        </section>

        {/* Skills Section */}
        <section className="my-20">
          <h2 className="mb-8 text-3xl font-bold text-white">Skills</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-white/5 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-semibold text-white">Front-End</h3>
                <ul className="space-y-2 text-white/80">
                  <li>HTML5, CSS3, JavaScript (ES6+)</li>
                  <li>React.js, Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS, SASS</li>
                  <li>Responsive Design</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white/5 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-semibold text-white">UI/UX</h3>
                <ul className="space-y-2 text-white/80">
                  <li>Figma, Adobe XD</li>
                  <li>UI Component Libraries</li>
                  <li>Animations & Transitions</li>
                  <li>Accessibility (WCAG)</li>
                  <li>User Experience Design</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white/5 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-semibold text-white">Tools & Frameworks</h3>
                <ul className="space-y-2 text-white/80">
                  <li>Git, GitHub</li>
                  <li>Webpack, Vite</li>
                  <li>Jest, React Testing Library</li>
                  <li>Redux, Context API</li>
                  <li>GraphQL, REST APIs</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white/5 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-semibold text-white">Other</h3>
                <ul className="space-y-2 text-white/80">
                  <li>Performance Optimization</li>
                  <li>Cross-Browser Compatibility</li>
                  <li>SEO Best Practices</li>
                  <li>CI/CD Pipelines</li>
                  <li>Agile Methodologies</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="my-20 scroll-mt-20">
          <h2 className="mb-8 text-3xl font-bold text-white">Contact Me</h2>
          <div className="rounded-lg bg-white/5 p-6 backdrop-blur-sm">
            <p className="mb-6 text-lg text-white/90">I&apos;m always open to new opportunities and collaborations. Feel free to reach out to me through any of the
              following channels:
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Mail className="mr-2 h-4 w-4" /> Email Me
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-[#010923]/50 py-6 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center text-white/60">
          <p>© {new Date().getFullYear()} Shahid Adnan Wali. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
