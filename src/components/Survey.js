import React, { useContext } from 'react'
import GlobalContext from '../context'
import { logout } from '../firebase/auth'

function Survey() {
  const { credentials, setLoggedIn } = useContext(GlobalContext)

  return (
    <div>
      Survey for {credentials && credentials.displayName}{' '}
      <button
        onClick={() => {
          logout().then(() => {
            setLoggedIn(false)
          })
        }}
      >
        logout
      </button>
    </div>
  )
}

export default Survey
