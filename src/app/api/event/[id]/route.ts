import { getDocs, query, collection, where } from 'firebase/firestore'

import type { Event } from '@/model/event'

import { db } from '@/lib/firebase/client'

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const eventId = (await params).id
  const querySnapshot = await getDocs(
    query(collection(db, 'event'), where('id', '==', eventId)),
  )
  const events: Event[] = []
  querySnapshot.forEach((doc) => {
    events.push(doc.data() as Event)
  })
  if (events.length === 0) {
    return Response.json({ message: 'Invalid Id' }, { status: 500 })
  } else {
    return Response.json(events[0])
  }
}
