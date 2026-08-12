import {
  Building2,
} from 'lucide-react'

import {
  useParams,
} from 'react-router'

import BackLink from '../components/common/BackLink'
import EmptyState from '../components/common/EmptyState'

import { clients } from '../features/clients/data/clients'

import VehicleModelList from '../features/vehicles/components/VehicleModelList'
import { vehicleModels } from '../features/vehicles/data/vehicleModels'

function ClientDetailPage() {
  const { clientId } = useParams()

  const client = clients.find(
    (client) =>
      client.id === Number(clientId),
  )

  if (!client) {
    return (
      <div className="page">
        <BackLink to="/clients">
          クライアント一覧へ戻る
        </BackLink>

        <EmptyState
          icon={Building2}
          title="クライアントが見つかりません"
          description="指定されたクライアントは存在しないか、削除された可能性があります。"
          actionLabel="クライアント一覧へ戻る"
          actionTo="/clients"
        />
      </div>
    )
  }

  const clientVehicleModels =
    vehicleModels.filter(
      (vehicleModel) =>
        vehicleModel.clientId ===
        client.id,
    )

  return (
    <div className="page">
      <BackLink to="/clients">
        クライアント一覧へ戻る
      </BackLink>

      <header className="page__header">
        <p className="page__eyebrow">
          {client.country}
          {' · '}
          {client.market}
        </p>

        <h1 className="page__title">
          {client.name}
        </h1>

        <p className="page__description">
          このクライアントに関連する
          車両モデルとHMIプロジェクトを確認します。
        </p>
      </header>

      <section className="page__section">
        <h2 className="page__section-title">
          車両モデル
        </h2>

        <VehicleModelList
          vehicleModels={
            clientVehicleModels
          }
          clientId={client.id}
        />
      </section>
    </div>
  )
}

export default ClientDetailPage