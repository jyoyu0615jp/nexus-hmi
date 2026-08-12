import {
  Users,
} from 'lucide-react'

import EmptyState from '../../../components/common/EmptyState'

import type { TeamMember } from '../types/teamMember'

import TeamMemberCard from './TeamMemberCard'

import './team-member-list.css'

interface TeamMemberListProps {
  members: TeamMember[]
}

function TeamMemberList({
  members,
}: TeamMemberListProps) {
  if (members.length === 0) {
    return (
      <EmptyState
        icon={Users}
        title="該当するメンバーがいません"
        description="検索条件またはフィルターを変更して、もう一度お試しください。"
      />
    )
  }

  return (
    <section
      className="team-member-list"
      aria-label="チームメンバー一覧"
    >
      {members.map((member) => (
        <TeamMemberCard
          key={member.id}
          member={member}
          assignedRole={member.role}
          linkTo={`/team/${member.id}`}
        />
      ))}
    </section>
  )
}

export default TeamMemberList