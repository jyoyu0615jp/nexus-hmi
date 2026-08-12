import { Link } from 'react-router'

import type { Client } from '../types/client'

import './client-card.css'

interface ClientCardProps {
  client: Client
}

function ClientCard({
  client,
}: ClientCardProps) {
  return (
    <Link
      className="client-card-link"
      to={`/clients/${client.id}`}
    >
      <article className="client-card">
        <div>
          <p className="client-card__country">
            {client.country}
          </p>

          <h2 className="client-card__name">
            {client.name}
          </h2>
        </div>

        <dl className="client-card__details">
          <div className="client-card__detail">
            <dt>
              市場
            </dt>

            <dd>
              {client.market}
            </dd>
          </div>

          <div className="client-card__detail">
            <dt>
              進行中プロジェクト
            </dt>

            <dd>
              {client.activeProjects}
            </dd>
          </div>
        </dl>
      </article>
    </Link>
  )
}

export default ClientCard