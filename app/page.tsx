"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Download,
  ExternalLink,
  ChevronRight,
  Database,
  BarChart,
  LineChart,
  BrainCircuit,
  Code,
  CheckCircle2,
  Users,
  Globe,
  Sparkles,
  Award,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { useInView } from "react-intersection-observer"
import ParticleBackground from "@/components/particle-background"
import CountUp from "@/components/count-up"
import ProjectCard from "@/components/project-card"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [scrollY, setScrollY] = useState(0)

  // For animated counters
  const [yearsRef, yearsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [datasetsRef, datasetsInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  // For section animations
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [educationRef, educationInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [skillsRef, skillsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [experienceRef, experienceInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [organizationsRef, organizationsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [projectsSectionRef, projectsSectionInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [whyHireRef, whyHireInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [certificationsRef, certificationsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  // For scroll progress
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Projects data
  const projects = [
    {
      title: "NYC Taxi Trip Insights",
      description:
        "Analyzed taxi trip records from NYC (2012-2023) using PySpark/Pandas and MLlib/sklearn in Google Colab. Identified demand hotspots, predicted trip duration, fare, and tip amounts, and segmented passenger behavior based on key trip features.",
      date: "Nov 2024 - Dec 2024",
      tags: ["PySpark", "Machine Learning", "Data Analysis", "Google Colab"],
      github: "https://github.com/JAGAN666/NYISO-Electricity-Consumption-and-Pricing-Insights",
      image:
        "img6.webp",
    },
    {
      title: "NYISO Electricity Consumption and Pricing Insights",
      description:
        "Analyzed electricity consumption and pricing data from the New York Independent System Operator (NYISO) to provide insights into energy usage patterns and price fluctuations.",
      date: "Oct 2024 - Nov 2024",
      tags: ["Data Analysis", "Energy", "Time Series", "Visualization"],
      github: "https://github.com/JAGAN666/NYISO-Electricity-Consumption-and-Pricing-Insights",
      image: "img1.webp",
    },
    {
      title: "Loan Performance Data Insights",
      description:
        "Analyzed Fannie Mae's Single-Family Loan Performance Data, tracking mortgage loan performance, delinquency trends, and risk factors in the U.S. housing market from 2000 to 2023 using PySpark.",
      date: "Sep 2024 - Oct 2024",
      tags: ["PySpark", "Financial Analysis", "Risk Assessment", "Google Colab"],
      github: "https://github.com/JAGAN666/Loan-Performance-Data-Insights",
      image: "img2.webp",
    },
    {
      title: "Customer Segmentation System",
      description:
        "Developed a customer segmentation system using clustering algorithms to identify distinct customer groups based on purchasing behavior, demographics, and engagement metrics.",
      date: "Aug 2024 - Sep 2024",
      tags: ["Clustering", "Customer Analytics", "Python", "Machine Learning"],
      github: "https://github.com/JAGAN666/Customer-Segmentation-system",
      image: "img3.webp",
    },
    {
      title: "Flight Delay Prediction Model",
      description:
        "Built a machine learning model to predict flight delays based on historical flight data, weather conditions, and airport congestion metrics to help travelers and airlines plan more effectively.",
      date: "Jul 2024 - Aug 2024",
      tags: ["Predictive Modeling", "Time Series", "Python", "Transportation"],
      github: "https://github.com/JAGAN666/Flight-Delay-Prediction-Model",
      image: "img4.webp",
    },
    {
      title: "T20 World Cup Cricket Data Analytics",
      description:
        "Designed a comprehensive analytics solution to rank players, extracting data using web scraping techniques. Analyzed player performance metrics using Python, uncovering actionable insights that enhanced evaluation accuracy by 30%.",
      date: "Oct 2024 - Nov 2024",
      tags: ["Web Scraping", "Sports Analytics", "Python", "Data Visualization"],
      github: "#",
      image: "img5.webp",
    },
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  // Calculate scroll progress
  const scrollProgress =
    typeof document !== "undefined" ? Math.min(scrollY / (document.body.scrollHeight - window.innerHeight), 1) : 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#f0f9ff] to-[#eff6ff]">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 z-50"
        style={{ width: `${scrollProgress * 100}%`, transition: "width 0.1s" }}
      />

      {/* Floating Elements */}

      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                Jagannath
              </span>{" "}
              Narayanaswamy
            </Link>
          </motion.div>
          <nav className="hidden md:flex gap-6">
            {["about", "skills", "experience", "organizations", "projects", "why-hire-me"].map((section, index) => (
              <motion.div
                key={section}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={`#${section}`}
                  className={`text-gray-600 hover:text-blue-600 transition-colors relative group`}
                  onClick={() => setActiveSection(section)}
                >
                  {section
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                  {activeSection === section && (
                    <motion.span
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500"
                      layoutId="activeSection"
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>
          <div className="flex gap-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Button
                asChild
                variant="outline"
                className="hidden sm:flex border-blue-300 hover:border-blue-500 hover:bg-blue-50"
              >
                <Link href="/jagannath_resume.pdf" download>
                  <Download className="mr-2 h-4 w-4 text-blue-500" />
                  Resume
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Button
                asChild
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
              >
                <Link href="#contact">Contact Me</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </header>

      <main className="container py-8 space-y-24">
        {/* Hero Section with Particles */}
        <section className="relative py-20 flex flex-col items-center text-center space-y-8">
          <ParticleBackground />

          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 1,
            }}
            className="h-40 w-40 rounded-full overflow-hidden border-4 border-white shadow-xl z-10 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-300/30 to-purple-300/30 z-10" />
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-06%20at%209.39.34%E2%80%AFPM-Cv3r6uW13XhqPn4Tjh13ov2tSjCPkF.png"
              alt="Jagannath Narayanaswamy"
              className="object-cover h-full w-full"
            />
            <motion.div
              className="absolute inset-0 border-4 border-transparent rounded-full"
              animate={{
                borderColor: ["rgba(59, 130, 246, 0.5)", "rgba(147, 51, 234, 0.5)", "rgba(59, 130, 246, 0.5)"],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>

          <div className="space-y-6 max-w-3xl z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold sm:text-5xl md:text-6xl"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                Jagannath
              </span>{" "}
              Narayanaswamy
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="h-8 sm:h-10"
            >
              <TypeAnimation
                sequence={["Data Scientist", 2000, "Machine Learning Engineer", 2000, "Analytics Specialist", 2000]}
                wrapper="h2"
                speed={50}
                className="text-xl sm:text-2xl font-medium text-gray-600"
                repeat={Number.POSITIVE_INFINITY}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Transforming complex data into actionable insights and building predictive models that drive strategic
              decision-making.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="flex items-center gap-4 z-10"
          >
            {[
              { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com/", label: "LinkedIn" },
              { icon: <Github className="h-5 w-5" />, href: "https://github.com/JAGAN666", label: "GitHub" },
              { icon: <Mail className="h-5 w-5" />, href: "mailto:jagannathn@gwmail.gwu.edu", label: "Email" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-white/80 hover:bg-white border-blue-200 hover:border-blue-400"
                >
                  <Link href={item.href} target="_blank" aria-label={item.label}>
                    {item.icon}
                  </Link>
                </Button>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="flex items-center gap-2 text-gray-600 z-10 bg-white/50 px-4 py-2 rounded-full shadow-sm"
          >
            <MapPin className="h-4 w-4 text-blue-500" />
            <span>Washington, DC</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            className="absolute bottom-0 left-0 right-0 flex justify-center"
          >
            <Link href="#about" className="animate-bounce p-2 bg-white/50 rounded-full shadow-md group">
              <ChevronRight className="h-8 w-8 rotate-90 text-blue-500 group-hover:text-purple-500 transition-colors" />
            </Link>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="py-10">
          <div className="flex justify-center">
            <motion.div
              ref={yearsRef}
              initial={{ opacity: 0, y: 50 }}
              animate={yearsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-white rounded-xl p-6 text-center shadow-md border border-blue-100 hover:border-blue-300 transition-all w-full max-w-xs"
            >
              <div className="flex justify-center mb-4">
                <LineChart className="h-8 w-8 text-blue-500" />
              </div>
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 mb-2">
                {yearsInView && <CountUp end={2} duration={2} />}+
              </div>
              <div className="text-gray-600">Years of Experience</div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <motion.section
          ref={aboutRef}
          initial={{ opacity: 0, y: 50 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          id="about"
          className="scroll-mt-20"
        >
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={aboutInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold inline-block relative">
                  About Me
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                </h2>
              </motion.div>
            </div>
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-md border border-blue-100">
              <motion.div
                initial={{ opacity: 0 }}
                animate={aboutInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="prose prose-lg max-w-none text-gray-700"
              >
                <p>
                  I have a genuine passion for transforming complex datasets into compelling narratives that drive
                  strategic decisions. My journey began at George Washington University, where I'm building a strong
                  foundation in data analytics, complemented by my background in computer science from Dayananda Sagar
                  University.
                </p>

                <p className="mt-4">
                  Throughout my career, I've had the privilege of working on projects that make meaningful impact. One
                  of my proudest achievements was at the Department of Global Health at GWU, where I developed a dynamic
                  state and county-level database that streamlined data retrieval, reducing workload by 30%. I've also
                  leveraged machine learning techniques to automate classification and anomaly detection, boosting
                  processing efficiency by 25%.
                </p>

                <p className="mt-4">
                  As an active member of Google Developer Student Club (GDSC) and Data Science for Sustainable
                  Development (DSSD), I'm committed to applying my data science skills to solve real-world problems. My
                  experience working with large datasets across transportation, finance, and energy sectors has taught
                  me the importance of contextual analysis and feature engineering—skills that have shaped my approach
                  to problem-solving in data science.
                </p>

                <p className="mt-4">
                  Beyond technical skills, I believe in the power of visualization to communicate insights effectively.
                  I've created interactive dashboards that transform complex data into actionable intelligence,
                  influencing strategic decision-making for stakeholders. Whether it's optimizing customer segmentation
                  algorithms or forecasting trends with time series analysis, I find deep satisfaction in seeing how
                  data-driven approaches can lead to tangible business outcomes.
                </p>

                <p className="mt-4">
                  I'm passionate about sustainable development initiatives and continuously seek opportunities to apply
                  data science for positive social impact. If you're interested in exploring innovative ways to leverage
                  data or want to collaborate on exciting projects, I'd love to connect!
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          ref={educationRef}
          initial={{ opacity: 0, y: 50 }}
          animate={educationInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          id="education"
          className="scroll-mt-20"
        >
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={educationInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold inline-block relative">
                  Education
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                </h2>
              </motion.div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={educationInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="transition-all duration-300"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl bg-gradient-to-br from-white to-blue-50">
                  <CardHeader className="pb-2 border-b border-blue-100">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl text-blue-700">Master of Science in Data Analytics</CardTitle>
                        <CardDescription className="text-gray-600">George Washington University</CardDescription>
                      </div>
                      <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        2024-2026
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Washington, DC</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Sparkles className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-800">Coursework:</p>
                          <p className="text-gray-600">
                            Data Analysis for Engineers and Scientists, Introduction to Big Data and Analytics,
                            Programming for Analytics
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Award className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-800">Honors/Awards:</p>
                          <p className="text-gray-600">SEAS Dean's Award</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Users className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-800">Activities:</p>
                          <p className="text-gray-600">Member of Google Developer Student Club (GDSC)</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={educationInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="transition-all duration-300"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl bg-gradient-to-br from-white to-purple-50">
                  <CardHeader className="pb-2 border-b border-purple-100">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl text-purple-700">
                          Bachelor of Technology in Computer Science
                        </CardTitle>
                        <CardDescription className="text-gray-600">Dayananda Sagar University</CardDescription>
                      </div>
                      <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                        2020-2024
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Bengaluru, India</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Sparkles className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-800">Coursework:</p>
                          <p className="text-gray-600">
                            Database Management System DBMS, Data Science, Machine Learning, Cloud Computing, Amazon Web
                            Services, Object Oriented Programming, Probability and Statistics
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          ref={skillsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={skillsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          id="skills"
          className="scroll-mt-20"
        >
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={skillsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold inline-block relative">
                  Technical Skills
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                </h2>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-xl shadow-md border border-blue-100 overflow-hidden"
              >
                <div className="p-6 border-b border-blue-100 flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Code className="h-6 w-6 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Programming & Languages</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <span className="font-medium text-gray-700">Python</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium text-gray-700">R</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium text-gray-700">SQL</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <span className="font-medium text-gray-700">TensorFlow</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium text-gray-700">HTML/CSS</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium text-gray-700">PySpark</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-xl shadow-md border border-purple-100 overflow-hidden"
              >
                <div className="p-6 border-b border-purple-100 flex items-center gap-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <BrainCircuit className="h-6 w-6 text-purple-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Machine Learning & AI</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <span className="font-medium text-gray-700">Predictive Modeling</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium text-gray-700">Time Series</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium text-gray-700">CNNs</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <span className="font-medium text-gray-700">RNNs</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium text-gray-700">Reinforcement Learning</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium text-gray-700">Unsupervised Learning</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white rounded-xl shadow-md border border-pink-100 overflow-hidden"
              >
                <div className="p-6 border-b border-pink-100 flex items-center gap-4">
                  <div className="bg-pink-100 p-3 rounded-full">
                    <BarChart className="h-6 w-6 text-pink-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Data Visualization</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <span className="font-medium text-gray-700">Tableau</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium text-gray-700">Power BI</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <span className="font-medium text-gray-700">Microsoft Excel</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium text-gray-700">Google Sheets</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white rounded-xl shadow-md border border-green-100 overflow-hidden"
              >
                <div className="p-6 border-b border-green-100 flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Database className="h-6 w-6 text-green-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Database & Cloud</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <span className="font-medium text-gray-700">MySQL</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium text-gray-700">MongoDB</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <span className="font-medium text-gray-700">AWS</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium text-gray-700">PostgreSQL</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={skillsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white rounded-xl shadow-md border border-blue-100 p-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">Additional Skills & Tools</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  "Git & Version Control",
                  "Scikit-learn",
                  "Pandas",
                  "NumPy",
                  "Keras",
                  "Flask",
                  "Docker",
                  "Agile Methodology",
                  "Feature Engineering",
                  "Statistical Analysis",
                  "A/B Testing",
                  "ETL Processes",
                  "Big Data",
                ].map((skill, index) => (
                  <Badge
                    key={index}
                    className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border border-blue-200 py-1.5 px-3 text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          ref={experienceRef}
          initial={{ opacity: 0, y: 50 }}
          animate={experienceInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          id="experience"
          className="scroll-mt-20"
        >
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={experienceInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold inline-block relative">
                  Experience
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                </h2>
              </motion.div>
            </div>
            <div className="space-y-6">
              {[
                {
                  title: "Research Specialist III",
                  company: "Department of Global Health, George Washington University",
                  date: "Jan 2025 - Present",
                  color: "blue",
                  points: [
                    "Collaborated with the US Census Bureau and integrated additional data sources (including FRED) to retrieve comprehensive datasets.",
                    "Developed and maintained a dynamic state and county-level database that enabled streamlined data retrieval, reducing manual workload by 30%.",
                    "Leveraged advanced machine learning techniques and data analytics to automate classification, anomaly detection, and data cleansing, boosting processing efficiency by 25%.",
                    "Created interactive visualizations that transformed complex data into actionable insights, supporting strategic decision-making and optimizing overall workflows.",
                  ],
                },
                {
                  title: "Data Science Intern",
                  company: "Slash Mark IT Solution",
                  date: "May 2024 - Aug 2024",
                  color: "purple",
                  points: [
                    "Developed and deployed machine learning models, increasing operational efficiency by 30% and strategic outcomes by 25%.",
                    "Conducted advanced data preprocessing, feature engineering, and model training using Python, Pandas, and Scikit-learn, improving model accuracy by 20%.",
                    "Executed comprehensive data cleaning, transformation, and statistical analysis, increasing data accuracy by 95%.",
                    "Delivered actionable insights to stakeholders through reports and visualizations, influencing strategic decision-making by 25%.",
                  ],
                },
                {
                  title: "Data Science Intern",
                  company: "Bhrighu Academy",
                  date: "Feb 2024 - May 2024",
                  color: "pink",
                  points: [
                    "Built predictive models for car fuel efficiency, improving accuracy by 20%. Led web traffic forecasting with time series analysis, achieving 95% prediction accuracy.",
                    "Adjusted forecasting models, increasing reliability by 15% and operational efficiency by 20%.",
                    "Visualized data using Tableau and managed datasets with MySQL for seamless analysis.",
                  ],
                },
              ].map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={experienceInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ y: -5, scale: 1.01 }}
                  className="transition-all duration-300"
                >
                  <Card
                    className={`hover:shadow-xl transition-shadow border-0 shadow-md bg-gradient-to-br from-white to-${job.color}-50`}
                  >
                    <CardHeader className={`pb-2 border-b border-${job.color}-100`}>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className={`text-xl text-${job.color}-700`}>{job.title}</CardTitle>
                          <CardDescription className="text-gray-600">{job.company}</CardDescription>
                        </div>
                        <Badge className={`bg-${job.color}-100 text-${job.color}-700 hover:bg-${job.color}-200`}>
                          {job.date}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <ul className="space-y-2">
                        {job.points.map((point, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={experienceInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.3, delay: 0.3 + index * 0.1 + i * 0.1 }}
                            className="flex items-start gap-2"
                          >
                            <CheckCircle2 className={`h-5 w-5 text-${job.color}-500 mt-0.5 flex-shrink-0`} />
                            <span className="text-gray-700">{point}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Organizations Section */}
        <motion.section
          ref={organizationsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={organizationsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          id="organizations"
          className="scroll-mt-20"
        >
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={organizationsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold inline-block relative">
                  Organizations
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                </h2>
              </motion.div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Active involvement in professional organizations that enhance my skills and contribute to the community.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={organizationsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="transition-all duration-300"
              >
                <Card className="h-full hover:shadow-xl transition-shadow border-0 shadow-md bg-gradient-to-br from-white to-blue-50 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/30 rounded-full -mr-16 -mt-16 z-0"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-200/30 rounded-full -ml-12 -mb-12 z-0"></div>
                  <CardHeader className="pb-2 relative z-10">
                    <div className="flex items-center gap-4">
                      <div className="bg-white p-2 rounded-lg shadow-sm">
                        <img
                          src="https://res.cloudinary.com/startup-grind/image/fetch/c_scale,w_2560/c_crop,h_650,w_2560,y_0.0_mul_h_sub_0.0_mul_650/c_crop,h_650,w_2560/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/https://res.cloudinary.com/startup-grind/image/upload/c_fill%2Cdpr_2.0%2Cf_auto%2Cg_center%2Cq_auto:good/v1/gcs/platform-data-goog/chapter_banners/GDSC23%2520LinkedIn%2520Banner%2520-%2520Blue-1_wKrmSSu.png"
                          alt="Google Developer Student Club"
                          className="h-12 w-12 object-cover"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-blue-700">Google Developer Student Club</CardTitle>
                        <CardDescription className="text-gray-600">George Washington University</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-gray-600 mb-4">
                      The Google Developer Student Club (GDSC) at George Washington University is open to all students
                      interested in learning about what it means to be a developer. We bridge the gap between theory and
                      practice with industry developer tools.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {["Google Technologies", "Machine Learning", "Cloud Computing", "App Development"].map(
                        (tag, i) => (
                          <Badge key={i} variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                            {tag}
                          </Badge>
                        ),
                      )}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-1 text-blue-500" />
                      <span>203 Group Members</span>
                    </div>
                  </CardContent>
                  <CardFooter className="relative z-10">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="w-full border-blue-200 hover:border-blue-400 hover:bg-blue-50"
                    >
                      <Link href="https://gdsc.community.dev/" target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4 text-blue-500" />
                        Visit GDSC Website
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={organizationsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="transition-all duration-300"
              >
                <Card className="h-full hover:shadow-xl transition-shadow border-0 shadow-md bg-gradient-to-br from-white to-green-50 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-200/30 rounded-full -mr-16 -mt-16 z-0"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-200/30 rounded-full -ml-12 -mb-12 z-0"></div>
                  <CardHeader className="pb-2 relative z-10">
                    <div className="flex items-center gap-4">
                      <div className="bg-white p-2 rounded-lg shadow-sm">
                        <img
                          src="/placeholder.svg?height=60&width=60"
                          alt="Data Science for Sustainable Development"
                          className="h-12 w-12"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-green-700">
                          Data Science for Sustainable Development
                        </CardTitle>
                        <CardDescription className="text-gray-600">DSSD</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-gray-600 mb-4">
                      DSSD is committed to bridging the technical gap for nonprofit and humanitarian organizations. We
                      use data science and GIS to accelerate and drive sustainable development, showing organizations
                      the power of data science through analysis and visualizations.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {["Sustainable Development", "Data Visualization", "GIS", "Humanitarian Tech"].map((tag, i) => (
                        <Badge key={i} variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-200">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Globe className="h-4 w-4 mr-1 text-green-500" />
                      <span>Global Impact Initiative</span>
                    </div>
                  </CardContent>
                  <CardFooter className="relative z-10">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="w-full border-green-200 hover:border-green-400 hover:bg-green-50"
                    >
                      <Link href="#" target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4 text-green-500" />
                        Visit DSSD Website
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          ref={projectsSectionRef}
          initial={{ opacity: 0, y: 50 }}
          animate={projectsSectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          id="projects"
          className="scroll-mt-20"
        >
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={projectsSectionInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold inline-block relative">
                  Projects
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                </h2>
              </motion.div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore my data science projects showcasing skills in machine learning, data analysis, and
                visualization.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} inView={projectsSectionInView} />
              ))}
            </div>
          </div>
        </motion.section>

        {/* Why Hire Me Section */}
        <motion.section
          ref={whyHireRef}
          initial={{ opacity: 0, y: 50 }}
          animate={whyHireInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          id="why-hire-me"
          className="scroll-mt-20"
        >
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={whyHireInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold inline-block relative">
                  Why Hire Me
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                </h2>
              </motion.div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <BrainCircuit className="h-6 w-6 text-blue-500" />,
                  title: "Technical Expertise",
                  text: "Strong foundation in machine learning, statistical analysis, and data visualization with hands-on experience using Python, R, and SQL.",
                  color: "blue",
                },
                {
                  icon: <LineChart className="h-6 w-6 text-purple-500" />,
                  title: "Proven Results",
                  text: "Track record of delivering impactful data solutions that have improved efficiency by 25-30% and enhanced decision-making processes.",
                  color: "purple",
                },
                {
                  icon: <Database className="h-6 w-6 text-pink-500" />,
                  title: "Big Data Experience",
                  text: "Experience processing and analyzing large datasets (50GB+) using tools like PySpark, reducing analysis runtime by 40%.",
                  color: "pink",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={whyHireInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className="bg-white p-6 rounded-xl shadow-md border border-blue-100 hover:border-blue-300 transition-all"
                >
                  <div
                    className={`rounded-full bg-${item.color}-100 p-3 w-12 h-12 flex items-center justify-center mb-4`}
                  >
                    {item.icon}
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 text-${item.color}-600`}>{item.title}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={whyHireInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-md mt-8 border border-blue-100"
            >
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">Key Strengths</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  "Advanced predictive modeling with 90%+ accuracy rates",
                  "Data visualization expertise that transforms complex data into actionable insights",
                  "Strong problem-solving skills with a data-driven approach",
                  "Experience with both structured and unstructured data analysis",
                  "Excellent communication skills for presenting technical findings to non-technical stakeholders",
                  "Continuous learner who stays updated with the latest data science techniques",
                ].map((strength, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={whyHireInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                    className="flex items-start gap-2 group"
                  >
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0 group-hover:text-green-600 transition-colors" />
                    <p className="text-gray-700 group-hover:text-gray-900 transition-colors">{strength}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          ref={contactRef}
          initial={{ opacity: 0, y: 50 }}
          animate={contactInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          id="contact"
          className="scroll-mt-20"
        >
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={contactInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold inline-block relative">
                  Contact Me
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                </h2>
              </motion.div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                I'm currently available for full-time data science positions. Let's connect!
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Card className="hover:shadow-xl transition-shadow border-0 shadow-md bg-gradient-to-br from-white to-blue-50 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/30 rounded-full -mr-16 -mt-16 z-0"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-200/30 rounded-full -ml-12 -mb-12 z-0"></div>

                <div className="grid md:grid-cols-2 gap-8 p-8 relative z-10">
                  {/* Left side - Contact Info */}
                  <div className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={contactInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5 }}
                      className="text-2xl font-bold text-blue-700"
                    >
                      Let's Build Something Amazing Together
                    </motion.div>

                    <div className="space-y-4">
                      {[
                        {
                          icon: <Phone className="h-5 w-5 text-blue-500" />,
                          label: "Phone",
                          content: "571-237-0592",
                          animation: { x: -20 },
                        },
                        {
                          icon: <Mail className="h-5 w-5 text-blue-500" />,
                          label: "Email",
                          content: "jagannathn@gwmail.gwu.edu",
                          isLink: true,
                          href: "mailto:jagannathn@gwmail.gwu.edu",
                          animation: { x: -20 },
                        },
                        {
                          icon: <MapPin className="h-5 w-5 text-blue-500" />,
                          label: "Location",
                          content: "Washington, DC",
                          animation: { x: -20 },
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: item.animation?.x || 0 }}
                          animate={contactInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.3, delay: 0.2 * index }}
                          className="flex items-start gap-4 group"
                        >
                          <div className="bg-blue-100 p-2 rounded-full">{item.icon}</div>
                          <div>
                            <p className="text-sm text-gray-500">{item.label}</p>
                            {item.isLink ? (
                              <Link
                                href={item.href}
                                className="font-medium text-gray-800 hover:text-blue-600 transition-colors"
                              >
                                {item.content}
                              </Link>
                            ) : (
                              <p className="font-medium text-gray-800">{item.content}</p>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={contactInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="pt-4"
                    >
                      <p className="text-gray-600 mb-3">Connect with me on social media:</p>
                      <div className="flex gap-3">
                        {[
                          {
                            icon: <Linkedin className="h-5 w-5" />,
                            href: "https://linkedin.com/",
                            label: "LinkedIn",
                            color: "bg-blue-100 text-blue-700 hover:bg-blue-200",
                          },
                          {
                            icon: <Github className="h-5 w-5" />,
                            href: "https://github.com/JAGAN666",
                            label: "GitHub",
                            color: "bg-gray-100 text-gray-700 hover:bg-gray-200",
                          },
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ y: -5, scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <Link
                              href={item.href}
                              target="_blank"
                              className={`flex items-center gap-2 px-4 py-2 rounded-full ${item.color} transition-colors`}
                            >
                              {item.icon}
                              <span>{item.label}</span>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Right side - Contact Form */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={contactInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-white p-6 rounded-xl shadow-sm"
                  >
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Send Me a Message</h3>
                    <form className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-gray-700">
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your name"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-gray-700">
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your email"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Subject"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-700">
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Your message"
                        ></textarea>
                      </div>
                      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                        <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                          Send Message
                        </Button>
                      </motion.div>
                    </form>
                  </motion.div>
                </div>
              </Card>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t py-6 md:py-0 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-600 md:text-left">
            © 2025 Jagannath Narayanaswamy. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {[
              { icon: <Linkedin className="h-4 w-4" />, href: "#", label: "LinkedIn" },
              { icon: <Github className="h-4 w-4" />, href: "https://github.com/JAGAN666", label: "GitHub" },
              { icon: <Mail className="h-4 w-4" />, href: "mailto:jagannathn@gwmail.gwu.edu", label: "Email" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button asChild variant="ghost" size="icon" className="text-gray-600 hover:text-blue-600">
                  <Link href={item.href} aria-label={item.label}>
                    {item.icon}
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

