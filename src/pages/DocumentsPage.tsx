import DocumentClientCard from '../features/documents/components/DocumentClientCard'

import { clients } from '../features/clients/data/clients'
import { documents } from '../features/documents/data/documents'

function DocumentsPage() {
  return (
    <div className="page">
      <header className="page__header">
        <h1 className="page__title">
          ドキュメント
        </h1>

        <p className="page__description">
          クライアントを選択して、
          プロジェクトドキュメントを確認できます。
        </p>
      </header>

      <section className="page__section">
        <h2 className="page__section-title">
          クライアント
        </h2>

        <div className="document-client-grid">
          {clients.map((client) => {
            const documentCount =
              documents.filter(
                (document) =>
                  document.clientId ===
                  client.id,
              ).length

            return (
              <DocumentClientCard
                key={client.id}
                client={client}
                documentCount={
                  documentCount
                }
              />
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default DocumentsPage