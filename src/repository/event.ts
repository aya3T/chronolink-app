import type { CreateEventRequest, Event } from '@/model/event'

export async function createEvent(req: CreateEventRequest) {
  const event = (await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/event`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(req),
  }).then((res) => {
    return res.json()
  })) as Event
  return event
}
