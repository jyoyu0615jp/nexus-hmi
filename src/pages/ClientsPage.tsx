import ClientList from '../features/clients/components/ClientList'
import { clients } from '../features/clients/data/clients'

function ClientsPage() {
  return (
    <div className="page">
      <header className="page__header">
        <h1 className="page__title">
          クライアント
        </h1>

        <p className="page__description">
          自動車メーカーごとのHMIプロジェクトと
          車両モデルを確認します。
        </p>
      </header>

      <ClientList clients={clients} />
    </div>
  )
}

export default ClientsPage