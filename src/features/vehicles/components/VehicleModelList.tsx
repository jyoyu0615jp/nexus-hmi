import {
  CarFront,
} from 'lucide-react'

import EmptyState from '../../../components/common/EmptyState'

import type { VehicleModel } from '../types/vehicleModel'

import VehicleModelCard from './VehicleModelCard'

import './vehicle-model-list.css'

interface VehicleModelListProps {
  vehicleModels: VehicleModel[]
  clientId: number
}

function VehicleModelList({
  vehicleModels,
  clientId,
}: VehicleModelListProps) {
  if (vehicleModels.length === 0) {
    return (
      <EmptyState
        icon={CarFront}
        title="車種が登録されていません"
        description="このクライアントには、現在登録されている車種がありません。"
      />
    )
  }

  return (
    <section
      className="vehicle-model-list"
      aria-label="車種一覧"
    >
      {vehicleModels.map(
        (vehicleModel) => (
          <VehicleModelCard
            key={vehicleModel.id}
            vehicleModel={vehicleModel}
            clientId={clientId}
          />
        ),
      )}
    </section>
  )
}

export default VehicleModelList