import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import type { NextAuthOptions } from 'next-auth'

import { auth } from '@/lib/firebase/admin'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      // eslint-disable-next-line
      authorize: async (credential, req) => {
        if (credential?.idToken) {
          try {
            const decoded = await auth.verifyIdToken(credential.idToken)
            return { ...decoded }
          } catch (err) {
            console.error(err)
          }
        }
        return null
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user }
    },
    // sessionにJWTトークンからのユーザ情報を格納
    async session({ session, token }) {
      session.user.emailVerified = token.emailVerified
      session.user.uid = token.uid
      return session
    },
  },
}

export default NextAuth(authOptions)
