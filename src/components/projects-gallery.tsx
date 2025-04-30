"";

import FilterButton from "@/components/filter-button";
import ProjectCard from "@/components/project-card";
import type { Project } from "@/types/project";
import { useEffect, useState } from "react";
import PageTitle from "./PageTitle";

export default function ProjectsGallery() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [selectedType, setSelectedType] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch projects data
  useEffect(() => {
    async function fetchProjects() {
      try {
        const projectsData = await import("@/data/projects.json").then(
          (module) => module.default
        );
        // Cast the projects to ensure type safety
        const typedProjects = projectsData.map((project) => ({
          ...project,
          status: project.status as "Completed" | "In Progress" | "Planned",
        })) as Project[];
        setProjects(typedProjects);
        setFilteredProjects(typedProjects);
      } catch (error) {
        console.error("Error loading projects:", error);
      }
    }

    fetchProjects();
  }, []);

  // Filter projects when filter criteria or search query change
  useEffect(() => {
    const filtered = projects.filter((project) => {
      // Filter by type and status
      const matchesType =
        selectedType === "All" || project.type === selectedType;
      const matchesStatus =
        selectedStatus === "All" || project.status === selectedStatus;
      
      // If there's no search query, just use type and status filters
      if (!searchQuery.trim()) {
        return matchesType && matchesStatus;
      }
      
      // If there is a search query, check if it appears in any relevant field
      const query = searchQuery.toLowerCase();
      
      // Check title
      const titleMatch = project.title.toLowerCase().includes(query);
      
      // Check description
      const descriptionMatch = project.description?.toLowerCase().includes(query);
      
      // Check technologies
      const techMatch = project.technologies?.some(tech => 
        tech.toLowerCase().includes(query)
      );
      
      // Check completion date
      const dateMatch = project.completionDate?.toLowerCase().includes(query);
      
      // Check project type
      const typeMatch = project.type.toLowerCase().includes(query);
      
      // Check project status
      const statusMatch = project.status.toLowerCase().includes(query);
      
      // Return true if any field matches and the type/status filters are satisfied
      return (titleMatch || descriptionMatch || techMatch || dateMatch || typeMatch || statusMatch) 
        && matchesType && matchesStatus;
    });

    setFilteredProjects(filtered);
  }, [selectedType, selectedStatus, searchQuery, projects]);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Extract unique categories and statuses
  const categories = [
    "All",
    ...Array.from(new Set(projects.map((project) => project.type))),
  ];
  const statuses = [
    "All",
    ...Array.from(new Set(projects.map((project) => project.status))),
  ];

  return (
    <>
      {/* Main Content */}
      <>
        {/* Page Title */}
        <PageTitle
          title="Projects"
          subtitle="A curated collection of my study projects, showcasing my approach to design and problem-solving."
        />

        {/* Search Bar */}
        <div className="mb-8 fade-in" style={{ animationDelay: "0.05s" }}>
          <div className="relative max-w-md">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg 
                className="w-4 h-4 text-gray-500" 
                aria-hidden="true" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 20 20"
              >
                <path 
                  stroke="currentColor" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="project-search"
              className="block w-full p-2 pl-10 text-sm border-b border-gray-300 bg-transparent focus:outline-none focus:border-gray-900"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        {/* Filters */}
        <div className="mb-16 fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="flex flex-wrap gap-x-8 gap-y-4 mb-8">
            {categories.map((category, index) => (
              <FilterButton
                key={`type-${index}`}
                label={category === "All" ? "All Projects" : category}
                isActive={selectedType === category}
                onClick={() => setSelectedType(category)}
              />
            ))}
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {statuses.map((status, index) => (
              <FilterButton
                key={`status-${index}`}
                label={status === "All" ? "All Status" : status}
                isActive={selectedStatus === status}
                onClick={() => setSelectedStatus(status)}
              />
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-12 fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          {filteredProjects.length === 0 ? (
            <div className="col-span-full text-center py-16 text-gray-400">
              <p>No projects found matching your criteria.</p>
              {searchQuery && (
                <button 
                  className="mt-4 text-gray-600 underline"
                  onClick={() => setSearchQuery("")}
                >
                  Clear search
                </button>
              )}
            </div>
          ) : (
            filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))
          )}
        </div>

        {/* Results count */}
        {filteredProjects.length > 0 && (
          <div className="mt-8 text-sm text-gray-500 text-right fade-in" style={{ animationDelay: "0.3s" }}>
            Showing {filteredProjects.length} of {projects.length} projects
          </div>
        )}
      </>
    </>
  );
}
