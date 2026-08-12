import {
  Building2,
  ChevronRight,
} from 'lucide-react'

import {
  Link,
  useParams,
} from 'react-router'

import EmptyState from '../components/common/EmptyState'

import DocumentVehicleCard from '../features/documents/components/DocumentVehicleCard'

import { clients } from '../features/clients/data/clients'
import { vehicleModels } from '../features/vehicles/data/vehicleModels'
import { documents } from '../features/documents/data/documents'

function DocumentClientPage() {
  const { clientId } = useParams()

  const numericClientId =
    Number(clientId)

  const client = clients.find(
    (item) =>
      item.id === numericClientId,
  )

  if (!client) {
    return (
      <div className="page">
        <EmptyState
          icon={Building2}
          title="クライアントが見つかりません"
          description="指定されたクライアントは存在しないか、削除された可能性があります。"
          actionLabel="ドキュメント一覧へ戻る"
          actionTo="/documents"
        />
      </div>
    )
  }

  const clientVehicles =
    vehicleModels.filter(
      (vehicle) =>
        vehicle.clientId === client.id,
    )

  return (
    <div className="page">
      <nav
        className="document-breadcrumb"
        aria-label="パンくずリスト"
      >
        <Link to="/documents">
          ドキュメント
        </Link>

        <ChevronRight
          size={14}
          aria-hidden="true"
        />

        <span>
          {client.name}
        </span>
      </nav>

      <header className="page__header">
        <h1 className="page__title">
          {client.name}
        </h1>

        <p className="page__description">
          車種を選択して、
          関連ドキュメントを確認できます。
        </p>
      </header>

      <section className="page__section">
        <h2 className="page__section-title">
          車両モデル
        </h2>

        {clientVehicles.length >
        0 ? (
          <div className="document-vehicle-grid">
            {clientVehicles.map(
              (vehicle) => {
                const documentCount =
                  documents.filter(
                    (document) =>
                      document.clientId ===
                        client.id &&
                      document.vehicleModelId ===
                        vehicle.id,
                  ).length

                return (
                  <DocumentVehicleCard
                    key={vehicle.id}
                    clientId={client.id}
                    vehicle={vehicle}
                    documentCount={
                      documentCount
                    }
                  />
                )
              },
            )}
          </div>
        ) : (
          <EmptyState
            icon={Building2}
            title="車両モデルがありません"
            description="このクライアントには、現在登録されている車両モデルがありません。"
          />
        )}
      </section>
    </div>
  )
}

export default DocumentClientPage