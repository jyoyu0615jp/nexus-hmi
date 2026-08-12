import {
  FolderKanban,
} from 'lucide-react'

import {
  useParams,
} from 'react-router'

import BackLink from '../components/common/BackLink'
import EmptyState from '../components/common/EmptyState'
import StatusBadge from '../components/common/StatusBadge'
import Timeline from '../components/common/Timeline'

import { clients } from '../features/clients/data/clients'
import { projects } from '../features/projects/data/projects'

import TeamMemberCard from '../features/team/components/TeamMemberCard'
import { projectAssignments } from '../features/team/data/projectAssignments'
import { teamMembers } from '../features/team/data/teamMembers'

import { vehicleModels } from '../features/vehicles/data/vehicleModels'

function ProjectDetailPage() {
  const { projectId } = useParams()

  const project = projects.find(
    (project) =>
      project.id === Number(projectId),
  )

  if (!project) {
    return (
      <div className="page">
        <BackLink to="/projects">
          プロジェクト一覧へ戻る
        </BackLink>

        <EmptyState
          icon={FolderKanban}
          title="プロジェクトが見つかりません"
          description="指定されたプロジェクトは存在しないか、削除された可能性があります。"
          actionLabel="プロジェクト一覧へ戻る"
          actionTo="/projects"
        />
      </div>
    )
  }

  const client = clients.find(
    (client) =>
      client.id === project.clientId,
  )

  const vehicleModel =
    vehicleModels.find(
      (vehicleModel) =>
        vehicleModel.id ===
        project.vehicleModelId,
    )

  const assignedMembers =
    projectAssignments
      .filter(
        (assignment) =>
          assignment.projectId ===
          project.id,
      )
      .map((assignment) => {
        const member =
          teamMembers.find(
            (member) =>
              member.id ===
              assignment.memberId,
          )

        return {
          assignment,
          member,
        }
      })
      .filter(
        (
          item,
        ): item is {
          assignment:
            (typeof projectAssignments)[number]
          member:
            (typeof teamMembers)[number]
        } => Boolean(item.member),
      )

  return (
    <div className="page">
      <BackLink to="/projects">
        プロジェクト一覧へ戻る
      </BackLink>

      <header className="page__header">
        <p className="page__eyebrow">
          {client?.name ??
            'クライアント不明'}
        </p>

        <h1 className="page__title">
          {project.name}
        </h1>

        <p className="page__description">
          {project.description}
        </p>
      </header>

      <section className="page__section">
        <h2 className="page__section-title">
          開発スケジュール
        </h2>

        <div className="project-detail-item project-detail-item--timeline">
          <Timeline
            startDate={
              project.startDate
            }
            dueDate={
              project.dueDate
            }
            progress={
              project.progress
            }
          />
        </div>
      </section>

      <section className="page__section">
        <h2 className="page__section-title">
          プロジェクト概要
        </h2>

        <dl className="project-detail-grid">
          <div className="project-detail-item">
            <dt>
              車両モデル
            </dt>

            <dd>
              {vehicleModel?.code ??
                '車両情報なし'}
            </dd>
          </div>

          <div className="project-detail-item">
            <dt>
              プラットフォーム
            </dt>

            <dd>
              {project.platform}
            </dd>
          </div>

          <div className="project-detail-item">
            <dt>
              市場
            </dt>

            <dd>
              {project.market}
            </dd>
          </div>

          <div className="project-detail-item">
            <dt>
              ステータス
            </dt>

            <dd>
              <StatusBadge
                status={
                  project.status
                }
              />
            </dd>
          </div>
        </dl>
      </section>

      <section className="page__section">
        <h2 className="page__section-title">
          担当チーム
        </h2>

        {assignedMembers.length > 0 ? (
          <div className="project-team-grid">
            {assignedMembers.map(
              ({
                assignment,
                member,
              }) => (
                <TeamMemberCard
                  key={
                    assignment.id
                  }
                  member={
                    member
                  }
                  linkTo={`/team/${member.id}`}
                  assignedRole={
                    assignment.role
                  }
                />
              ),
            )}
          </div>
        ) : (
          <EmptyState
            icon={FolderKanban}
            title="担当メンバーが登録されていません"
            description="このプロジェクトには、現在担当メンバーが登録されていません。"
          />
        )}
      </section>
    </div>
  )
}

export default ProjectDetailPage