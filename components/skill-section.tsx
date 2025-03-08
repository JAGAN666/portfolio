"use client"

import { Code, BrainCircuit, BarChart, Database } from "lucide-react"
import type { CSSProperties } from "react"

interface SkillCategory {
  title: string
  icon: JSX.Element
  skills: string[]
  theme: {
    background: string
    tag: string
    tagText: string
  }
}

const styles: Record<string, CSSProperties> = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  categoryContainer: {
    background: "white",
    borderRadius: "1rem",
    padding: "2rem",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  },
  categoryHeader: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    marginBottom: "1.5rem",
  },
  iconContainer: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#1f2937",
  },
  skillsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.75rem",
  },
  skillTag: {
    padding: "0.5rem 1rem",
    borderRadius: "9999px",
    fontSize: "0.875rem",
    fontWeight: "500",
    transition: "transform 0.2s ease",
  },
  additionalContainer: {
    marginTop: "2rem",
    padding: "2rem",
    background: "white",
    borderRadius: "1rem",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  },
  additionalTitle: {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#1f2937",
    textAlign: "center",
    marginBottom: "1.5rem",
  },
  additionalSkills: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.75rem",
    justifyContent: "center",
  },
  additionalTag: {
    padding: "0.5rem 1rem",
    borderRadius: "9999px",
    fontSize: "0.875rem",
    fontWeight: "500",
    background: "#EEF2FF",
    color: "#4F46E5",
    transition: "transform 0.2s ease",
  },
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming & Languages",
    icon: <Code size={24} />,
    skills: ["Python", "R", "SQL", "TensorFlow", "HTML/CSS", "PySpark"],
    theme: {
      background: "#EEF2FF",
      tag: "#E0E7FF",
      tagText: "#4F46E5",
    },
  },
  {
    title: "Machine Learning & AI",
    icon: <BrainCircuit size={24} />,
    skills: ["Predictive Modeling", "Time Series", "CNNs", "RNNs", "Reinforcement Learning", "Unsupervised Learning"],
    theme: {
      background: "#F5F3FF",
      tag: "#EDE9FE",
      tagText: "#7C3AED",
    },
  },
  {
    title: "Data Visualization",
    icon: <BarChart size={24} />,
    skills: ["Tableau", "Power BI", "Microsoft Excel", "Google Sheets"],
    theme: {
      background: "#FDF2F8",
      tag: "#FCE7F3",
      tagText: "#DB2777",
    },
  },
  {
    title: "Database & Cloud",
    icon: <Database size={24} />,
    skills: ["MySQL", "MongoDB", "AWS", "PostgreSQL"],
    theme: {
      background: "#ECFDF5",
      tag: "#D1FAE5",
      tagText: "#059669",
    },
  },
]

const additionalSkills = [
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
]

export default function SkillSection() {
  return (
    <div style={styles.container}>
      {skillCategories.map((category, index) => (
        <div
          key={index}
          style={styles.categoryContainer}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)"
            e.currentTarget.style.boxShadow =
              "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)"
            e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
          }}
        >
          <div style={styles.categoryHeader}>
            <div
              style={{
                ...styles.iconContainer,
                background: category.theme.background,
                color: category.theme.tagText,
              }}
            >
              {category.icon}
            </div>
            <h3 style={styles.title}>{category.title}</h3>
          </div>
          <div style={styles.skillsContainer}>
            {category.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                style={{
                  ...styles.skillTag,
                  background: category.theme.tag,
                  color: category.theme.tagText,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)"
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}

      <div style={styles.additionalContainer}>
        <h3 style={styles.additionalTitle}>Additional Skills & Tools</h3>
        <div style={styles.additionalSkills}>
          {additionalSkills.map((skill, index) => (
            <span
              key={index}
              style={styles.additionalTag}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)"
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

