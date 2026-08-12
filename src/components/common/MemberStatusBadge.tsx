import type {
  MemberStatus,
} from '../../features/team/types/teamMember'

import './member-status-badge.css'

interface MemberStatusBadgeProps {
  status: MemberStatus
}

const memberStatusLabels: Record<
  MemberStatus,
  string
> = {
  Available: '対応可能',
  Busy: '稼働中',
  'On Leave': '休暇中',
}

function MemberStatusBadge({
  status,
}: MemberStatusBadgeProps) {
  const statusClass = status
    .toLowerCase()
    .replaceAll(' ', '-')

  return (
    <span
      className={`member-status-badge member-status-badge--${statusClass}`}
    >
      <span
        className="member-status-badge__dot"
        aria-hidden="true"
      />

      {memberStatusLabels[status]}
    </span>
  )
}

export default MemberStatusBadge