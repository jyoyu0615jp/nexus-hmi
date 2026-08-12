import type {
  LucideIcon,
} from 'lucide-react'

import { Link } from 'react-router'

import './empty-state.css'

interface EmptyStateProps {
  icon: LucideIcon
  title: string
  description: string
  actionLabel?: string
  actionTo?: string
  onAction?: () => void
}

function EmptyState({
  icon: Icon,
  title,
  description,
  actionLabel,
  actionTo,
  onAction,
}: EmptyStateProps) {
  return (
    <section
      className="empty-state"
      aria-live="polite"
    >
      <div
        className="empty-state__icon"
        aria-hidden="true"
      >
        <Icon size={28} />
      </div>

      <h2 className="empty-state__title">
        {title}
      </h2>

      <p className="empty-state__description">
        {description}
      </p>

      {actionLabel && actionTo && (
        <Link
          className="empty-state__action"
          to={actionTo}
        >
          {actionLabel}
        </Link>
      )}

      {actionLabel &&
        !actionTo &&
        onAction && (
          <button
            className="empty-state__action"
            type="button"
            onClick={onAction}
          >
            {actionLabel}
          </button>
        )}
    </section>
  )
}

export default EmptyState