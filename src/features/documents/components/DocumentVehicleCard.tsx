import {
  CarFront,
  ChevronRight,
  FileText,
} from 'lucide-react'

import { Link } from 'react-router'

import type { VehicleModel } from '../../vehicles/types/vehicleModel'

import './document-vehicle-card.css'

interface DocumentVehicleCardProps {
  clientId: number
  vehicle: VehicleModel
  documentCount: number
}

function DocumentVehicleCard({
  clientId,
  vehicle,
  documentCount,
}: DocumentVehicleCardProps) {
  return (
    <Link
      className="document-vehicle-card"
      to={`/documents/${clientId}/vehicles/${vehicle.id}`}
    >
      <div className="document-vehicle-card__icon">
        <CarFront
          size={24}
          aria-hidden="true"
        />
      </div>

      <div className="document-vehicle-card__content">
        <p className="document-vehicle-card__eyebrow">
          車両モデル
        </p>

        <h2>
          {vehicle.name}
        </h2>

        <div className="document-vehicle-card__meta">
          <span>
            {vehicle.code}
          </span>

          <span>
            年式 {vehicle.modelYear}
          </span>

          <span>
            {vehicle.market}
          </span>
        </div>

        <div className="document-vehicle-card__documents">
          <FileText
            size={15}
            aria-hidden="true"
          />

          ドキュメント {documentCount}件
        </div>
      </div>

      <ChevronRight
        className="document-vehicle-card__arrow"
        size={20}
        aria-hidden="true"
      />
    </Link>
  )
}

export default DocumentVehicleCard