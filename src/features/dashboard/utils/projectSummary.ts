import type { HmiProject } from '../../projects/types/project'

export interface ProjectSummary {
  total: number
  active: number
  completed: number
  averageProgress: number
}

export function getProjectSummary(
  projects: HmiProject[]
): ProjectSummary {
  const total = projects.length

  const active = projects.filter(
    (project) => project.status === 'In Progress'
  ).length

  const completed = projects.filter(
    (project) => project.status === 'Completed'
  ).length

  const totalProgress = projects.reduce(
    (sum, project) => sum + project.progress,
    0
  )

  const averageProgress =
    total === 0
      ? 0
      : Math.round(totalProgress / total)

  return {
    total,
    active,
    completed,
    averageProgress,
  }
}