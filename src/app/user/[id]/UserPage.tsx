'use client'

import { getEvents } from '@/repository/event'

type Props = {
  userId: string
}

export function UserPage({ params }: { params: Props }) {
  const events = getEvents(params.userId)
  return (
    <div>
      {events.map((event) => (
        <p key={event.id}>{event.name}</p>
      ))}
    </div>
  )
}
