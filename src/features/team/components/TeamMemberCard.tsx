import { Link } from 'react-router'

import MemberStatusBadge from '../../../components/common/MemberStatusBadge'

import type { TeamMember } from '../types/teamMember'

import './team-member-card.css'

interface TeamMemberCardProps {
  member: TeamMember
  assignedRole: string
  linkTo?: string
}

const roleLabels: Record<string, string> = {
  'Project Manager':
    'プロジェクトマネージャー',
  'UI Designer':
    'UIデザイナー',
  'UX Designer':
    'UXデザイナー',
  'Frontend Engineer':
    'フロントエンドエンジニア',
  'QA Engineer':
    'QAエンジニア',
  '3D Artist':
    '3Dアーティスト',
}

const departmentLabels: Record<
  string,
  string
> = {
  'Project Management':
    'プロジェクト管理',
  'HMI Design':
    'HMIデザイン',
  'Experience Design':
    'エクスペリエンスデザイン',
  '3D Production':
    '3D制作',
  Engineering:
    'エンジニアリング',
  'Quality Assurance':
    '品質保証',
}

function TeamMemberCard({
  member,
  assignedRole,
  linkTo,
}: TeamMemberCardProps) {
  const initials = member.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  const roleLabel =
    roleLabels[assignedRole] ??
    assignedRole

  const departmentLabel =
    departmentLabels[
      member.department
    ] ?? member.department

  const cardContent = (
    <article className="team-member-card">
      <div
        className="team-member-card__avatar"
        aria-hidden="true"
      >
        {initials}
      </div>

      <div className="team-member-card__content">
        <h3 className="team-member-card__name">
          {member.name}
        </h3>

        <p className="team-member-card__role">
          {roleLabel}
        </p>

        <p className="team-member-card__department">
          {departmentLabel}
        </p>
      </div>

      <div className="team-member-card__status">
        <MemberStatusBadge
          status={member.status}
        />
      </div>
    </article>
  )

  if (!linkTo) {
    return cardContent
  }

  return (
    <Link
      className="team-member-card-link"
      to={linkTo}
    >
      {cardContent}
    </Link>
  )
}

export default TeamMemberCard