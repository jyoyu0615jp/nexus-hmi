import {
  FolderSearch,
} from 'lucide-react'

import EmptyState from '../../../components/common/EmptyState'

import type { HmiProject } from '../types/project'

import ProjectCard from './ProjectCard'

import './project-list.css'

interface ProjectListProps {
  projects: HmiProject[]
}

function ProjectList({
  projects,
}: ProjectListProps) {
  if (projects.length === 0) {
    return (
      <EmptyState
        icon={FolderSearch}
        title="該当するプロジェクトがありません"
        description="検索条件またはフィルターを変更して、もう一度お試しください。"
      />
    )
  }

  return (
    <section
      className="project-list"
      aria-label="HMIプロジェクト一覧"
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