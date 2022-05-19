import React, { useContext, useEffect, useState } from 'react'
import { getUser } from '../firebase/database'
import GlobalContext from '../context'
import { Navigate, useLocation } from 'react-router-dom'
import SurveyTaken from '../components/SurveyTaken'

function ProtectedRoute({ children }) {
  const { isLoggedIn, credentials, formSubmitted, setFormSubmitted } =
    useContext(GlobalContext)
  const [hasUserTaken, setHasUserTaken] = useState(null)
  const location = useLocation()
  useEffect(() => {
    if (credentials) {
      getUser(credentials.uid)
        .then((snapshot) => {
          console.log(snapshot.val())
          if (snapshot.val()) {
            setHasUserTaken(true)
            setFormSubmitted(true)
          } else {
            setHasUserTaken(false)
            setFormSubmitted(false)
          }
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }, [hasUserTaken, credentials, formSubmitted, setFormSubmitted])
  //console.log(credentials)

  //if user is not loggedin navigate to homepage

  if (hasUserTaken === null) {
    return <p>loading</p>
  }

  if (!isLoggedIn) {
    return <Navigate to="/" state={{ from: location }} replace />
  }

  //if user has taken survey
  if (hasUserTaken || formSubmitted) {
    return (
      <SurveyTaken hasUserTaken={hasUserTaken} name={credentials.displayName} />
    )
  }
  //return user has taken survey

  return children
}

export default ProtectedRoute
