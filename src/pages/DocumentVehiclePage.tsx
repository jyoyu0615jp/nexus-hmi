import {
  CarFront,
  ChevronRight,
} from 'lucide-react'

import {
  Link,
  useParams,
} from 'react-router'

import EmptyState from '../components/common/EmptyState'

import DocumentList from '../features/documents/components/DocumentList'

import { clients } from '../features/clients/data/clients'
import { vehicleModels } from '../features/vehicles/data/vehicleModels'
import { documents } from '../features/documents/data/documents'

function DocumentVehiclePage() {
  const {
    clientId,
    vehicleModelId,
  } = useParams()

  const numericClientId =
    Number(clientId)

  const numericVehicleId =
    Number(vehicleModelId)

  const client = clients.find(
    (item) =>
      item.id === numericClientId,
  )

  const vehicle = vehicleModels.find(
    (item) =>
      item.id === numericVehicleId &&
      item.clientId === numericClientId,
  )

  if (!client || !vehicle) {
    return (
      <div className="page">
        <EmptyState
          icon={CarFront}
          title="車両モデルが見つかりません"
          description="指定された車両モデルは存在しないか、削除された可能性があります。"
          actionLabel="ドキュメント一覧へ戻る"
          actionTo="/documents"
        />
      </div>
    )
  }

  const vehicleDocuments =
    documents
      .filter(
        (document) =>
          document.clientId ===
            client.id &&
          document.vehicleModelId ===
            vehicle.id,
      )
      .sort(
        (a, b) =>
          new Date(
            b.updatedAt,
          ).getTime() -
          new Date(
            a.updatedAt,
          ).getTime(),
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

        <Link
          to={`/documents/${client.id}`}
        >
          {client.name}
        </Link>

        <ChevronRight
          size={14}
          aria-hidden="true"
        />

        <span>
          {vehicle.name}
        </span>
      </nav>

      <header className="page__header">
        <h1 className="page__title">
          {vehicle.name}
        </h1>

        <p className="page__description">
          {client.name}
          {' / '}
          {vehicle.code}
          {' / '}
          年式 {vehicle.modelYear}
        </p>
      </header>

      <section className="page__section">
        <h2 className="page__section-title">
          ドキュメント
        </h2>

        <DocumentList
          documents={vehicleDocuments}
        />
      </section>
    </div>
  )
}

export default DocumentVehiclePage