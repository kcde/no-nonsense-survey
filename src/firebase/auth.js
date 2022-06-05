import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from 'firebase/auth'
import { app } from './firebase'

const provider = new GoogleAuthProvider(app)
export const auth = getAuth()

export const signIn = () => {
  return signInWithPopup(auth, provider)
}

export const logout = () => {
  return signOut(auth)
}
