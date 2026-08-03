import type { HmiProject } from '../types/project'

import ProjectCard from './ProjectCard'

import './project-list.css'

interface ProjectListProps {
  projects: HmiProject[]
}

function ProjectList({ projects }: ProjectListProps) {
  if (projects.length === 0) {
    return (
      <section
        className="project-list-empty"
        aria-live="polite"
      >
        <h2>No projects found</h2>
        <p>
          Try changing the search keyword or project status.
        </p>
      </section>
    )
  }

  return (
    <section
      className="project-list"
      aria-label="HMI project list"
    >
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </section>
  )
}

export default ProjectList