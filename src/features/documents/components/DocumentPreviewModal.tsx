import {
  CalendarDays,
  FileText,
  FolderKanban,
  HardDrive,
  User,
  X,
} from 'lucide-react'

import type { ProjectDocument } from '../data/documents'

import './document-preview-modal.css'

interface DocumentPreviewModalProps {
  document: ProjectDocument | null
  onClose: () => void
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat(
    'ja-JP',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    },
  ).format(
    new Date(`${date}T00:00:00`),
  )
}

function DocumentPreviewModal({
  document,
  onClose,
}: DocumentPreviewModalProps) {
  if (!document) {
    return null
  }

  return (
    <>
      <button
        className="document-preview-backdrop"
        type="button"
        aria-label="プレビューを閉じる"
        onClick={onClose}
      />

      <aside
        className="document-preview-modal"
        aria-label="ドキュメントプレビュー"
      >
        <div className="document-preview-modal__header">
          <div className="document-preview-modal__heading">
            <div className="document-preview-modal__icon">
              <FileText
                size={22}
                aria-hidden="true"
              />
            </div>

            <div>
              <p>
                ドキュメントプレビュー
              </p>

              <h2>
                {document.name}
              </h2>
            </div>
          </div>

          <button
            className="document-preview-modal__close"
            type="button"
            aria-label="プレビューを閉じる"
            onClick={onClose}
          >
            <X
              size={18}
              aria-hidden="true"
            />
          </button>
        </div>

        <div className="document-preview-modal__body">
          <div className="document-preview-modal__file">
            <FileText
              size={54}
              aria-hidden="true"
            />

            <span>
              {document.type}
            </span>

            <strong>
              {document.name}
            </strong>

            <p>
              プロジェクトドキュメントの
              プレビュー情報を表示しています。
            </p>
          </div>

          <dl className="document-preview-details">
            <div>
              <dt>
                <HardDrive
                  size={15}
                  aria-hidden="true"
                />

                ファイルサイズ
              </dt>

              <dd>
                {document.size}
              </dd>
            </div>

            <div>
              <dt>
                <User
                  size={15}
                  aria-hidden="true"
                />

                担当者
              </dt>

              <dd>
                {document.owner}
              </dd>
            </div>

            <div>
              <dt>
                <CalendarDays
                  size={15}
                  aria-hidden="true"
                />

                更新日
              </dt>

              <dd>
                {formatDate(
                  document.updatedAt,
                )}
              </dd>
            </div>

            <div>
              <dt>
                <FolderKanban
                  size={15}
                  aria-hidden="true"
                />

                プロジェクトID
              </dt>

              <dd>
                #{document.projectId}
              </dd>
            </div>
          </dl>
        </div>
      </aside>
    </>
  )
}

export default DocumentPreviewModal