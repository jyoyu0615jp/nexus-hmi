import { projects } from '../../projects/data/projects'
import ProjectCard from '../../projects/components/ProjectCard'
import './recent-projects.css'

function RecentProjects() {
  const recentProjects = projects.slice(0, 3)

  return (
    <section>
      <h2>Recent Projects</h2>

      <div className="recent-projects">
        {recentProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  )
}

export default RecentProjects