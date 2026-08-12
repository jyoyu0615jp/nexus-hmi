import { useState } from 'react'

import {
  File,
  FileChartColumn,
  FileImage,
  FileSpreadsheet,
  FileText,
  Presentation,
  User,
} from 'lucide-react'

import EmptyState from '../../../components/common/EmptyState'

import DocumentPreviewModal from './DocumentPreviewModal'

import type {
  DocumentType,
  ProjectDocument,
} from '../data/documents'

import './document-list.css'

interface DocumentListProps {
  documents: ProjectDocument[]
}

function getDocumentIcon(
  type: DocumentType,
) {
  if (type === 'PDF') {
    return <FileText size={22} />
  }

  if (type === 'Figma') {
    return <FileImage size={22} />
  }

  if (type === 'Excel') {
    return <FileSpreadsheet size={22} />
  }

  if (type === 'PowerPoint') {
    return <Presentation size={22} />
  }

  if (type === 'Specification') {
    return <FileChartColumn size={22} />
  }

  return <File size={22} />
}

function formatDate(
  date: string,
) {
  return new Intl.DateTimeFormat(
    'ja-JP',
    {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    },
  ).format(
    new Date(`${date}T00:00:00`),
  )
}

function DocumentList({
  documents,
}: DocumentListProps) {
  const [
    selectedDocument,
    setSelectedDocument,
  ] = useState<ProjectDocument | null>(
    null,
  )

  if (documents.length === 0) {
    return (
      <EmptyState
        icon={FileText}
        title="ドキュメントがありません"
        description="この車種には、現在登録されているドキュメントがありません。"
      />
    )
  }

  return (
    <>
      <div
        className="document-list"
        aria-label="ドキュメント一覧"
      >
        {documents.map((document) => (
          <article
            key={document.id}
            className="document-card"
            role="button"
            tabIndex={0}
            aria-label={`${document.name}をプレビュー`}
            onClick={() =>
              setSelectedDocument(
                document,
              )
            }
            onKeyDown={(event) => {
              if (
                event.key === 'Enter' ||
                event.key === ' '
              ) {
                event.preventDefault()

                setSelectedDocument(
                  document,
                )
              }
            }}
          >
            <div className="document-card__icon">
              {getDocumentIcon(
                document.type,
              )}
            </div>

            <div className="document-card__body">
              <div className="document-card__header">
                <span className="document-card__type">
                  {document.type}
                </span>

                <span className="document-card__size">
                  {document.size}
                </span>
              </div>

              <h3 className="document-card__name">
                {document.name}
              </h3>

              <div className="document-card__footer">
                <span>
                  <User
                    size={14}
                    aria-hidden="true"
                  />

                  {document.owner}
                </span>

                <span>
                  {formatDate(
                    document.updatedAt,
                  )}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <DocumentPreviewModal
        document={selectedDocument}
        onClose={() =>
          setSelectedDocument(null)
        }
      />
    </>
  )
}

export default DocumentList