'use server'

import { doc, setDoc } from 'firebase/firestore'
import { v4 as uuid } from 'uuid'

import { db } from '@/lib/firebase'

export async function createEvent(params: {
  name: string
  desc: string
  owner: string
  startDate: string
  endDate: string
  participants: string[]
  eventNumber: string
}) {
  const id = uuid()
  await setDoc(doc(db, 'event', id), {
    id: id,
    name: params.name,
    desc: params.desc,
    owner: params.owner,
    startDate: params.startDate,
    endDate: params.endDate,
    participants: params.participants,
    eventNumber: params.eventNumber,
  })
}
