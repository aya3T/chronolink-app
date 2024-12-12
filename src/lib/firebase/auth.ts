import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged as _onAuthStateChanged,
} from 'firebase/auth'

import type { User, UserCredential } from 'firebase/auth'

import { auth } from '@/lib/firebase/client'

// 認証状態の変化を監視する関数
// ユーザーがサインインまたはサインアウトしたときにコールバック関数が呼び出される
export function onAuthStateChanged(cb: (user: User | null) => void) {
  return _onAuthStateChanged(auth, cb)
}

// Googleアカウントでサインインする関数
export async function signInWithGoogle(): Promise<UserCredential> {
  const provider = new GoogleAuthProvider()

  try {
    const userCredential = await signInWithPopup(auth, provider)
    return userCredential
  } catch (error) {
    console.error('Googleでのサインイン中にエラーが発生しました', error)
    throw error // エラーを呼び出し元に伝播
  }
}

// サインアウトする関数
export async function signOut() {
  try {
    return auth.signOut() // Firebaseのサインアウトメソッドを呼び出す
  } catch (error) {
    console.error('サインアウト中にエラーが発生しました', error) // サインアウトに失敗した場合のエラーハンドリング
    throw error // エラーを呼び出し元に伝播
  }
}
