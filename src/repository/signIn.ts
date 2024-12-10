import { signInWithEmailAndPassword } from 'firebase/auth'
import { signIn as signInByNextAuth } from 'next-auth/react'

import { SIGN_IN_SCHEMA } from '../_helpers'

import { formDataToJSON } from '@/helpers/form'
import { auth } from '@/lib/firebase/client'

export const signIn = async (formData: FormData) => {
  const formJson = formDataToJSON(formData)
  const result = SIGN_IN_SCHEMA.safeParse(formJson)

  if (!result.success) {
    const { errors } = result.error
    // バリデーションエラー時の処理を記述
  } else {
    const {
      data: { email, password },
    } = result

    signInWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        if (user) {
          const refreshToken = user.refreshToken
          const idToken = await user.getIdToken()
          await signInByNextAuth('credentials', {
            idToken,
            refreshToken,
            callbackUrl: '/',
          })
        }
      })
      .catch((error) => {
        // エラー処理
      })
  }
}
