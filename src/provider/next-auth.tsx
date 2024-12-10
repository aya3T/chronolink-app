'use client'

import type { ReactNode } from 'react'

import { SessionProvider } from 'next-auth/react'

export const NextAuthProvider = ({ children }: { children: ReactNode }) => (
  <SessionProvider>{children}</SessionProvider>
)
