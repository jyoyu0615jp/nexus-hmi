import { Link } from 'react-router'

import StatusBadge from '../../../components/common/StatusBadge'
import ProgressBar from '../../../components/common/ProgressBar'

import { clients } from '../../clients/data/clients'
import { vehicleModels } from '../../vehicles/data/vehicleModels'

import type { HmiProject } from '../types/project'

import './project-card.css'

interface ProjectCardProps {
  project: HmiProject
}

function ProjectCard({
  project,
}: ProjectCardProps) {
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

  return (
    <Link
      className="project-card-link"
      to={`/projects/${project.id}`}
    >
      <article className="project-card">
        <div className="project-card__header">
          <div>
            <p className="project-card__platform">
              {project.platform}
            </p>

            <h2 className="project-card__name">
              {project.name}
            </h2>
          </div>

          <StatusBadge
            status={project.status}
          />
        </div>

        <dl className="project-card__details">
          <div className="project-card__detail">
            <dt>
              クライアント
            </dt>

            <dd>
              {client?.name ??
                'クライアント不明'}
            </dd>
          </div>

          <div className="project-card__detail">
            <dt>
              車両
            </dt>

            <dd>
              {vehicleModel?.code ??
                '車両情報なし'}
            </dd>
          </div>

          <div className="project-card__detail">
            <dt>
              市場
            </dt>

            <dd>
              {project.market}
            </dd>
          </div>

          <div className="project-card__detail">
            <dt>
              納期
            </dt>

            <dd>
              {project.dueDate}
            </dd>
          </div>
        </dl>

        <div>
          <h3 className="project-card__progress-title">
            進捗
          </h3>

          <ProgressBar
            value={project.progress}
          />
        </div>
      </article>
    </Link>
  )
}

export default ProjectCard