import type { HmiProject } from '../types/project'

import './project-card.css'

interface ProjectCardProps {
  project: HmiProject
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card__header">
        <div>
          <p className="project-card__platform">{project.platform}</p>
          <h2 className="project-card__name">{project.name}</h2>
        </div>

        <span
          className={`project-card__status project-card__status--${project.status
            .toLowerCase()
            .replace(' ', '-')}`}
        >
          {project.status}
        </span>
      </div>

      <dl className="project-card__details">
        <div className="project-card__detail">
          <dt>Client</dt>
          <dd>{project.client}</dd>
        </div>

        <div className="project-card__detail">
          <dt>Market</dt>
          <dd>{project.market}</dd>
        </div>
      </dl>

      <div>
        <div className="project-card__progress-header">
          <span>Progress</span>
          <strong>{project.progress}%</strong>
        </div>

        <div
          className="project-card__progress-track"
          aria-label={`Project progress: ${project.progress}%`}
        >
          <div
            className="project-card__progress-value"
            style={{ width: `${project.progress}%` }}
          />
        </div>
      </div>
    </article>
  )
}

export default ProjectCard