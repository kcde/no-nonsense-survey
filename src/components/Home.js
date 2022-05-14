import React, { useContext } from 'react'
import GlobalContext from '../context'
import Row from 'react-bootstrap/Row'
import { useNavigate, useLocation } from 'react-router-dom'
import { GoogleLoginButton } from 'react-social-login-buttons'
import { signIn } from '../firebase/auth'

function Home() {
  const { testing, setLoggedIn } = useContext(GlobalContext)
  let navigate = useNavigate()
  let location = useLocation()
  const from = location.state ? location.state.from.pathname : '/survey'

  function singInAndNavigate() {
    signIn().then(() => {
      setLoggedIn(true)
      navigate(from)
    })
  }

  return (
    <Row className="">
      <Row className="text-center mb-4 mt-2">
        <p className="leading-relaxed">
          Hi, this is a simple, straight forward, no bullshit survey form for a
          fun side project for those that are in love with{' '}
          <span className="underline underline-offset-4 decoration-red-400 ">
            shawarma {testing}
          </span>
          . Please{' '}
          <span className="decoration-red-400 underline underline-offset-4">
            authenticate
          </span>{' '}
          with your google account to ge started.
        </p>
      </Row>
      <Row className="w-60 mx-auto  ">
        <GoogleLoginButton
          style={{ fontSize: '16px' }}
          onClick={singInAndNavigate}
        />
      </Row>
    </Row>
  )
}

export default Home
