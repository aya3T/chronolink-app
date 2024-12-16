import type { CreateEventRequest, Event } from '@/model/event'

export async function getEvent(id: string) {
  // 指定したeventIdのイベントを取得
  const event = (await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/event/${id}`,
  ).then((res) => {
    return res.json()
  })) as Event
  return event
}

export async function getEvents(userId: string) {
  // 指定したuserIdが参加者として含まれるイベントを全て取得
  const events = (await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/${userId}/event`,
  ).then((res) => {
    return res.json()
  })) as Event[]
  return events
}

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
