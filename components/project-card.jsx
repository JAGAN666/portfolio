"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProjectCard({ project, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      whileHover={{ y: -10 }}
      className="h-full"
    >
      <Card className="flex flex-col h-full overflow-hidden hover:shadow-xl transition-shadow border border-blue-100 bg-white">
        <div className="relative h-48 overflow-hidden group">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <p className="text-white text-sm font-medium">{project.date}</p>
          </div>
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl text-blue-700">{project.title}</CardTitle>
          <CardDescription className="text-gray-600">{project.date}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-gray-700 mb-4 line-clamp-3">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <Badge key={i} variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-blue-200 hover:border-blue-400 hover:bg-blue-50"
            >
              <Link href={project.github} target="_blank">
                <Github className="mr-2 h-4 w-4 text-blue-600" />
                Code
              </Link>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              size="sm"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              <Link href={project.github} target="_blank">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Project
              </Link>
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

