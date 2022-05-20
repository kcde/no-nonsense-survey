import { getDatabase, ref, set, get } from 'firebase/database'
import { app } from './firebase'

export const db = getDatabase(app)

function getUser(id) {
  return get(ref(db, `users/${id}`))
}

function addUser(info) {
  return set(ref(db, `users/${info.uid}`), {
    name: info.displayName,
    email: info.email,
  })
}
function addUserResponse() {}

export { getUser, addUser, addUserResponse }
