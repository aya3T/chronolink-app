'use client'

import { Navigation } from '@/components/navigation'

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <Navigation>{children}</Navigation>
}
