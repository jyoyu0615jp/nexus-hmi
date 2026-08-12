import {
  Building2,
  ChevronRight,
  FileText,
} from 'lucide-react'

import { Link } from 'react-router'

import type { Client } from '../../clients/types/client'

import './document-client-card.css'

interface DocumentClientCardProps {
  client: Client
  documentCount: number
}

function DocumentClientCard({
  client,
  documentCount,
}: DocumentClientCardProps) {
  return (
    <Link
      className="document-client-card"
      to={`/documents/${client.id}`}
    >
      <div className="document-client-card__icon">
        <Building2
          size={24}
          aria-hidden="true"
        />
      </div>

      <div className="document-client-card__content">
        <p className="document-client-card__eyebrow">
          クライアント
        </p>

        <h2>
          {client.name}
        </h2>

        <div className="document-client-card__meta">
          <span>
            {client.country}
          </span>

          <span>
            {client.market}
          </span>
        </div>

        <div className="document-client-card__documents">
          <FileText
            size={15}
            aria-hidden="true"
          />

          ドキュメント {documentCount}件
        </div>
      </div>

      <ChevronRight
        className="document-client-card__arrow"
        size={20}
        aria-hidden="true"
      />
    </Link>
  )
}

export default DocumentClientCard