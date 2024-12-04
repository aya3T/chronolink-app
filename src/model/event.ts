export type Event = {
  id: string
  name: string
  desc: string
  owner: string
  startDate: string
  endDate: string
  participants: string[]
  eventNumber: string
}

export type CreateEventRequest = {
  name: string
  desc: string
  owner: string
  startDate: string
  endDate: string
  participants: string[]
  eventNumber: string
}
