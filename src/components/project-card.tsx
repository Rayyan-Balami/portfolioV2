""

import { useState, useEffect } from "react"
import type { Project } from "@/types/project"

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Add a small delay based on index for staggered animation
    const timer = setTimeout(
      () => {
        setIsVisible(true)
      },
      100 + (index % 5) * 100,
    )

    return () => clearTimeout(timer)
  }, [index])

  // Format date
  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return "No date"
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date)
  }

  return (
    <a
      href={project.url}
      className={`group project-card grid grid-rows-subgrid gap-6 row-span-3 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      style={{
        transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${0.3 + (index % 5) * 0.1}s`,
      }}
    >
      <div className="overflow-hidden aspect-[4/5] border border-gray-200">
        <div className="relative w-full h-full">
          <img
            src={project.image || "/placeholder.svg?height=600&width=480"}
            alt={project.title}
            className="group-hover:scale-105 object-cover object-top transition-transform duration-300"
            style={{ transformOrigin: "center" }}
          />
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex justify-between gap-4">
          <h3 className="text-lg font-medium leading-none">{project.title}</h3>
          <span className="text-sm uppercase tracking-wider text-gray-500">{project.type}</span>
        </div>
        <p className="text-base text-gray-600">{project.description}</p>
        {project.technologies && (
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((tech, i) => (
              <span 
                key={i} 
                className="px-2 py-1 bg-gray-100 text-xs rounded-md text-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="pt-2 flex justify-between items-center text-sm text-gray-500">
        <span>{formatDate(project.completionDate)}</span>
        {project.status === "Completed" ? (
          <span className="px-3 py-1 bg-gray-100 rounded-full">Completed</span>
        ) : (
          <span className="px-3 py-1 bg-black text-white rounded-full">In Progress</span>
        )}
      </div>
    </a>
  )
}
