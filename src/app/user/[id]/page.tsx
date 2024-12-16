import { currentUser } from '@clerk/nextjs/server'

import { getEvents } from '@/repository/event'

export default async function UserPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const userId = (await params).id
  const user = await currentUser()

  if (userId !== user?.id) {
    return null
  }

  return <div>{userId}</div>
}
