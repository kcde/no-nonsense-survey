import './App.css'
import { useContext } from 'react'
import GlobalContext from './context'
import Container from 'react-bootstrap/Container'
import Home from './components/Home'
import Survey from './components/Survey'
import ShawarmaLogo from './components/ShawarmaLogo'
import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import { Navigate } from 'react-router-dom'

function App() {
  const { isLoggedIn } = useContext(GlobalContext)
  return (
    <Container className="App h-screen grid items-center max-w-md mx-auto font-mono">
      <div>
        <ShawarmaLogo />

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
