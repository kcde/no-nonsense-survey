import React, { useState, useEffect } from 'react'
import GlobalContext from './'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/auth'

function GlobalState({ children }) {
  const login = JSON.parse(localStorage.getItem('survey-login'))
  const [isLoggedIn, setLoggedIn] = useState(login || false)
  const [credentials, setCredentials] = useState({})

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true)
        setCredentials(user)
        localStorage.setItem('survey-login', true)
      } else {
        setLoggedIn(false)
        setCredentials(null)
        localStorage.setItem('survey-login', false)
      }
    })

    return unsubscribe()
  }, [isLoggedIn, credentials])

  //add provider
  return (
    <GlobalContext.Provider
      value={{
        testing: 'ee ddey work',
        isLoggedIn,
        setLoggedIn,
        credentials,
        setCredentials,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalState
