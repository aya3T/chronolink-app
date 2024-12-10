import { setDoc, doc } from 'firebase/firestore'
import { v4 as uuid } from 'uuid'

import type { CreateEventRequest } from '@/model/event'

import { db } from '@/lib/firebase/client'

export async function POST(req: Request) {
  const params: CreateEventRequest = await req.json()
  const id = uuid()
  const event = {
    id: id,
    name: params.name,
    desc: params.desc,
    owner: params.owner,
    startDate: params.startDate,
    endDate: params.endDate,
    participants: params.participants,
    eventNumber: params.eventNumber,
  }
  await setDoc(doc(db, 'event', id), event)
  return Response.json(event)
}
