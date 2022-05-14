import React, { useContext } from 'react'
//import { useAuth } from '../hooks/useAuth'
import GlobalContext from '../context'
import { Navigate, useLocation } from 'react-router-dom'

function ProtectedRoute({ children }) {
  const { isLoggedIn } = useContext(GlobalContext)
  const location = useLocation()
  if (!isLoggedIn) {
    return <Navigate to="/" state={{ from: location }} replace />
  }

  return children
}

export default ProtectedRoute
