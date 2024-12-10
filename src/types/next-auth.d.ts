/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from 'next-auth'
import { JWT } from 'next-auth/jwt'

import type { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      // Firebaseの認証情報
      uid: string
      emailVerified?: boolean
    } & DefaultSession['user']
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    // Firebaseの認証情報
    uid: string
    emailVerified: boolean
  }
}
