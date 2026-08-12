import type {
  ReactNode,
} from 'react'

import { Link } from 'react-router'

interface BackLinkProps {
  to: string
  children: ReactNode
}

function BackLink({
  to,
  children,
}: BackLinkProps) {
  return (
    <Link
      className="back-link"
      to={to}
    >
      <span aria-hidden="true">
        ←
      </span>

      <span>
        {children}
      </span>
    </Link>
  )
}

export default BackLink