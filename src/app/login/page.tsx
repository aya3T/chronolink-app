'use client'

import { useState } from 'react'

import { signInWithEmailAndPassword } from 'firebase/auth'
import { signIn as signInByNextAuth } from 'next-auth/react'

import { auth } from '@/lib/firebase/client'

const SingIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = async () => {
    if (!email) return
    if (!password) return

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      )
      const idToken = await userCredential.user.getIdToken()
      await signInByNextAuth('credentials', {
        idToken,
        callbackUrl: '/',
      })
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="メールアドレス"
      />
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="パスワード"
      />
      <button
        type="button"
        onClick={() => {
          signIn()
        }}
      >
        ログイン
      </button>
    </div>
  )
}

export default SingIn
