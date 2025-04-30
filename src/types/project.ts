export interface Project {
  url: string;
  title: string;
  description: string;
  image: string;
  type: string;
  technologies: string[];
  status: "Completed" | "In Progress" | "Planned";
  completionDate: string;
}
