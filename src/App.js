import './App.css'
import { useContext } from 'react'
import GlobalContext from './context'
import Container from 'react-bootstrap/Container'
import Home from './components/Home'
import Survey from './components/Survey'
import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import { Navigate } from 'react-router-dom'

function App() {
  const { isLoggedIn, credentials } = useContext(GlobalContext)
  return (
    <Container className="App h-screen grid items-center max-w-md mx-auto px-4 font-mono">
      <div>
        <div className="   flex justify-end mb-4 p-1">
          {credentials && (
            <div>
              {credentials && (
                <img
                  referrerPolicy="no-referrer"
                  className="w-8 h-8 rounded-full"
                  src={credentials.photoURL}
                  alt={credentials.displayName}
                />
              )}
            </div>
          )}
        </div>
        <Routes>
          <Route
            path="/"
            element={!isLoggedIn ? <Home /> : <Navigate to="/survey" />}
          />

          <Route
            path="/survey"
            element={
              <ProtectedRoute>
                <Survey />
              </ProtectedRoute>
            }
          />
          <Route
            path="*"
            element={
              <div>
                <p className="text-center">There's no shawarma here!</p>
              </div>
            }
          />
        </Routes>
      </div>
    </Container>
  )
}

export default App
