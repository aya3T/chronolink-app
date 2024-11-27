export type Slot = {
  day: string
  period: number
}

export type Schedule = {
  date: string
  period: number
}

export type User = {
  id: string
  name: string
  icon: string | undefined
  regularSchedules: Slot[]
  schdules: Schedule[]
}
