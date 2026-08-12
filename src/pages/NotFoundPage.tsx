import {
  ArrowLeft,
  TriangleAlert,
} from 'lucide-react'

import { Link } from 'react-router'

import '../styles/not-found.css'

function NotFoundPage() {
  return (
    <main className="not-found">
      <div className="not-found__content">
        <div
          className="not-found__icon"
          aria-hidden="true"
        >
          <TriangleAlert size={28} />
        </div>

        <p className="not-found__code">
          ERROR 404
        </p>

        <h1 className="not-found__title">
          ページが見つかりません
        </h1>

        <p className="not-found__description">
          指定されたページは存在しないか、
          移動された可能性があります。
        </p>

        <Link
          className="not-found__action"
          to="/"
        >
          <ArrowLeft
            size={17}
            aria-hidden="true"
          />

          ダッシュボードへ戻る
        </Link>
      </div>
    </main>
  )
}

export default NotFoundPage