import {
  CarFront,
} from 'lucide-react'

import {
  useParams,
} from 'react-router'

import BackLink from '../components/common/BackLink'
import EmptyState from '../components/common/EmptyState'

import { clients } from '../features/clients/data/clients'
import { vehicleModels } from '../features/vehicles/data/vehicleModels'

function VehicleModelDetailPage() {
  const {
    clientId,
    vehicleModelId,
  } = useParams()

  const client = clients.find(
    (client) =>
      client.id === Number(clientId),
  )

  const vehicleModel =
    vehicleModels.find(
      (vehicleModel) =>
        vehicleModel.id ===
          Number(vehicleModelId) &&
        vehicleModel.clientId ===
          Number(clientId),
    )

  if (!client || !vehicleModel) {
    return (
      <div className="page">
        <BackLink to="/clients">
          クライアント一覧へ戻る
        </BackLink>

        <EmptyState
          icon={CarFront}
          title="車両モデルが見つかりません"
          description="指定された車両モデルは存在しないか、削除された可能性があります。"
          actionLabel="クライアント一覧へ戻る"
          actionTo="/clients"
        />
      </div>
    )
  }

  return (
    <div className="page">
      <BackLink
        to={`/clients/${client.id}`}
      >
        {client.name}へ戻る
      </BackLink>

      <header className="page__header">
        <p className="page__eyebrow">
          {client.name}
          {' · '}
          {vehicleModel.market}
        </p>

        <h1 className="page__title">
          {vehicleModel.code}
        </h1>

        <p className="page__description">
          {vehicleModel.name}
          {' · '}
          年式 {vehicleModel.modelYear}
        </p>
      </header>

      <section className="page__section">
        <h2 className="page__section-title">
          HMIプロジェクト
        </h2>

        <EmptyState
          icon={CarFront}
          title="関連プロジェクトはありません"
          description="この車両モデルに関連するHMIプロジェクトは現在登録されていません。"
        />
      </section>
    </div>
  )
}

export default VehicleModelDetailPage