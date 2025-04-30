import { useEffect } from "react"
import ProjectsGallery from "../components/projects-gallery"

export default function Projects() {
  useEffect(() => {
    document.title = "Projects | Rayyan Balami"
  }, [])
  
  return <ProjectsGallery />
}