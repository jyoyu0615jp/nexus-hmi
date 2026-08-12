import ProjectCard from '../../projects/components/ProjectCard'
import { projects } from '../../projects/data/projects'

import './recent-projects.css'

function RecentProjects() {
  const recentProjects =
    projects.slice(0, 3)

  return (
    <section className="recent-projects-section">
      <h2 className="recent-projects__title">
        最近のプロジェクト
      </h2>

      <div className="recent-projects">
        {recentProjects.map(
          (project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ),
        )}
      </div>
    </section>
  )
}

export default RecentProjects