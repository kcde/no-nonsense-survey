import React, { useContext } from 'react'
import GlobalContext from '../context'
import Button from './Button'
import { logout } from '../firebase/auth'

function LogoutButton() {
  const { setLoggedIn } = useContext(GlobalContext)

  const logoutHandler = () => {
    logout().then(() => {
      setLoggedIn(false)
    })
  }

  return <Button onClick={logoutHandler}>logout</Button>
}

export default LogoutButton
