import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

import './project-list.css'

function ProjectList() {
  return (
    <section className="project-list" aria-label="HMI project list">
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