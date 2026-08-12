import {
  UserRound,
} from 'lucide-react'

import {
  useParams,
} from 'react-router'

import BackLink from '../components/common/BackLink'
import EmptyState from '../components/common/EmptyState'
import MemberStatusBadge from '../components/common/MemberStatusBadge'
import ProgressBar from '../components/common/ProgressBar'

import ProjectList from '../features/projects/components/ProjectList'
import { projects } from '../features/projects/data/projects'

import { projectAssignments } from '../features/team/data/projectAssignments'
import { teamMembers } from '../features/team/data/teamMembers'

import '../styles/team-detail.css'

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

function TeamMemberDetailPage() {
  const { memberId } = useParams()

  const member = teamMembers.find(
    (member) =>
      member.id === Number(memberId),
  )

  if (!member) {
    return (
      <div className="page">
        <BackLink to="/team">
          チーム一覧へ戻る
        </BackLink>

        <EmptyState
          icon={UserRound}
          title="メンバーが見つかりません"
          description="指定されたメンバーは存在しないか、削除された可能性があります。"
          actionLabel="チーム一覧へ戻る"
          actionTo="/team"
        />
      </div>
    )
  }

  const assignedProjectIds =
    projectAssignments
      .filter(
        (assignment) =>
          assignment.memberId ===
          member.id,
      )
      .map(
        (assignment) =>
          assignment.projectId,
      )

  const assignedProjects =
    projects.filter(
      (project) =>
        assignedProjectIds.includes(
          project.id,
        ),
    )

  const maxCapacity = 5

  const capacityPercentage =
    Math.min(
      100,
      (
        assignedProjects.length /
        maxCapacity
      ) * 100,
    )

  const roleLabel =
    roleLabels[member.role] ??
    member.role

  const departmentLabel =
    departmentLabels[
      member.department
    ] ?? member.department

  return (
    <div className="page">
      <BackLink to="/team">
        チーム一覧へ戻る
      </BackLink>

      <header className="page__header">
        <p className="page__eyebrow">
          {departmentLabel}
        </p>

        <h1 className="page__title">
          {member.name}
        </h1>

        <p className="page__description">
          {roleLabel}
        </p>
      </header>

      <section className="page__section">
        <h2 className="page__section-title">
          メンバー概要
        </h2>

        <dl className="team-detail-grid">
          <div className="team-detail-item">
            <dt>
              部署
            </dt>

            <dd>
              {departmentLabel}
            </dd>
          </div>

          <div className="team-detail-item">
            <dt>
              ステータス
            </dt>

            <dd>
              <MemberStatusBadge
                status={member.status}
              />
            </dd>
          </div>

          <div className="team-detail-item">
            <dt>
              担当プロジェクト
            </dt>

            <dd>
              {assignedProjects.length}
            </dd>
          </div>
        </dl>
      </section>

      <section className="page__section">
        <h2 className="page__section-title">
          稼働率
        </h2>

        <div className="team-capacity-card">
          <ProgressBar
            value={capacityPercentage}
          />

          <div className="team-capacity-summary">
            <strong>
              {Math.round(
                capacityPercentage,
              )}
              %
            </strong>

            <span>
              {assignedProjects.length}
              {' '}
              / {maxCapacity}
              {' '}
              プロジェクト
            </span>
          </div>
        </div>
      </section>

      <section className="page__section">
        <h2 className="page__section-title">
          担当プロジェクト
        </h2>

        <ProjectList
          projects={assignedProjects}
        />
      </section>
    </div>
  )
}

export default TeamMemberDetailPage