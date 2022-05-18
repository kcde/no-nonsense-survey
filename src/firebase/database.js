import { getDatabase, ref, set, get } from 'firebase/database'
import { app } from './firebase'

export const db = getDatabase(app)

function getUser(id) {
  return get(ref(db, `users/${id}`))
}

function addUser() {
  set(ref(db, 'users/1'), {
    name: 'keside',
  })
}
function addUserResponse() {}

export { getUser, addUser, addUserResponse }
