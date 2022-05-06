import './App.css'
import Container from 'react-bootstrap/Container'
import Home from './components/Home'
import ShawarmaLogo from './components/ShawarmaLogo'
import { Routes, Route } from 'react-router-dom'

function App() {
    return (
        <Container className="App h-screen grid items-center font-mono">
            <Routes>
                <Route path="/" element={<Home />} />

                <Route
                    path="*"
                    element={
                        <div>
                            <ShawarmaLogo />
                            <p className="text-center">
                                There's no shawarma here!
                            </p>
                        </div>
                    }
                />
            </Routes>
        </Container>
    )
}

export default App
