import React, { useContext, useEffect, useState } from 'react'
import { getUser } from '../firebase/database'
import GlobalContext from '../context'
import { Navigate, useLocation } from 'react-router-dom'

function ProtectedRoute({ children }) {
  const { isLoggedIn, credentials } = useContext(GlobalContext)
  const [hasUserTaken, setHasUserTaken] = useState(false)
  const location = useLocation()
  useEffect(() => {
    getUser(credentials.uid)
      .then((snapshot) => {
        console.log(snapshot.val())
        if (snapshot.val()) {
          setHasUserTaken(true)
        } else {
          setHasUserTaken(false)
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }, [hasUserTaken, credentials.uid])
  //console.log(credentials)

  //if user is not loggedin navigate to homepage
  if (!isLoggedIn) {
    return <Navigate to="/" state={{ from: location }} replace />
  }

  //if user has taken survey
  if (hasUserTaken) {
    return <p>user has taken survey</p>
  }
  //return user has taken survey

  return children
}

export default ProtectedRoute
