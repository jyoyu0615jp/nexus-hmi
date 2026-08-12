import type { ProjectStatus } from '../../features/projects/types/project'

import './status-badge.css'

interface StatusBadgeProps {
  status: ProjectStatus
}

const statusLabels: Record<
  ProjectStatus,
  string
> = {
  Planning: '計画中',
  'In Progress': '進行中',
  'Design Review': 'デザインレビュー',
  Completed: '完了',
}

function StatusBadge({
  status,
}: StatusBadgeProps) {
  const statusClass = status
    .toLowerCase()
    .replaceAll(' ', '-')

  return (
    <span
      className={`status-badge status-badge--${statusClass}`}
    >
      {statusLabels[status]}
    </span>
  )
}

export default StatusBadge