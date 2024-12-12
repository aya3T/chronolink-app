import CredentialsProvider from 'next-auth/providers/credentials'

import type { NextAuthOptions } from 'next-auth'
import type { JWT } from 'next-auth/jwt' // JWT型をインポート

import { auth } from '@/lib/firebase/admin'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {}, // NextAuthでログインフォームを作る時に使用する
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      authorize: async ({ idToken }: { idToken: string }, _req) => {
        // TODO: ここの型エラーを修正する
        //ここ修正
        // authorizeには受け取ったidTokenを検証しユーザー情報を返すロジックを書く必要がある。
        // ここではクライアントから受け取ったidTokenを検証し、ユーザ情報を取得している
        if (idToken) {
          try {
            // firebaseのadminでidTokenを検証。成功したらユーザー情報(decoded)を返す。
            const decoded = await auth.verifyIdToken(idToken)

            return { ...decoded }
          } catch (err) {
            console.error(err)
          }
        }
        return null
      },
    }),
  ],
  // セッションの保存形式をJWTと定める。
  session: {
    strategy: 'jwt',
  },
  // JWTトークンからユーザー情報を取得してセッションに格納するための関数。
  callbacks: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async jwt({ token, user }: { token: JWT; user?: any }) {
      //ここ修正
      // jwtコールバック
      // jwtコールバックは、JWTトークンが作成または更新されるたびに呼び出されます。
      // authorizeコールバックで取得したユーザ情報をJWTトークンに含める処理
      return { ...token, ...user }
    },
    async session({ session, token }) {
      // sessionコールバック
      // sessionコールバックは、セッションが作成または更新されるたびに呼び出されます。
      // JWTトークンのユーザー情報（Email,UID）を取り出してセッションに格納する。
      session.user.emailVerified = token.emailVerified
      session.user.uid = token.uid
      return session
    },
  },
}
