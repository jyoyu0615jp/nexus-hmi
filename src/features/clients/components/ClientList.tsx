import {
  Building2,
} from 'lucide-react'

import EmptyState from '../../../components/common/EmptyState'

import type { Client } from '../types/client'

import ClientCard from './ClientCard'

import './client-list.css'

interface ClientListProps {
  clients: Client[]
}

function ClientList({
  clients,
}: ClientListProps) {
  if (clients.length === 0) {
    return (
      <EmptyState
        icon={Building2}
        title="クライアントがありません"
        description="現在表示できるクライアントはありません。"
      />
    )
  }

  return (
    <section
      className="client-list"
      aria-label="クライアント一覧"
    >
      {clients.map((client) => (
        <ClientCard
          key={client.id}
          client={client}
        />
      ))}
    </section>
  )
}

export default ClientList