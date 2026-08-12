import { Link } from 'react-router'

import type { VehicleModel } from '../types/vehicleModel'

import './vehicle-model-card.css'

interface VehicleModelCardProps {
  vehicleModel: VehicleModel
  clientId: number
}

function VehicleModelCard({
  vehicleModel,
  clientId,
}: VehicleModelCardProps) {
  return (
    <Link
      className="vehicle-model-card-link"
      to={`/clients/${clientId}/vehicles/${vehicleModel.id}`}
    >
      <article className="vehicle-model-card">
        <div>
          <p className="vehicle-model-card__code">
            {vehicleModel.code}
          </p>

          <h3 className="vehicle-model-card__name">
            {vehicleModel.name}
          </h3>
        </div>

        <dl className="vehicle-model-card__details">
          <div className="vehicle-model-card__detail">
            <dt>
              年式
            </dt>

            <dd>
              {vehicleModel.modelYear}
            </dd>
          </div>

          <div className="vehicle-model-card__detail">
            <dt>
              市場
            </dt>

            <dd>
              {vehicleModel.market}
            </dd>
          </div>
        </dl>
      </article>
    </Link>
  )
}

export default VehicleModelCard