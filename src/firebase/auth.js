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
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            //const credential = GoogleAuthProvider.credentialFromResult(result)
            //const token = credential.accessToken
            // The signed-in user info.
            //const user = result.user
            // ...
            //console.log(user.displayName) // send user's name to global state $$contextAPi
        })
        .catch((error) => {
            // Handle Errors here.
            // const errorCode = error.code
            //const errorMessage = error.message
            console.log(error)

            // The email of the user's account used.
            //const email = error.email

            // ...
        })
}

export const logout = () => {
    return signOut(auth)
}
